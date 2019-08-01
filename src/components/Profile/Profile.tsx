import React from "react";
import "./Profile.css";
import Emoji from "react-emoji-render";
import ProfilePic from "../ProfilePic/ProfilePic";
import AtLink from "../AtLink/AtLink";

const Profile: React.FC = () => (
  <div className="profile">
    <div className="bio">
      <h1>
        <Emoji text="Hi :wave:, I'm Ollie" />
      </h1>
      <p>
        I'm a full-stack developer who loves creating, deploying, and
        maintaining, clean and tested software.
      </p>
      <p>
        {"Currently I'm an Associate Developer "}
        <AtLink href="http://ynap.com">ynap</AtLink>
      </p>
      <p>
        {"And you can find some of my works on GitHub "}
        <AtLink href="https://github.com/freshollie">freshollie</AtLink>
      </p>
    </div>
    <ProfilePic />
  </div>
);

export default Profile;
