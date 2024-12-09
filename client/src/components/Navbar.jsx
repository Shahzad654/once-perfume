import React, {useState} from "react";
import styled from "styled-components";
import Logo from "../assets/images/logo.jpg";
import { CiSearch, CiUser } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { GiHamburgerMenu } from "react-icons/gi";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function Navbar() {
     const [open, setOpen] = useState(false);

     const toggleDrawer = (newOpen) => () => {
       setOpen(newOpen);
     };

     const DrawerList = (
       <Box
         sx={{ width: 250 }}
         role="presentation"
         onClick={toggleDrawer(false)}
       >
         <List>
           {[
             "SHOP",
             "DISCOVERY SET",
             "GIFT CARD",
             "ONCENESS",
             "CONTATTACI",
             "IT/EN",
           ].map((text, index) => (
             <ListItem key={text} disablePadding>
               <ListItemButton>
                 <ListItemText
                   primary={text}
                   sx={{ fontFamily: " regularbook" }}
                 />
               </ListItemButton>
             </ListItem>
           ))}
         </List>
         <Divider />
       </Box>
     );
  return (
    <StyledNavbar>
      <div className="navbar_container">
        <div className="mobile-navbar">
         
            <GiHamburgerMenu
              onClick={toggleDrawer(true)}
              style={{ width: "30px", height: "30px", cursor:"pointer" }}
            />
        
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </div>
        <div className="logo_container">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="icons_container">
          <CiSearch className="icon" />
          <CiUser className="icon" />
          <LiaShoppingBagSolid className="iconshop" />
        </div>
      </div>

      <div className="nav_links">
        <a href="">SHOP</a>
        <a href="">DISCOVERY SET</a>
        <a href="">GIFT CARD</a>
        <a href="">ONCENESS</a>
        <a href="">CONTATTACI</a>
        <a href="">IT/EN</a>
      </div>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.div`
  .navbar_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .mobile-navbar {
      display: none;
    }

    .logo_container {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 12%;
      }
    }

    .icons_container {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      justify-content: flex-end;
      padding-right: 5%;
      .iconshop {
        width: 25px;
        height: 25px;
      }
      .icon {
        width: 25px;
        height: 25px;
      }
    }
  }

  .nav_links {
    width: 50%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 15px;
    padding-bottom: 2%;

    a {
      font-weight: bold;
      font-size: 0.8rem;
    }
  }

  @media (max-width: 1000px) {
    .navbar_container .mobile-navbar {
      display: block !important;
      padding-left: 10px;
    }
    .navbar_container {
      .icons_container {
        .iconshop {
          width: 30px;
          height: 30px;
        }
        .icon {
          display: none;
        }
      }

      .logo_container{
         img {
        padding-left: 0;
      }
      }
    }

    .nav_links {
      display: none;
    }
  }
`;
