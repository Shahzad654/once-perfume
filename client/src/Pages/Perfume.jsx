import React from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import HeroImg from "../assets/banner-perfume.webp";
import ProductDemo from '../assets/demo1.jpg'
import Product1 from '../assets/product1.webp'
import { motion } from "framer-motion";



export default function Perfume() {
  return (
    <MainContainer>
      <StyledHero>
        <div className="text-container">
          <Marquee
            direction="left"
            speed={50}
            style={{
              fontSize: "8rem",
              color: "white",
              fontFamily: "sans-serif",
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
              fontFamily: "sans-serif",
            }}
          >
            Once Perfume Once Perfume Once Perfume Once Perfume Once Perfume
            Once Perfume Once Perfume Once Perfume Once Perfume Once Perfume
          </Marquee>
        </div>

        <motion.div
          className="image-container"
          initial={{
            opacity: 0,
            visibility: "hidden",
            y: 500,
          }}
          animate={{
            opacity: 1,
            visibility: "visible",
            y: 0,
          }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
        >
          <img src={HeroImg} alt="Perfume Hero" />
        </motion.div>
      </StyledHero>
      

      <StyledProducts>
        <div className="mareqee-background">
          <Marquee
            direction="left"
            speed={50}
            style={{
              fontSize: "8rem",
              color: "white",
              fontFamily: "sans-serif",
            }}
          >
            Once Perfume Once Perfume Once Perfume Once Perfume Once Perfume
            Once Perfume Once Perfume Once Perfume Once Perfume Once Perfume
          </Marquee>
        </div>

        <div className="product_container">
          <motion.div
            className="product_content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 2 }}
          >
            <h1>
              Le Male Elixir <span>le feu sacré à même la peau</span>{" "}
            </h1>
            <h5>parfum</h5>
            <p>
              Le Male Elixir se pare d'une marinière striée d’or aux reflets
              transparents ambrés, révélant sa carrure saillante et sa peau
              cuivrée. Dans ce flacon de désir : un intense parfum ambré
              aromatique boisé. Sa fragrance embrase l'atmosphère, son jus
              réveille la peau, le Male Elixir enivre les sens, prêt à vous
              faire fondre.
            </p>
            <button>Shop</button>
          </motion.div>

          <motion.div
            className="product_demo"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{
              duration: 2,
              delay: 0.5,
            }}
          >
            <img src={ProductDemo} alt="" />
          </motion.div>
        </div>
        <div className="product_image">
          <img src={Product1} alt="" />
        </div>
      </StyledProducts>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const StyledHero = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
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
    top: 20%;
    left: 25%;
    transform: translate(-50%, -50%);
    z-index: 0;
  }

  img {
    width: 700px;
    height: auto;
  }
`;


const StyledProducts = styled.div`
  width: 100%;
  height: 100vh;
  background-color: orange;

  .product_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
    position: relative;
  }

  .product_content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    flex-direction: column;
    max-width: 50%;
    padding-left: 15px;
    h1 {
      max-width: 13ch;
      font-size: 5rem;
      color: white;
      span {
        color: transparent;
        -webkit-text-stroke: 1px white;
        text-fill-color: transparent;
      }
    }
    h5 {
      font-weight: bold;
      font-size: 2rem;
      color: white;
    }
    p {
      font-size: 1rem;
      color: white;
      max-width: 38ch;
    }
    button {
      color: black;
      background-color: white;
      padding: 15px 40px;
      border-style: none;
      font-size: 1rem;
      font-weight: bold;
    }
  }

  .product_demo {
    flex: 1;
    max-width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .product_image {
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translateX(-50%); 
    width: 100%;
    height: auto;
    max-width: 800px;
  }

  img {
    width: 100%;
    height: auto;
    max-width: 800px;
  }
`;

