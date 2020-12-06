import type { Event } from "../components/Timeline";

const history: Event[] = [
  {
    title: "Started Programming",
    duration: [
      [new Date("2014-07-01"), new Date("2018-08-01")],
      [new Date("2017-07-01"), new Date("2018-09-01")],
    ],
    icon: ":computer:",
  },
  {
    title: "Intern Software Developer",
    location: "IndiCater",
    duration: [
      [new Date("2014-07-01"), new Date("2018-08-01")],
      [new Date("2017-07-01"), new Date("2018-09-01")],
    ],
  },
  {
    title: "Software Engineer",
    location: "Caterva / Allelion Energy Systems",
    duration: [new Date("2017-08-01"), new Date("2018-09-01")],
  },
  {
    title: "BSc Computer Science (First Class Hons)",
    location: "Coventry University",
    duration: [new Date("2015-09-19"), new Date("2019-05-03")],
    icon: ":mortar_board:",
  },
  {
    title: "Associate Developer",
    location: "YNAP",
    duration: [new Date("2019-05-28"), new Date("2020-11-13")],
    details: [
      "Full-stack TypeScript/JavaScript developer",
      "Manage all aspects of development from linting to deployment to system design",
    ],
  },
  {
    title: "Software Engineer III",
    location: "Bulb",
    duration: [new Date("2020-11-16")],
    details: ["Full-stack Software Engineer"],
  },
];

export default history;
