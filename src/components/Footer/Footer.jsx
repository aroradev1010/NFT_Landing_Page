import React from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import footer from "../../utils/footer";
import "./footer.css";

function Footer() {
  return (
    <div className="footerStyled">
      <nav>
        <div className="logo-con">
          <div className="logo">
            <img src="/logo.png" width={75} alt="logo" />
            <h2>CryptoCanvas</h2>
          </div>
          <div className="input">
            <input type="text" placeholder="Subscribe here..." />
            <button>&#8594;</button>
          </div>
          <p>
            Create, Sell And Collect Truly Rare Digital Artworks. Powered By
            Blockchain Technology.
          </p>
          <div className="socials">
            <AiFillGithub />
            <AiFillTwitterCircle />
            <AiFillInstagram />
            <BsDiscord />
            <AiFillLinkedin />
          </div>
        </div>
        <div className="links">
          {footer.map((item, index) => {
            return (
              <div key={index}>
                <h4>{item.title}</h4>
                <ul>
                  {item.links.map((text, index) => {
                    return (
                      <li key={index}>
                        <a href="">{text.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </nav>
      <p className="rights">
        <a href="">©2023 The Code Dealer. All rights reserved.</a>
        <a href="">Privacy policy | Terms of service</a>
      </p>
    </div>
  );
}

export default Footer;
