// Simple live-reload server. No dependencies.
// Usage: node server.js   (then open http://localhost:3000)

const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const ROOT = path.resolve(__dirname, "static");

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".txt": "text/plain",
};

// Snippet injected into every HTML page: reloads when the server says so.
const CLIENT = `<script>
  new EventSource("/__reload").onmessage = () => location.reload();
</script>`;

// Connected browsers (Server-Sent Events)
const clients = new Set();

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split("?")[0]);

  if (urlPath === "/__reload") {
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    });
    res.write("\n");
    clients.add(res);
    req.on("close", () => clients.delete(res));
    return;
  }

  let filePath = path.join(ROOT, urlPath);
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403).end("Forbidden");
    return;
  }
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, "index.html");
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404).end("Not found");
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      "Content-Type": TYPES[ext] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    res.end(ext === ".html" ? data.toString() + CLIENT : data);
  });
});

// Watch the static folder (recursive works on macOS/Windows, and Linux on Node 20+)
let timer;
fs.watch(ROOT, { recursive: true }, (event, filename) => {
  clearTimeout(timer); // debounce bursts of events from editors
  timer = setTimeout(() => {
    console.log(`Changed: ${filename || "(unknown)"} -> reloading`);
    for (const client of clients) client.write("data: reload\n\n");
  }, 50);
});

server.listen(PORT, () => {
  console.log(`Serving ${ROOT} at http://localhost:${PORT}`);
});