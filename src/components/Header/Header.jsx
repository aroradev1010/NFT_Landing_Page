import React, { useRef } from "react";
import Button from "../Button/Button";
import "./header.css";
// import { Abril_Fatface } from "react/font/google";
import hover3d from "../../utils/hover";
import { FaRocket, FaWallet } from "react-icons/fa";
import { motion } from "framer-motion";

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
            <img
              src="https://ideogram.ai/api/images/direct/uI56jxClTGSDW-NKaNEq5w.jpg"
              alt="logo"
              width={36}
            />
            <h2>CryptoCanvas</h2>
          </div>
          <div className="input search">
            <input type="text" placeholder="Search" />
          </div>

          <ul className="nav-items">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Auctions</a>
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
            <h1 className="">Buy, collect and sell extraordinary NFTs</h1>
            <p>
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
      </div>
    </header>
  );
};

export default Header;
