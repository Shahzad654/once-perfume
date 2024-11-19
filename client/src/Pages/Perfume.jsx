import React from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import HeroImg from "../assets/images/banner-perfume.webp";
import ProductDemo from "../assets/images/demo1.jpg";
import ProductDemo2 from "../assets/images/demo2.jpg";
import ProductDemo3 from "../assets/images/demo3.jpg";
import Product1 from "../assets/images/product1.webp";
import Product2 from "../assets/images/product2.webp";
import Product3 from "../assets/images/product3.webp";
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
              color: "transparent",
              WebkitTextStroke: "2px white",
              textFillColor: "transparent",
              fontSize: "18rem",
            }}
          >
            Once Perfume Once Perfume Once Perfume Once Perfume Once Perfume
            Once Perfume Once Perfume Once Perfume Once Perfume Once Perfume
          </Marquee>
        </div>

        <div className="product_container">
          <div className="product_container">
            <motion.div
              className="product_content"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: -50 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 }}
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
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 1 }}
              transition={{
                duration: 3,
                // delay: 0.5,
              }}
            >
              <img src={ProductDemo} alt="" />
            </motion.div>
          </div>
          <div className="product_image">
            <img src={Product1} alt="" />
          </div>
        </div>
      </StyledProducts>

      <StyledProducts2>
        <div className="mareqee-background">
          <Marquee
            direction="right"
            speed={50}
            style={{
              color: "transparent",
              WebkitTextStroke: "2px white",
              textFillColor: "transparent",
              fontSize: "18rem",
            }}
          >
            Once Perfume Once Perfume Once Perfume Once Perfume Once Perfume
            Once Perfume Once Perfume Once Perfume Once Perfume Once Perfume
          </Marquee>
        </div>

        <div className="product_container">
          <div className="product_container">
            <motion.div
              className="product_demo"
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 1 }}
              transition={{
                duration: 3,
                // delay: 0.5,
              }}
            >
              <img src={ProductDemo2} alt="" />
            </motion.div>

            <motion.div
              className="product_content"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: -50 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 }}
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
          </div>
          <div className="product_image">
            <img src={Product2} alt="" />
          </div>
        </div>
      </StyledProducts2>

      <StyledProducts3>
        <div className="mareqee-background">
          <Marquee
            direction="left"
            speed={50}
            style={{
              color: "transparent",
              WebkitTextStroke: "2px white",
              textFillColor: "transparent",
              fontSize: "18rem",
            }}
          >
            Once Perfume Once Perfume Once Perfume Once Perfume Once Perfume
            Once Perfume Once Perfume Once Perfume Once Perfume Once Perfume
          </Marquee>
        </div>

        <div className="product_container">
          <div className="product_container">
            <motion.div
              className="product_content"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: -50 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 }}
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
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 1 }}
              transition={{
                duration: 3,
                // delay: 0.5,
              }}
            >
              <img src={ProductDemo3} alt="" />
            </motion.div>
          </div>
          <div className="product_image">
            <img src={Product3} alt="" />
          </div>
        </div>
      </StyledProducts3>
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
  height: 130vh;
  background-color: orange;
  position: relative;

  .mareqee-background {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  }

  .product_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
    position: relative; 
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
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
      font-size: 4rem;
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
    top: -78%;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: auto;
    max-width: 800px;
    z-index: 1;
  }

  img {
    width: 100%;
    height: auto;
    max-width: 800px;
  }
`;

const StyledProducts2 = styled.div`
  width: 100%;
  height: 130vh;
  background-color: #3f6da1;
  position: relative;

  .mareqee-background {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  }

  .product_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
    position: relative;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  .product_content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 1rem;
    flex-direction: column;
    max-width: 50%;
    padding-right: 15px;
    h1 {
      max-width: 13ch;
      font-size: 4rem;
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
    top: -50%;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: auto;
    max-width: 800px;
    z-index: 1;
  }

  img {
    width: 100%;
    height: auto;
    max-width: 800px;
  }
`;

const StyledProducts3 = styled.div`
  width: 100%;
  height: 130vh;
  background-color: #ce4444;
  position: relative;

  .mareqee-background {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  }

  .product_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
    position: relative;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
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
      font-size: 4rem;
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
    top: -50%;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: auto;
    max-width: 800px;
    z-index: 1;
  }

  img {
    width: 100%;
    height: auto;
    max-width: 800px;
  }
`;



