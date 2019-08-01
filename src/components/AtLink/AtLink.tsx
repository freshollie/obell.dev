import React from "react";
import "./AtLink.css";

interface AtLinkProps {
  children: string;
  href: string;
}

const AtLink: React.FC<AtLinkProps> = ({ children, href }) => (
  <a className="at-link" href={href}>{`@${children}`}</a>
);

export default AtLink;
