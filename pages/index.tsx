import Head from "next/head";
import { useRef } from "react";
import Details from "../components/details";
import Footer from "../components/Footer";
import Intro from "../components/intro";
import MastHead from "../components/masthead";
import Stats from "../components/stats";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const IndexPage = () => {
  const introRef = useRef<HTMLDivElement>(null);
  const executeScroll = () => scrollToRef(introRef);

  return (
    <div>
      <Head>
        <title>Captivators</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <MastHead executeScroll={executeScroll} />
      <div ref={introRef}>
        <Stats />
      </div>
      <Intro />
      <Details />
      <Footer />
    </div>
  );
};

export default IndexPage;
