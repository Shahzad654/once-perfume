import React from 'react'
import styled from "styled-components";
import Marquee from "react-fast-marquee";

export default function ThirdProduct() {
  return (
    <>
      <StyledProdcut>
        <div className="product5_container">
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
          <button>Shop</button>
        </div>
      </StyledProdcut>
    </>
  );
}


const StyledProdcut = styled.div`
  height: 100vh;
  background-image: url("/src/assets/images/prodcut5.jpg");
  background-size: cover;
  background-position: center;
  overflow-x: hidden;

  .product5_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    h1 {
      color: white;
      font-size: 5rem;
      max-width: 15ch;
      text-align: center;
    }
  }
`;