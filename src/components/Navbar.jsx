import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = ["Home", "Investment Overview", "Contact Us", "Gallery"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  return (
    <AppBar
      position="absolute"
      elevation={1}
      sx={{ bgcolor: "#ffffff", top: 0 }}
    >
      <Container
        maxWidth={false}
        sx={{
          width: "100%",
          height: { xs: "64px", md: "80px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2, md: "80px" },
        }}
      >
        {/* LEFT: Logo + Text */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img src="/logo.png" alt="Logo" style={{ height: 32 }} />
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: { xs: "16px", md: "24px" },
              lineHeight: { xs: "20px", md: "32px" },
              color: "#000",
            }}
          >
            Ft.Worth Duplex Investment
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

        {/* RIGHT: Mobile Drawer Menu */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon sx={{ color: "#000" }} />
          </IconButton>
          <Drawer
            anchor="left"
            open={open}
            onClose={toggleDrawer(false)}
          >
            <Box sx={{ width: 250 }}>
              {navItems.map((item) => (
                <ListItem button key={item} onClick={toggleDrawer(false)}>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </Box>
          </Drawer>
        </Box>
      </Container>
    </AppBar>
  );
}
