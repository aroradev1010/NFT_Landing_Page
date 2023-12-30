import React, { useRef, useState, useEffect } from "react";
import Button from "../Button/Button";
import "./header.css";
// import { Abril_Fatface } from "react/font/google";
import hover3d from "../../utils/hover";
import { FaRocket, FaWallet } from "react-icons/fa";
import { motion } from "framer-motion";
import { cards } from "../../utils/card.js";

const variants = {
  initial: {
    y: 500,
    opacity: 0.1,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isLargeScreen = windowWidth >= 1025;
  const hero = useRef(null);

  const hoverHero = hover3d(hero, {
    x: 30,
    y: -40,
    z: 30,
  });

  const hoverImage = hover3d(hero, {
    x: 20,
    y: -10,
    z: 11,
  });

  return (
    <header>
      <div className="header">
        <nav className="nav">
          <div className="logo">
            <img src="/logo.png" alt="logo" width={100} />
            <h2 className="logoName">CryptoCanvas</h2>
          </div>
          <div className="input search">
            <input type="text" placeholder="Search" />
          </div>

          <ul className="nav-items">
            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#">Marketplace</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <div className="connectBtn">
              <Button name={"Connect Wallet"} icon={<FaWallet />} />
            </div>
          </ul>
        </nav>
        <motion.div
          className="header-content"
          ref={hero}
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <div className="text-content">
            <h1 className="heroHeading">
              Buy, collect and sell extraordinary NFTs
            </h1>
            <p className="heroText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              eaque tenetur ea commodi quae nisi, explicabo libero corporis
              dolor! Maiores illo hic sint, magni eius atque facere! Quos,
              delectus tenetur!
            </p>
            <div className="buttons">
              <Button
                name={"Get Started"}
                background={"#f2994a"}
                color={"#fff"}
                border={"1px solid #f2994a"}
                icon={<FaRocket />}
              />
              <Button name={"Learn More"} />
            </div>
          </div>
          <div className="image-content">
            <div className="image" style={{ transform: hoverHero.transform }}>
              <img
                style={{ transform: hoverImage.transform }}
                // src="https://ideogram.ai/api/images/direct/ECInnKtBTlyKOF97F0EU2w.jpg"
                src="https://ideogram.ai/api/images/direct/3QLASI4IRomW6nJVl3SrSQ.jpg"
                alt="monkey"
                width={500}
                height={450}
                className="heroImg"
              />
            </div>
          </div>
        </motion.div>
        <h1 style={{ textAlign: "center" }}>New Products</h1>
        <div
          className="productImage"
          style={{ display: isLargeScreen ? "none" : "flex" }}
        >
          {cards.map((card, index) => {
            return (
              <>
                <img
                  style={{ transform: hoverImage.transform }}
                  src={card.image}
                  alt="monkey"
                  width={300}
                  height={300}
                  className="heroImg"
                />
                <div
                  className="productImageText"
                  style={{ textAlign: "center" }}
                >
                  <h3 style={{ marginBottom: "1rem" }}>{card.title}</h3>
                  <p style={{ color: "#f2994a" }}>{card.description}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
