import Head from "next/head";
import Carousel from "../components/Carousel";
import { CssBaseline, Container, Typography } from "@mui/material";
import TrainingCards from "../components/Training";
import RequestCallback from "../components/Callback";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import JobCarousel from "../components/JobCarousel";

export default function Home() {
  return (
    <>
      <CssBaseline />
      <Head>
        <title>Job Support</title>
      </Head>
      <Navbar />
      <Typography
        variant="h4"
        align="center"
        sx={{ mb: 4, color: "#90caf9", fontWeight: "bold",mt:7 }}
      >
        Our Job Support Technologies
      </Typography>
      <JobCarousel/>
      <TrainingCards />
      <Carousel />
      <RequestCallback />
      <Footer />
    </>
  );
}
