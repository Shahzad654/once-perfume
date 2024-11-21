import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import HeroImg from "../assets/images/banner-perfume.webp";
import ProductDemo from "../assets/images/demo1.jpg";
import ProductDemo2 from "../assets/images/demo2.jpg";
import ProductDemo3 from "../assets/images/demo3.jpg";
import Product1 from "../assets/images/product1.webp";
import Product2 from "../assets/images/product2.webp";
import Product3 from "../assets/images/product3.webp";
import Video from "../assets/images/video.mp4";
import { motion } from "framer-motion";

export default function Perfume() {
    const [backgroundColor, setBackgroundColor] = useState("#eb9d0e");
    const [isProductImageVisible, setIsProductImageVisible] = useState(false);
    const [videoHasEnded, setVideoHasEnded] = useState(false);
    const videoRef = useRef(null);
    const scrollTimeoutRef = useRef(null);
    const productsRef = useRef(null);
    const productsRef2 = useRef(null);
    const productsWrapperRef = useRef(null); 

     const handleVideoEnded = () => {
       setVideoHasEnded(true);
       console.log("Video has finished.");
     };
    
  
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
         { threshold: 0.25 } 
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
        if (videoRef.current) {
          videoRef.current.play();
          videoRef.current.playbackRate = 1.5;
        }

        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }

        scrollTimeoutRef.current = setTimeout(() => {
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }, 200);

       
        if (productsRef.current) {
          const rect = productsRef.current.getBoundingClientRect();
          const elementHeight = rect.height;
          const visibleHeight =
            Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
          const visiblePercentage = (visibleHeight / elementHeight) * 100;

          if (rect.top < 0 && visiblePercentage <= 62) {
            setBackgroundColor("#3f6da1");
            console.log("Changing to blue");
          }
          
          else {
            setBackgroundColor("#eb9d0e");
            console.log("Changing to orange"); 
          }
        }


      if (productsRef2.current) {
        const rect = productsRef2.current.getBoundingClientRect();
        const elementHeight = rect.height;
        const visibleHeight =
          Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
        const visiblePercentage = (visibleHeight / elementHeight) * 100;

      if (rect.top < 0 && visiblePercentage <= 62) {
         setBackgroundColor("#ce4444");
        console.log("Changing to red");
      }
    }
         
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      };
    }, []);



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

      <StyledVideo>
        <video
          ref={videoRef}
          src={Video}
          width="100%"
          height="100%"
          muted
          style={{ objectFit: "cover" }}
          onEnded={handleVideoEnded}
        />
      </StyledVideo>

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
                // initial={{ opacity: 0, y: 50 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // viewport={{ once: true, amount: 1 }}
                // transition={{
                //   duration: 3,
                // }}
              >
                <img src={ProductDemo} alt="" />
              </motion.div>
            </div>
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
                // initial={{ opacity: 0, y: 50 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // viewport={{ once: true, amount: 1 }}
                // transition={{
                //   duration: 3,
                // }}
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
                // initial={{ opacity: 0, y: 50 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // viewport={{ once: true, amount: 1 }}
                // transition={{
                //   duration: 3,
                // }}
              >
                <img src={ProductDemo3} alt="" />
              </motion.div>
            </div>
          </div>
        </StyledProducts3>

        <StyledProdcutImage
          style={{
            display: isProductImageVisible ? "block" : "none",
          }}
        >
          <img src={getProductImage(backgroundColor)} alt="Product" />
        </StyledProdcutImage>
      </StyledProductsWrapper>

      <StyledProdcut4>
        <div className="product4_container">
          <h1>
            Entrez dans la salle des machines et devenez membre de l'équipage
          </h1>
          <button>Shop</button>
        </div>
      </StyledProdcut4>

      <StyledProdcut5>
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
      </StyledProdcut5>

      <StyledProdcut6></StyledProdcut6>
    </MainContainer>
  );
}

const MainContainer = styled.div`
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

  @media (max-width: 640px) {
    .image-container{
        left: -30%;
     
    }
  }
`;

const StyledVideo = styled.div`
  height: 100vh;
`;

const StyledProducts = styled.div`
  width: 100%;
  height: 130vh;
  
  position: relative;
 
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

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

    .product_content {
      flex-basis: 50%;
      flex-grow: 0;
      flex-shrink: 0;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1rem;
      flex-direction: column;
      padding-left: 10px;

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
      flex-basis: 50%;
      flex-grow: 0;
      flex-shrink: 0;
      img {
        width: 100%;
        height: auto;
      }
    }
  }

  @media (max-width: 640px) {
    .product_container{
      .product_content{
        flex-basis: 100%;
        justify-content: center;
        align-items: center;
        padding-left: 0;
        h1{
          text-align: center;
          font-size: 4rem;
        }
      }
      .product_demo{
        flex-basis: 100%;
      }
    }
  }
`;

const StyledProducts2 = styled.div`
  width: 100%;
  height: 130vh;

  position: relative;

  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

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

    .product_content {
      flex-basis: 50%;
      flex-grow: 0;
      flex-shrink: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      flex-direction: column;

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
      flex-basis: 50%;
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
        flex-basis: 100%;
        justify-content: center;
        align-items: center;
        padding-left: 0;
        h1 {
          text-align: center;
          font-size: 4rem;
        }
      }
      .product_demo {
        flex-basis: 100%;
      }
    }
  }
`;

const StyledProducts3 = styled.div`
  width: 100%;
  height: 130vh;

  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

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

    .product_content {
      flex-basis: 50%;
      flex-grow: 0;
      flex-shrink: 0;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1rem;
      flex-direction: column;
      padding-left: 10px;

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
      flex-basis: 50%;
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
        flex-basis: 100%;
        justify-content: center;
        align-items: center;
        padding-left: 0;
        h1 {
          text-align: center;
          font-size: 4rem;
        }
      }
      .product_demo {
        flex-basis: 100%;
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
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  width: auto;
  height: auto;
  clip-path: inset(0 0 0 0);

  img {
    max-width: 100%;
    height: auto;
    max-height: 80vh;
    object-fit: contain;
  }

  @media (max-width: 640px) {
    img {
      display: none;
    }
  }
`;

const StyledProdcut4 = styled.div`
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
    h1{
      font-size: 4rem;
    }
  }
  }
`;

const StyledProdcut5 = styled.div`
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
    /* padding-left: 20px; */
    h1 {
      color: white;
      font-size: 5rem;
      max-width: 15ch;
      text-align: center;
    }
   
  }
`;

const StyledProdcut6 = styled.div`
  height: 100vh;
  background-image: url("/src/assets/images/prodcut6.jpg");
  background-size: cover;
  background-position: center;
`;
