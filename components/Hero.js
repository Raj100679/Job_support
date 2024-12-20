import { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const HeroSection = () => {
  const titles = ["IT JOB SUPPORT", "TRAINING CENTER", "INTERVIEW SUPPORT"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + titles.length) % titles.length);
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "85vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        backgroundImage: `url('hero.webp')`, // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for better text visibility */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      ></Box>

      {/* Title and Arrows */}
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="h3"
          sx={{
            mb: 4,
            fontFamily: "Roboto, sans-serif",
            fontWeight: 700,
            //letterSpacing: "0.1em",
            color: "#f1f1f1",
          }}
        >
          {titles[currentIndex]}
        </Typography>

        {/* Navigation Buttons */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
          <IconButton
            onClick={handlePrev}
            sx={{
              color: "white",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              p: 1,
              borderRadius: "50%",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.4)" },
              transition: "background-color 0.3s ease",
            }}
          >
            <ArrowBackIosNewIcon sx={{ fontSize: 24 }} />
          </IconButton>
          <IconButton
            onClick={handleNext}
            sx={{
              color: "white",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              p: 1,
              borderRadius: "50%",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.4)" },
              transition: "background-color 0.3s ease",
            }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: 24 }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
