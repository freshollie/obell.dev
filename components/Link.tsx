import React from "react";
import styled from "styled-components";

interface LinkProps {
  children: string;
  href: string;
  className?: string;
  atLink?: boolean;
}

const StyledLink = styled.a`
  font-weight: bold;
  text-decoration: none;
  text-shadow: 1px 1px 1px #00000017;
  color: black;
  &:hover {
    text-decoration: underline;
  }
`;

const Link: React.FC<LinkProps> = ({
  children,
  href,
  className,
  atLink = false
}) => (
  <StyledLink className={className} href={href}>
    {atLink && "@"}
    {children}
  </StyledLink>
);

export default Link;
