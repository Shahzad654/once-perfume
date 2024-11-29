import React from 'react'
import styled from "styled-components";
import Logo from '../assets/images/footer_logo.png'
import Insta from '../assets/images/insta.png'
import FB from '../assets/images/fb.png'
import Payment from '../assets/images/payment.png'
import Paypal from "../assets/images/paypal.svg";
import Shopping from "../assets/images/shopping.png";
import PaymentImg from '../assets/images/payments methods.png'
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Footer() {
  return (
    <StyledFooter>
      <div className="footer_container">
        <div className="first_container">
          <div className="icon_container">
            {" "}
            <img src={Insta} alt="" />
            <img src={FB} alt="" />
          </div>

          <h3>PAGAMENTI SICURI</h3>
          <div className="payment_image">
            <img src={Payment} alt="" />
          </div>

          <div className="payapl">
            <img src={Shopping} alt="" />
            <img src={Paypal} alt="" />
          </div>
        </div>
        <div className="second_container">
          <h4>Once</h4>
          <div className="links">
            <a href="">CHI SIAMO</a>
            <a href="">FRAGRANZE</a>
            <a href="">GIFT CARD</a>
            <a href="">AREA CLIENTE</a>
          </div>

          <div className="mobile_links">
            <Accordion sx={{ backgroundColor: "black" }}>
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: "white",
                    }}
                  />
                }
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  color: "white",
                  fontFamily: "regular",
                  
                }}
              >
                Once
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "1rem",
                  flexDirection: "column",
                }}
              >
                <a
                  href=""
                  style={{
                    color: "rgba(255, 255, 255, 0.6)",
                    fontFamily: "regular",
                  }}
                >
                  CHI SIAMO
                </a>
                <a
                  href=""
                  style={{
                    color: "rgba(255, 255, 255, 0.6)",
                    fontFamily: "regular",
                  }}
                >
                  FRAGRANZE
                </a>
                <a
                  href=""
                  style={{
                    color: "rgba(255, 255, 255, 0.6)",
                    fontFamily: "regular",
                  }}
                >
                  GIFT CARD
                </a>
                <a
                  href=""
                  style={{
                    color: "rgba(255, 255, 255, 0.6)",
                    fontFamily: "regular",
                  }}
                >
                  AREA CLIENTE
                </a>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>

        <div className="third_container">
          <h4>SERVIZIO CLIENTI</h4>
          <div className="links">
            <a href="">Spese e Spedizioni</a>
            <a href="">Condizioni di vendita</a>
            <a href="">Pagamenti Sicuri</a>
            <a href="">Termini e Condizioni</a>
            <a href="">Politica dei cookie</a>
          </div>
          <div className="mobile_links">
            <Accordion sx={{ backgroundColor: "black", width:'100%' }}>
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: "white",
                    }}
                  />
                }
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  color: "white",
                  fontFamily: "regular",
                 
                }}
              >
                SERVIZIO CLIENTI
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "1rem",
                  flexDirection: "column",
                }}
              >
                <a
                  href=""
                  style={{
                    color: "rgba(255, 255, 255, 0.6)",
                    fontFamily: "regular",
                  }}
                >
                  Spese e Spedizioni
                </a>
                <a
                  href=""
                  style={{
                    color: "rgba(255, 255, 255, 0.6)",
                    fontFamily: "regular",
                  }}
                >
                  Condizioni di vendita
                </a>
                <a
                  href=""
                  style={{
                    color: "rgba(255, 255, 255, 0.6)",
                    fontFamily: "regular",
                  }}
                >
                  Pagamenti Sicuri
                </a>
                <a
                  href=""
                  style={{
                    color: "rgba(255, 255, 255, 0.6)",
                    fontFamily: "regular",
                  }}
                >
                  Termini e Condizioni
                </a>
                <a
                  href=""
                  style={{
                    color: "rgba(255, 255, 255, 0.6)",
                    fontFamily: "regular",
                  }}
                >
                  Politica dei cookie
                </a>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>

        <div className="fourth_container">
          <img src={Logo} alt="" />
          <div className="contact_info">
            <a href="">+39.081.759.02.89</a>
            <a href="">+39.350.511.1914</a>
            <a href="">info@onceperfume.com</a>
            <p>
              DREMAR PARFUM INTERNATIONAL S.R.L. Sede op.: Via Boscofangone snc
              – Interporto Campano Lotto D1 – Moduli 235/236 80035 Nola (NA)
              P.IVA: 07160081217
            </p>
          </div>
        </div>
      </div>

      <hr />

      <div className="copyright">
        <p>© Copyright 2017 - 2024 DREMAR PARFUM INTERNATIONAL S.R.L.</p>
        <img src={PaymentImg} alt="" />
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  height: max-content;
  background-color: black;
  background-image: none;
  overflow: hidden;

  hr {
    width: 100%;
    color: rgba(255, 255, 255, 0.6);
    margin-top: 3%;
  }

  .copyright {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1%;
    padding-bottom: 2%;

    p {
      text-align: center;
    }
  }

  .footer_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    padding-top: 2%;
    padding-right: 2%;
    
    .first_container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      flex-basis: 22%;
      flex-direction: column;

      h3 {
        text-align: center;
      }

      .icon_container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        flex-direction: column;
        .icon {
          color: "white" !important;
        }
      }
      hr {
        width: 200px;
        margin-left: 35%;
        margin-top: 5%;
      }

      .payment_image {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 80%;
          height: auto;
        }
      }

      .payapl {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 40%;
          height: auto;
        }
      }
    }

    .second_container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      flex-basis: 22%;
      gap: 2rem;
      .mobile_links {
        display: none;
      }
      h4 {
        font-size: 1.3rem;
      }
      .links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        gap: 2rem;
        a {
          color: rgba(255, 255, 255, 0.6);
          font-size: 1rem;
        }
      }
    }
    .third_container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      flex-basis: 22%;
      gap: 2rem;
      .mobile_links {
        display: none;
      }
      h4 {
        font-size: 1.3rem;
      }
      .links {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: column;
        gap: 2rem;

        a {
          color: rgba(255, 255, 255, 0.6);
          font-size: 1rem;
        }
      }
    }
  }

  .fourth_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    flex-basis: 22%;
    gap: 1rem;
    .contact_info {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: column;
      gap: 0.4rem;
      a {
        color: rgba(255, 255, 255, 0.6);
        font-size: 1rem;
      }
      p {
        max-width: 20ch;
      }
    }
  }

  @media (max-width: 640px) {
    height: max-content;
    .footer_container {
      flex-direction: column;
      align-items: flex-start;

      .first_container {
        align-items: flex-start;
        padding-left: 2%;
        .payment_image {
          justify-content: flex-start;
          align-items: flex-start;
        }
        .payapl {
          justify-content: flex-start;
          align-items: flex-start;
        }
      }

      .second_container {
        display: block;
        align-items: flex-start;
        .mobile_links {
          display: block;
        }
        h4 {
          display: none;
        }
        .links {
          align-items: flex-start;
          display: none;
        }
      }

      .third_container {
        display: block;
        align-items: flex-start;

        .mobile_links {
          display: block;
        }

        h4 {
          display: none;
        }

        .links {
          align-items: flex-start;
          display: none;
        }
      }

      .fourth_container {
        justify-content: flex-start;
        align-items: flex-start;
        padding-left: 2%;

        img {
          align-self: flex-start;
        }
      }
    }
  }
`;
