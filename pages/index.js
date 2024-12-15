import Head from "next/head";
import Carousel from "../components/Carousel";
import { CssBaseline, Container, Typography } from "@mui/material";
import TrainingCards from "../components/Training";
import RequestCallback from "../components/Callback";

export default function Home() {
  return (
    <>
      <CssBaseline />
      <Head>
        <title>Job Support</title>
      </Head>
      <Container>
        <TrainingCards />
        <Carousel />
        <RequestCallback/>
      </Container>
    </>
  );
}
