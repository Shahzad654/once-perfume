import React from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

export default function SecondProduct() {
  return (
    <>
      {" "}
      <StyledProduct>
        <div className="product4_container">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: -10 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
          >
            Un profumo che racconta della mente, che agisce e non dimentica, e
            della memoria, la facoltà pura di mantenere vivi i ricordi.
          </motion.h1>
          <motion.button
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: -10 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
          >
            Shop
          </motion.button>
        </div>
      </StyledProduct>
    </>
  );
}


const StyledProduct = styled.div`
  height: 100vh;
  background-image: url("/src/assets/images/product4.jpg");
  background-size: cover;
  background-position: center;

  .product4_container {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    /* padding-left: 20px; */
    h1 {
      font-size: 4rem;
      max-width: 20ch;
      margin-top: 4rem;
    }
  }

  @media (max-width: 640px) {
    .product4_container {
      width: 90%;
      margin-left: auto;
      margin-right: auto;
      h1 {
        font-size: 2rem;
        margin-top: 2rem;
        text-align: center;
      }
    }
  }

  @media (min-width: 640px) and (max-width: 1024px) {
    .product4_container {
      h1 {
        font-size: 2rem;
        margin-top: 1rem;
      }
    }
  }
`;