import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 250px;
  border-radius: 20%;
  box-shadow: 5px 10px #00000017;
`;

const ProfilePic: React.FC = () => <Image src="/img/pp.jpeg" />;

export default ProfilePic;
