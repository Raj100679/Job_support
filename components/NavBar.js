import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
} from "@mui/material";

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
    }
  };

  return (
    <>
      <AppBar
        position="relative"
        sx={{
          backgroundColor: "#000000", // Set background color to black
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: 100,
          }}
        >
          {/* Logo Image */}
          <IconButton>
            <img
              src="/logo_2.png"
              alt="Logo"
              style={{ height: 100, width: 100 }}
            />{" "}
          </IconButton>

          {/* Buttons Section */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              onClick={() => scrollToSection("home")}
              sx={{
                color: "#90caf9",
                fontWeight: 700,
                fontSize: 15,
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              Home
            </Button>
            <Button
              onClick={() => scrollToSection("about")}
              sx={{
                color: "#90caf9",
                fontWeight: 700,
                fontSize: 15,
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              About
            </Button>
            <Button
              onClick={() => scrollToSection("job-support")}
              sx={{
                color: "#90caf9",
                fontWeight: 700,
                fontSize: 15,
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              Job Support
            </Button>
            <Button
              onClick={() => scrollToSection("trainings")}
              sx={{
                color: "#90caf9",
                fontWeight: 700,
                fontSize: 15,
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              Trainings
            </Button>
            <Button
              onClick={() => scrollToSection("reviews")}
              sx={{
                color: "#90caf9",
                fontWeight: 700,
                fontSize: 15,
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              Reviews
            </Button>
            <Button
              onClick={() => scrollToSection("work-with-us")}
              sx={{
                color: "#90caf9",
                fontWeight: 700,
                fontSize: 15,
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              Work With Us?
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              sx={{
                color: "#90caf9",
                fontWeight: 700,
                fontSize: 15,
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
