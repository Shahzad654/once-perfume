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
import Video2 from "../assets/images/video2.mp4";
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
    
  
     const getProductImage = (backgroundColor) => {
       if (backgroundColor === "#eb9d0e") {
         return Product1;
       } else if (backgroundColor === "#3f6da1") {
         return Product2;
       } else {
         return Product3;
       }
     };

     
     const handleVideoEnded = () => {
       setVideoHasEnded(true);
       console.log("Video has finished.");
     };


     useEffect(() => {
       if (videoRef.current) {
         const videoHeight = videoRef.current.clientHeight; 
         console.log("Video height:", videoHeight);
       }
     }, []);

     useEffect(() => {
       
       const observer = new IntersectionObserver(
         (entries) => {
           entries.forEach((entry) => {
            console.log(entry.intersectionRatio);
           
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

          if (rect.top < 0 && visiblePercentage <= 42) {
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

      if (rect.top < 0 && visiblePercentage <= 42) {
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

      <StyledVideo>
        <video
          ref={videoRef}
          src={Video}
          width='100%'
          muted
          onEnded={handleVideoEnded}
          style={{ objectFit: "cover" }}
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

          {/* <div className="product_container"> */}
          <div className="product_container">
            <motion.div
              className="product_content"
              // initial={{ opacity: 0, y: 50 }}
              // whileInView={{ opacity: 1, y: -50 }}
              // viewport={{ once: true, amount: 0.5 }}
              // transition={{ duration: 1 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: -50 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
              >
                Le Male Elixir <span>le feu sacré à même la peau</span>{" "}
              </motion.h1>
              <motion.h5
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: -50 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
              >
                parfum
              </motion.h5>
              <motion.p
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: -50 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
              >
                Le Male Elixir se pare d'une marinière striée d’or aux reflets
                transparents ambrés, révélant sa carrure saillante et sa peau
                cuivrée. Dans ce flacon de désir : un intense parfum ambré
                aromatique boisé. Sa fragrance embrase l'atmosphère, son jus
                réveille la peau, le Male Elixir enivre les sens, prêt à vous
                faire fondre.
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: -50 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
              >
                Shop
              </motion.button>
            </motion.div>

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
          {/* </div> */}
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

          {/* <div className="product_container"> */}
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
            <motion.div
              className="product_content"
              // initial={{ opacity: 0, y: 50 }}
              // whileInView={{ opacity: 1, y: -50 }}
              // viewport={{ once: true, amount: 0.5 }}
              // transition={{ duration: 1 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: -50 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
              >
                Le Male Elixir <span>le feu sacré à même la peau</span>{" "}
              </motion.h1>
              <motion.h5
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: -50 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
              >
                parfum
              </motion.h5>
              <motion.p
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: -50 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
              >
                Le Male Elixir se pare d'une marinière striée d’or aux reflets
                transparents ambrés, révélant sa carrure saillante et sa peau
                cuivrée. Dans ce flacon de désir : un intense parfum ambré
                aromatique boisé. Sa fragrance embrase l'atmosphère, son jus
                réveille la peau, le Male Elixir enivre les sens, prêt à vous
                faire fondre.
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: -50 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
              >
                Shop
              </motion.button>
            </motion.div>
          </div>
          {/* </div> */}
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

          {/* <div className="product_container"> */}
          <div className="product_container">
            <motion.div
              className="product_content"
              // initial={{ opacity: 0, y: 50 }}
              // whileInView={{ opacity: 1, y: -50 }}
              // viewport={{ once: true, amount: 0.5 }}
              // transition={{ duration: 1 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: -50 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
              >
                Le Male Elixir <span>le feu sacré à même la peau</span>{" "}
              </motion.h1>
              <motion.h5
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: -50 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
              >
                parfum
              </motion.h5>
              <motion.p
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: -50 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
              >
                Le Male Elixir se pare d'une marinière striée d’or aux reflets
                transparents ambrés, révélant sa carrure saillante et sa peau
                cuivrée. Dans ce flacon de désir : un intense parfum ambré
                aromatique boisé. Sa fragrance embrase l'atmosphère, son jus
                réveille la peau, le Male Elixir enivre les sens, prêt à vous
                faire fondre.
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: -50 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
              >
                Shop
              </motion.button>
            </motion.div>

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
          {/* </div> */}
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

      <StyledProdcut4>
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

      <StyledProdcut6>
        <video src={Video2} autoPlay muted loop></video>
      </StyledProdcut6>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  /* width: 100%;
  height: 100vh; */
`;

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

const StyledVideo = styled.div`
  height: 130vh;
`;

const StyledProducts = styled.div`
  height: 130vh;
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
        flex-basis: 100%;
        justify-content: center;
        align-items: center;
        padding-left: 0;
        h1 {
          text-align: center;
          font-size: 3rem;
        }
        h5 {
          font-size: 1.5rem;
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
  height: 130vh;
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
      padding-right: 10px;
      gap: 1rem;
      flex-direction: column;

      h1 {
        max-width: 15ch;
        font-size: 5rem;
        text-align: right;
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
      flex-direction: column-reverse;
      .product_content {
        flex-basis: 100%;
        justify-content: center;
        align-items: center;
        padding-left: 0;
        /* margin-top: 120px; */
        h1 {
          text-align: center;
          font-size: 3rem;
        }
        h5 {
          font-size: 1.5rem;
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

const StyledProducts3 = styled.div`
  height: 130vh;
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
        flex-basis: 100%;
        justify-content: center;
        align-items: center;
        padding-left: 0;
        h1 {
          text-align: center;
          font-size: 3rem;
        }
        h5 {
          font-size: 1.5rem;
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
      font-size: 3rem;
      margin-top: 2rem;
    }
  }
}

  @media (min-width: 640px) and (max-width: 1024px) {
      .product4_container {
    h1{
      font-size: 4rem;
      margin-top: 1rem;
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
  position: relative;
  height: 100vh;
  overflow-x: hidden;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; 
  }
`;

