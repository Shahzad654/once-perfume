import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import HeroImg from "../assets/images/banner-perfume.webp";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <StyledHero>
        <div className="text-container">
          <Marquee
            direction="left"
            speed={50}
            style={{
              fontSize: "8rem",
              color: "white",
              fontFamily:"regularbook"
            }}
          >
            Once Perfume Once Perfume Once Perfume Once Perfume Once Perfume
            Once Perfume Once Perfume Once Perfume Once Perfume Once Perfume
          </Marquee>
          <Marquee
            direction="right"
            speed={50}
            style={{
              color: "transparent",
              WebkitTextStroke: "0.8px white",
              textFillColor: "transparent",
              fontSize: "8rem",
              fontFamily: "regularbook"
            }}
          >
            Once Perfume Once Perfume Once Perfume Once Perfume Once Perfume
            Once Perfume Once Perfume Once Perfume Once Perfume Once Perfume
          </Marquee>
        </div>

        <div className="image-container">
          <motion.img
            initial={{ opacity: 0, y: 400 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 25 }}
            viewport={{ once: true }}
            src={HeroImg}
            alt="Perfume Hero"
          />
        </div>
      </StyledHero>
    </>
  );
}


const StyledHero = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #ce7f8c;
  overflow: hidden;

  .text-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
    z-index: 0;
  }

  .image-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  img {
    width: 700px;
    height: auto;
  }
`;
