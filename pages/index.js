import Head from "next/head";
import Carousel from "../components/Carousel";
import { CssBaseline, Container, Typography } from "@mui/material";
import TrainingCards from "../components/Training";
import RequestCallback from "../components/Callback";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <CssBaseline />
      <Head>
        <title>Job Support</title>
      </Head>
        <Navbar/>
        <TrainingCards />
        <Carousel />
        <RequestCallback/>
        <Footer/>
    </>
  );
}
