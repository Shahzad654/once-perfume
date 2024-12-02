import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import ProductDemo from "../assets/images/demo1.jpg";
import ProductDemo2 from "../assets/images/demo2.jpg";
import ProductDemo3 from "../assets/images/demo3.jpg";
import Product1 from "../assets/images/product1.webp";
import Product2 from "../assets/images/product2.webp";
import Product3 from "../assets/images/product3.webp";
import { motion } from "framer-motion";

export default function Products() {

    const [backgroundColor, setBackgroundColor] = useState("#eb9d0e");
    const [isProductImageVisible, setIsProductImageVisible] = useState(false);

    const productsRef = useRef(null);
    const productsRef2 = useRef(null);
    const productsWrapperRef = useRef(null);

    const getProductImage = (backgroundColor) => {
      if (backgroundColor === "#eb9d0e") {
        return Product1;
      } else if (backgroundColor === "#3f6da1") {
        return Product2;
      } else {
        return Product3;
      }
    };

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {

            if (entry.isIntersecting) {
              setIsProductImageVisible(true);
            } else {
              setIsProductImageVisible(false);
            }
          });
        },
        { threshold: 0.2 }
      );

      if (productsWrapperRef.current) {
        observer.observe(productsWrapperRef.current);
      }

      return () => {
        if (productsWrapperRef.current) {
          observer.unobserve(productsWrapperRef.current);
        }
      };
    }, []);

    useEffect(() => {
      const handleScroll = () => {

        if (productsRef.current) {
          const rect = productsRef.current.getBoundingClientRect();
          const elementHeight = rect.height;
          const visibleHeight =
            Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
          const visiblePercentage = (visibleHeight / elementHeight) * 100;

          if (rect.top < 0 && visiblePercentage <= 42) {
            setBackgroundColor("#3f6da1");
           
          } else {
            setBackgroundColor("#eb9d0e");
            
          }
        }

        if (productsRef2.current) {
          const rect = productsRef2.current.getBoundingClientRect();
          const elementHeight = rect.height;
          const visibleHeight =
            Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
          const visiblePercentage = (visibleHeight / elementHeight) * 100;

          if (rect.top < 0 && visiblePercentage <= 42) {
            setBackgroundColor("#ce4444");
            
          }
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <>
      <StyledProductsWrapper
        ref={productsWrapperRef}
        $backgroundColor={backgroundColor}
      >
        <StyledProducts ref={productsRef}>
          <div className="mareqee-background">
            <Marquee
              direction="left"
              speed={50}
              style={{
                color: "transparent",
                WebkitTextStroke: "2px white",
                textFillColor: "transparent",
                fontSize: "18rem",
                opacity: "0.4",
              }}
            >
              Once Perfume Once Perfume Once Perfume Once Perfume Once Perfume
              Once Perfume Once Perfume Once Perfume Once Perfume Once Perfume
            </Marquee>
          </div>

          <div className="product_container">
            <div className="product_content">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: -50 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
              >
                EXPLOSEA
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: -50 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
              >
                L’ESPLORAZIONE E LA LIBERTÀ
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: -50 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
              >
                In Explosea, le note marine di testa si intrecciano con gli
                agrumi e lo zafferano, aprendo la strada a un cuore ricco di
                rosa e liquirizia, avvolgente cashmere, ambra e cypriol. Mentre
                un fondo di rinnovata ambra, unita a musk e legno di sandalo,
                dona alla composizione struttura e persistenza profonda.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: -30 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                onClick={() =>
                  (window.location.href =
                    "https://www.onceperfume.com/p/explosea/")
                }
              >
                Shop
              </motion.button>
            </div>

            <motion.div
              className="product_demo"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 50 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 3 }}
            >
              <img src={ProductDemo} alt="" />
            </motion.div>
          </div>
        </StyledProducts>

        <StyledProducts2 ref={productsRef2}>
          <div className="mareqee-background">
            <Marquee
              direction="left"
              speed={50}
              style={{
                color: "transparent",
                WebkitTextStroke: "2px white",
                textFillColor: "transparent",
                fontSize: "18rem",
                opacity: "0.4",
              }}
            >
              Once Perfume Once Perfume Once Perfume Once Perfume Once Perfume
              Once Perfume Once Perfume Once Perfume Once Perfume Once Perfume
            </Marquee>
          </div>

          <div className="product_container">
            <motion.div
              className="product_demo"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 50 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 3 }}
            >
              <img src={ProductDemo2} alt="" />
            </motion.div>
            <div className="product_content">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: -50 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
              >
                HOTIS
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: -50 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
              >
                L’OLFATTO E LA SORPRESA
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: -50 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
              >
                In Hotis, le note di testa fresche dell’erba mate e delle bacche
                di ginepro incontrano il brio del pepe rosa, esaltando un cuore
                alla rosa, tè, cannella, neroli e chiodi di garofano. Mentre il
                fondo legnoso e ambrato rende questa fragranza accogliente e
                intensa.
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: -30 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                onClick={() =>
                  (window.location.href =
                    "https://www.onceperfume.com/p/hotis/")
                }
              >
                Shop
              </motion.button>
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
                opacity: "0.4",
              }}
            >
              Once Perfume Once Perfume Once Perfume Once Perfume Once Perfume
              Once Perfume Once Perfume Once Perfume Once Perfume Once Perfume
            </Marquee>
          </div>

          <div className="product_container">
            <div className="product_content">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: -50 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
              >
                LOREV
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: -50 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
              >
                L’AMORE E LA ROSA
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: -50 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
              >
                In Lorev, le note di testa floreali si uniscono alla pesca dolce
                e a un brioso pepe rosa, per esaltare un cuore alla tuberosa e
                al gelsomino sambac. Mentre il fondo intenso di patchouli e
                vetiver dona carattere e persistenza a una fragranza
                sorprendente.
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: -30 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                onClick={() =>
                  (window.location.href =
                    "https://www.onceperfume.com/p/lorev/")
                }
              >
                Shop
              </motion.button>
            </div>

            <motion.div
              className="product_demo"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 50 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 3 }}
            >
              <img src={ProductDemo3} alt="" />
            </motion.div>
          </div>
        </StyledProducts3>

        <StyledProdcutImage
          style={{
            opacity: isProductImageVisible ? 1 : 0,
            visibility: isProductImageVisible ? "visible" : "hidden",
            transition: "opacity 0.1s ease, visibility 0.1s ease",
          }}
        >
          <img src={getProductImage(backgroundColor)} alt="Product" />
        </StyledProdcutImage>
      </StyledProductsWrapper>
    </>
  );
}

