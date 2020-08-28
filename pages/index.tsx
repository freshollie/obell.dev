import React from "react";
import { Emojione } from "react-emoji-render";
import styled from "styled-components";
import { Timeline, TimelineEvent } from "react-event-timeline";
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

import Layout from "../components/Layout";
import ProfilePic from "../components/ProfilePic";
import Link from "../components/Link";

const Header = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #6363ff;
  padding: 3rem;
  color: white;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  h1 {
    font-size: 3rem;
  }
  height: 400px;
  font-size: 1.5rem;

  @media only screen and (max-width: 800px) {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 10vw));
    flex-direction: column;
    font-size: 1.3rem;
    height: 630px;
    h1 {
      font-size: 2.5rem;
    }
  }
`;

const HeaderSubtext = styled.div`
  font-size: 0.7rem;
`;

const HeaderIcons = styled.div`
  margin-top: 1rem;
  display: flex;
  font-size: 3rem;
  justify-content: center;
  align-items: center;
`;

const LinkIcon = styled.a`
  padding-right: 0.8rem;
  padding-left: 0.8rem;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease-in;
  filter: drop-shadow(5px 5px #00000017);
  svg:hover {
    filter: drop-shadow(5px 5px #00000017);
  }
`;

const AboutSection = styled.section`
  margin-top: -5vw;
  padding-top: 5vw;
  padding: 2rem;
  color: black;
  font-size: 1.3rem;

  li {
    margin-bottom: 1rem;
    list-style-type: none;
  }
`;

const WhiteLink = styled(Link)`
  color: white;
`;

const HistorySection = styled.section`
  padding: 2rem;
  background-color: #e0e0e0;
  font-size: 1.3rem;
`;

const Footer = styled.footer`
  padding: 0.5rem;
  padding-right: 1rem;
  background-color: #ececec;
  color: #444444;
  font-size: 0.8rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const Home: React.FC = () => (
  <Layout>
    <main>
      <Header>
        <div>
          <h1>
            <Emojione svg text="Hi :wave:, I'm Ollie" />
          </h1>
          <div>
            I do Software Engineering{" "}
            <WhiteLink atLink href="http://ynap.com">
              ynap
            </WhiteLink>
          </div>
        </div>
        <div>
          <ProfilePic />
          <HeaderIcons>
            <LinkIcon href="https://github.com/freshollie">
              <FaGithub />
            </LinkIcon>
            <LinkIcon href="https://instagram.com/ol.bell">
              <FaInstagram />{" "}
            </LinkIcon>
            <LinkIcon href="https://www.youtube.com/user/dodaxo1234567890roll">
              <FaYoutube />
            </LinkIcon>
          </HeaderIcons>
          <HeaderSubtext>
            Checkout{" "}
            <WhiteLink href="https://github.com/freshollie/cv/raw/master/cv.pdf">
              my cv
            </WhiteLink>{" "}
            or email me{" "}
            <WhiteLink href="mailto:freshollie@gmail.com">
              freshollie@gmail.com
            </WhiteLink>
          </HeaderSubtext>
        </div>
      </Header>
      <AboutSection>
        <h2>What I do</h2>
        <li>
          <b>-</b> I specialise in writing functional,{" "}
          <Link href="https://github.com/freshollie/fresh-configurator">
            full-stack TypeScript/JavaScript with Node.JS, React
          </Link>
          , Angular, and Vue, with extensive knowledge in writing Python/Typed
          Python
        </li>
        <li>
          <b>-</b> I develop OSS with multiple languages in my free time,
          including{" "}
          <Link href="https://github.com/freshollie/monkeyboard-radio-android">
            Android Applications
          </Link>
          , <Link href="https://thattiktok.video">WebApps</Link>, and{" "}
          <Link href="https://github.com/freshollie/abridge">Tools</Link>
        </li>
        <li>
          <b>-</b> I&apos;m a stickler for the linter, and I enforce automatic
          codeformatting with any project I work on
        </li>
        <li>
          <b>-</b> I automate everything, and{" "}
          <Link href="https://github.com/freshollie/fresh-configurator/actions">
            love CI/CD
          </Link>
        </li>
        <li>
          <b>-</b> I have lots of experience{" "}
          <Link href="https://github.com/beefboard">
            designing, writing, and deploying
          </Link>{" "}
          microservice-based horizontally-scalable software
        </li>
      </AboutSection>
      <HistorySection>
        <h2>What I&apos;ve done</h2>
        <Timeline>
          <TimelineEvent
            title={<h4>Associate Developer - YOOX Net-a-Porter Group</h4>}
            createdAt={<div>May 2019 - Now</div>}
            icon={<Emojione text=":handshake:" />}
            iconStyle={{ fontSize: "1.5rem" }}
          >
            <li>Full-stack TypeScript/JavaScript developer</li>
            <li>
              Manage all aspects of development from linting to deployment to
              system design
            </li>
          </TimelineEvent>
          <TimelineEvent
            title={
              <h4>
                BSc Computer Science (First Class Hons) - Coventry University
              </h4>
            }
            createdAt={<div>Septemer 2015 - May 2019</div>}
            icon={<Emojione text=":mortar_board:" />}
            iconStyle={{ fontSize: "1.5rem" }}
          />
          <TimelineEvent
            title={
              <h4>
                Software Engineer - Caterva GmbH / Allelion Energy System GmbH
              </h4>
            }
            createdAt={<div>August 2017 - September 2018</div>}
            icon={<Emojione text=":handshake:" />}
            iconStyle={{ fontSize: "1.5rem" }}
          />
          <TimelineEvent
            title={<h4>Intern Software Developer - Indicater Ltd</h4>}
            createdAt={
              <div>
                <div>July 2015 - September 2015</div>
                <div>July 2014 - August 2014</div>
              </div>
            }
            icon={<Emojione text=":handshake:" />}
            iconStyle={{ fontSize: "1.5rem" }}
          />
          <TimelineEvent
            title={<h4>Started programming</h4>}
            createdAt={
              <div>
                <div>September 2012 - Present</div>
              </div>
            }
            icon={<Emojione text=":computer:" />}
            iconStyle={{ fontSize: "1.5rem" }}
          />
        </Timeline>
      </HistorySection>
    </main>
    <Footer>
      <div>
        Developed with <Link href="https://nextjs.org/">Next</Link> (in
        TypeScript){" "}
        <Link href="https://github.com/freshollie/ollie.codes">Source</Link>
      </div>
    </Footer>
  </Layout>
);

export default Home;
