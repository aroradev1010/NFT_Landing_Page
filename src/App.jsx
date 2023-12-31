// App.jsx
import React, { useState, useEffect } from "react";
import { cards } from "./utils/card.js";
import SectionLayout from "./components/SectionLayout.jsx";
import "./app.css";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card.jsx";
import FullPage from "./components/FullPageImage/FullPage.jsx";
import TextSection from "./TextSection.jsx";
import Footer from "./components/Footer/Footer.jsx";
import HorizontalWrapper from "./components/HorizontalWrapper.jsx";
import { motion, useScroll, useTransform } from "framer-motion";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [visibleCards, setVisibleCards] = useState([]);
  const video = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: video,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [1, 0.7, 0.2, 0],
    [1, 1, 0.2, 0]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Calculate the desired number of cards based on screen width
    const desiredCards = calculateDesiredCards(windowWidth);

    // Slice the cards array to get the visible cards
    const visibleCards = cards.slice(0, desiredCards);

    setVisibleCards(visibleCards);
  }, [windowWidth, cards]);

  const calculateDesiredCards = (width) => {
    // Define your logic for calculating the desired number of cards
    // For example, you might want 3 cards for small screens and 6 for larger screens
    return width < 1024 ? 3 : cards.length;
  };
  const isLargeScreen = windowWidth >= 1025;

  return (
    <>
      <Header />
      <main className="mainStyled">
        <div style={{ display: isLargeScreen ? "" : "none" }}>
          <SectionLayout>
            <HorizontalWrapper height={"40rem"} direction={-1400}>
              <div className="cards">
                {visibleCards.map((card, index) => {
                  return (
                    <Card
                      key={index}
                      title={card.title}
                      description={card.description}
                      image={card.image}
                    />
                  );
                })}
              </div>
            </HorizontalWrapper>
          </SectionLayout>
        </div>

        <FullPage />
        <div style={{ display: isLargeScreen ? "" : "none" }}>
          <SectionLayout>
            <HorizontalWrapper height={"40rem"} direction={1400}>
              <div
                className="cards"
                style={{
                  right: isLargeScreen ? 0 : null,
                }}
              >
                {visibleCards.map((card, index) => {
                  return (
                    <Card
                      key={index}
                      title={card.title}
                      description={card.description}
                      image={card.image}
                    />
                  );
                })}
              </div>
            </HorizontalWrapper>
          </SectionLayout>
        </div>
        <section>
          <h1 style={{ textAlign: "center" }}>Information About NFTs</h1>
        </section>
        <SectionLayout>
          <TextSection />
        </SectionLayout>
        <SectionLayout>
          <motion.div
            className="video"
            ref={video}
            style={{ opacity, scale, display: isLargeScreen ? "" : "none" }}
          >
            <iframe
              src="https://www.youtube.com/embed/Oz9zw7-_vhM?si=9dZMhyJQNWSwb0H9&autoplay=1&mute=1"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
          </motion.div>
        </SectionLayout>

        <div style={{ display: isLargeScreen ? "" : "none" }}>
          <SectionLayout>
            <TextSection />
          </SectionLayout>
        </div>

        <Footer />
      </main>
    </>
  );
}

export default App;