const StyledProducts = styled.div`
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-top: var(--section-margin);

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
    gap: 1rem;
    z-index: 1;
    width: 100%;
    flex-wrap: wrap;

    .product_content {
      flex-basis: 45%;
      flex-grow: 0;
      flex-shrink: 0;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1rem;
      flex-direction: column;
      padding-left: 5%;

      h1 {
        max-width: 15ch;
        font-size: 5rem;
        span {
          color: transparent;
          -webkit-text-stroke: 1px white;
          text-fill-color: transparent;
        }
      }

      p {
        font-size: 1rem;
        max-width: 38ch;
      }
    }

    .product_demo {
      flex-basis: 45%;
      flex-grow: 0;
      flex-shrink: 0;
      img {
        width: 100%;
        height: auto;
      }
    }
  }

  @media (max-width: 640px) {
    .product_container {
      .product_content {
        flex-basis: 90%;
        justify-content: center;
        align-items: center;
        padding-left: 0;
        padding-right: 0;
      
        margin: auto;
        h1 {
          text-align: center;
          font-size: 3rem;
        }
        h2 {
          
          text-align: center;
        }
        p {
          text-align: center;
        }
      }
      .product_demo {
        flex-basis: 100%;
      }
    }
  }

  @media (min-width: 640px) and (max-width: 1024px) {
    .product_container {
      .product_content {
        h1 {
          font-size: 4rem;
        }
      }
    }
  }
`;

