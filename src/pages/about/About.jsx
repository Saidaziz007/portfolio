import React from "react";
import about from "../../assets/about.jpg";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import {
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaSass,
  FaBootstrap,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about-all">
          <div className="about-left">
            <img src={about} alt="" />
          </div>
          <div className="about-right">
            <h2>About Me</h2>
            <p>
              Hi there!, I'm Saidaziz. I'm 18 years old. I'm from Uzbekistan. I
              live in Tashkent. I'm studying at Najot Ta'lim LC. Have more than
              1 years of Frontend Developer experience. Passionate about
              learning technology and exploring new possibilities. Believing a
              well-designed website is the key to a successful product. Excited
              to learn and grow in a company with a dynamic working environment.
            </p>
            <h2>My skills</h2>
            <div className="skills">
              <div className="javascript">
                <DiJavascript />
              </div>
              <div className="react">
                <FaReact />
              </div>
              <div className="html">
                <FaHtml5 />
              </div>
              <div className="css">
                <FaCss3Alt />
              </div>
              <div className="github">
                <FaGithub />
              </div>
              <div className="sass">
                <FaSass />
              </div>
              <div className="tailwind">
                <RiTailwindCssFill />
              </div>
              <div className="bootstrap">
                <FaBootstrap />
              </div>
              <div className="redux">
                <SiRedux />
              </div>
              <div className="typescript">
                <BiLogoTypescript />
              </div>
              <div className="nextjs">
                <RiNextjsFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
