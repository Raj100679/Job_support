import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Check if screen size is mobile

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
    }
  };

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Job Support", id: "job-support" },
    { label: "Trainings", id: "trainings" },
    { label: "Reviews", id: "reviews" },
    { label: "Work With Us?", id: "work-with-us" },
    { label: "Contact", id: "contact" },
  ];

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
            />
          </IconButton>

          {/* Mobile Menu */}
          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                onClick={() => setDrawerOpen(true)}
                sx={{
                  color: "#90caf9",
                }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              >
                <Box
                  sx={{
                    width: 250,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mt: 2,
                  }}
                >
                  <List>
                    {menuItems.map((item) => (
                      <ListItem key={item.id} disablePadding>
                        <ListItemButton
                          onClick={() => {
                            scrollToSection(item.id);
                            setDrawerOpen(false); // Close drawer on selection
                          }}
                        >
                          <ListItemText
                            primary={item.label}
                            sx={{
                              textAlign: "center",
                              fontWeight: 700,
                              fontFamily: "'Roboto', sans-serif",
                              color: "#90caf9",
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            // Desktop Buttons Section
            <Box sx={{ display: "flex", gap: 2 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    color: "#90caf9",
                    fontWeight: 700,
                    fontSize: 15,
                    fontFamily: "'Roboto', sans-serif",
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