const StyledProducts2 = styled.div`
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: var(--section-margin);

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
    flex-wrap: wrap;
    gap: 1rem;
    z-index: 1;
    width: 100%;

    .product_content {
      flex-basis: 45%;
      flex-grow: 0;
      flex-shrink: 0;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding-right: 5%;
      gap: 1rem;
      flex-direction: column;

      h1 {
        max-width: 15ch;
        font-size: 5rem;
        text-align: end;
        span {
          color: transparent;
          -webkit-text-stroke: 1px white;
          text-fill-color: transparent;
        }
      }

      h2 {
        text-align: end;
      }

      p {
        font-size: 1rem;
        max-width: 38ch;
        text-align: end;
      }
    }

    .product_demo {
      flex-basis: 45%;
      flex-grow: 0;
      flex-shrink: 0;
      img {
        width: 100%;
        height: auto;
      }
    }
  }

  @media (max-width: 640px) {
    .product_container {
      flex-direction: column-reverse;
      .product_content {
        flex-basis: 100%;
        justify-content: center;
        align-items: center;
        padding-left: 0;
        padding-right: 0;
        margin: auto;
        /* margin-top: 120px; */
        h1 {
          text-align: center;
          font-size: 3rem;
        }
        h2 {
          text-align: center;
        }

        p {
          /* width: 90%; */
          text-align: center;
        }
      }
      .product_demo {
        flex-basis: 100%;
      }
    }
  }

  @media (min-width: 640px) and (max-width: 1024px) {
    .product_container {
      .product_content {
        h1 {
          font-size: 4rem;
        }
      }
    }
  }

  @media (min-width: 640px) and (max-width: 760px) {
    .product_container {
      .product_content {
        h1 {
          font-size: 4rem;
        }
      }
    }
  }
`;

const StyledProducts3 = styled.div`
  height: max-content;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: var(--section-margin);

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
    flex-wrap: wrap;
    gap: 1rem;
    z-index: 1;
    width: 100%;

    .product_content {
      flex-basis: 45%;
      flex-grow: 0;
      flex-shrink: 0;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1rem;
      flex-direction: column;
      padding-left: 5%;

      h1 {
        max-width: 15ch;
        font-size: 5rem;
        span {
          color: transparent;
          -webkit-text-stroke: 1px white;
          text-fill-color: transparent;
        }
      }

      h5 {
        font-weight: bold;
        font-size: 2rem;
      }

      p {
        font-size: 1rem;
        max-width: 38ch;
      }
    }

    .product_demo {
      flex-basis: 45%;
      flex-grow: 0;
      flex-shrink: 0;
      img {
        width: 100%;
        height: auto;
      }
    }
  }

  @media (max-width: 640px) {
    .product_container {
      .product_content {
        flex-basis: 90%;
        justify-content: center;
        align-items: center;
        padding-left: 0;
        padding-right: 0;
        
        margin: auto;
        h1 {
          text-align: center;
          font-size: 3rem;
        }
        h2 {
          text-align: center;
        }
        p {
          text-align: center;
        }
      }
      .product_demo {
        flex-basis: 100%;
      }
    }
  }

  @media (min-width: 640px) and (max-width: 1024px) {
    .product_container {
      .product_content {
        h1 {
          font-size: 4rem;
        }
      }
    }
  }
`;

const StyledProductsWrapper = styled.div`
  position: relative;
  background-color: ${(props) => props.$backgroundColor};
  transition: background-color 1s ease;
  z-index: 1;
  overflow: hidden;
`;

const StyledProdcutImage = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  width: auto;
  height: auto;
  clip-path: inset(0 0 0 0);

  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
    margin-top: 70px;
  }

  @media (max-width: 640px) {
    img {
      max-width: 500px;
    }
  }
`;
