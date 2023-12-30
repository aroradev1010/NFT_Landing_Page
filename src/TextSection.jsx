import React from "react";

import { motion, useScroll, useTransform } from "framer-motion";

const TextWrapper = ({ children }) => {
  const text = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: text,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [1, 0.8, 0], [1, 1, 0]);
  const x = useTransform(scrollYProgress, [1, 0.4, 0], [0, 0, 1000]);
  const colorChange = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "hsla(180 7%,75%,0.9)",
      "hsla(180 7%,75%,0.9)",
      "#f2994a",
      "#f2994a",
      "#f2994a",
      "#f2994a",
    ]
  );

  return (
    <div ref={text}>
      <motion.p style={{ opacity, x, color: colorChange }}>{children}</motion.p>
    </div>
  );
};

function TextSection() {
  return (
    <div className="textSectionStyled">
      <TextWrapper>
        NFTs (Non-Fungible Tokens) represent ownership of unique digital assets
        on a blockchain, providing verifiable proof of authenticity and
        ownership.
      </TextWrapper>
      <TextWrapper>
        NFTs are typically built on blockchain platforms like Ethereum, Binance
        Smart Chain, or others, utilizing smart contracts to ensure secure and
        transparent transactions.
      </TextWrapper>
      <TextWrapper>
        NFTs are indivisible, meaning they cannot be divided into smaller units
        like cryptocurrencies. Each token is a distinct, whole asset.
      </TextWrapper>
      <TextWrapper>
        NFTs can be bought, sold, and traded across various online marketplaces,
        allowing for interoperability and a global marketplace for digital
        assets.
      </TextWrapper>
      <TextWrapper>
        NFTs often include metadata that provides information about the digital
        asset, such as its creator, creation date, and details about the
        content. Standards like ERC-721 and ERC-1155 help define these
        properties.
      </TextWrapper>
    </div>
  );
}

export default TextSection;
