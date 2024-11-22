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
            Entrez dans la salle des machines et devenez membre de l'équipage
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
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 2rem;
    padding-left: 20px;
    h1 {
      font-size: 5rem;
      max-width: 15ch;
    }
  }

  @media (max-width: 640px) {
    .product4_container {
      h1 {
        font-size: 3rem;
        margin-top: 2rem;
      }
    }
  }

  @media (min-width: 640px) and (max-width: 1024px) {
    .product4_container {
      h1 {
        font-size: 4rem;
        margin-top: 1rem;
      }
    }
  }
`;