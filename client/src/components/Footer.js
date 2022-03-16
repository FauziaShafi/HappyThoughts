import React from "react";
import "./Footer.css";

import { BsGithub, BsLinkedin, BsTsunami, BsHandThumbsUp, BsStackOverflow, BsMailbox2 } from "react-icons/bs";

function Footer() {
    const socials = [
      {
        href: "https://github.com/FauziaShafi/HappyThoughts",
        img: <BsGithub />,
      },
      // {
      //   href: "",
      //   img: <BsStackOverflow />,
      // },
      {
          href: "mailto:sendmaxstuff@gmail.com.com",
          img: <BsMailbox2 />,
        },
        {
            href: "#",
            img: <BsHandThumbsUp />,
          },
    ];
    return (
      <footer>
        <div className="footerContainer">
            
          {socials.map((element, i) => {
            return (
              <a href={element.href} target="_blank" rel="noreferrer" key={i}>
                {element.img}
              </a>
            );
          })}
        </div>
        <div><br></br>
                Copyright 2022, We Happy Four (UCSD Extension)
            </div>
      </footer>
    );
  }
  
  export default Footer;