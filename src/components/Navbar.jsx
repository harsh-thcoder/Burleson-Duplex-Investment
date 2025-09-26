import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Box,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = ["Home", "Features", "Pricing", "About", "Contact"];

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <AppBar
      position="absolute"           // overlay Hero image
      elevation={1}                 // subtle shadow
      sx={{ bgcolor: "#ffffff", top: 0 }} // white background
    >
      <Container
        maxWidth={false}
        sx={{
          width: "1440px",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 80px 20px 83px",
        }}
      >
        {/* LEFT: Logo + Text */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <img
            src="/logo.png"
            alt="Logo"
            style={{ height: 40 }}
          />
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Poppins", 
              fontWeight: 500,
              fontSize: "28px",
              lineHeight: "36px",
              letterSpacing: "0%",
              color: "#000", // black text
            }}
          >
            Burleson Duplex Investment
          </Typography>
        </Box>

        {/* RIGHT: Desktop Menu */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: "20px" }}>
          {navItems.map((item) => (
            <Button key={item} sx={{ color: "#000" }}>
              {item}
            </Button>
          ))}
        </Box>

        {/* RIGHT: Mobile Menu */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton color="inherit" onClick={handleMenuOpen}>
            <MenuIcon sx={{ color: "#000" }} />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {navItems.map((item) => (
              <MenuItem key={item} onClick={handleMenuClose}>
                {item}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Container>
    </AppBar>
  );
}
