import Head from "next/head";
import Carousel from "../components/Carousel";
import { CssBaseline, Container, Typography } from "@mui/material";
import TrainingCards from "../components/Training";
import RequestCallback from "../components/Callback";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
     
      <Head>
        <title>Job Support</title>
      </Head>
      
        <TrainingCards />
        <Carousel />
        <RequestCallback/>
        <Footer/>
      
    </>
  );
}
