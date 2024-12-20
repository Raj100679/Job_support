// components/AboutUs.js
import { Box, Typography } from "@mui/material";

const AboutUs = () => {
  return (
    <Box
      id="about-us"
      sx={{
        //backgroundColor: "#1e1e1e",
        my: 10,
        py: 6,
        px: 3,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Roboto, sans-serif",
          fontWeight: 700,
          color: "#90caf9",
          mb: 2,
        }}
      >
        About Us
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: "Roboto, sans-serif",
          fontSize: 18,
          lineHeight: 1.6,
          //color: "#555",
          maxWidth: 800,
          mx: "auto",
        }}
      >
        If you're a newcomer to a particular technology or even an experienced
        professional who needs assistance with completing tasks, our team of
        seasoned experts is here to help. We offer timely support to help you
        meet your deadlines, and we also provide training to empower you to
        tackle future challenges independently.
        <br />
        <br />
        Based in India, we specialize in offering remote job support through
        online platforms like net meeting, Skype, or TeamViewer, assisting
        clients in the USA, UK, Canada, Australia, and other countries. Our
        services are available at highly competitive prices.
      </Typography>
    </Box>
  );
};

export default AboutUs;
