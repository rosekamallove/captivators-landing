import React from "react";
import styled from "styled-components";
import BlobAnimation from "./blob-animation";
import ClubCard from "./club-cards";
import Background from "./hero-background";
import StaticBlobs from "./solid-blobs";
import Wave from "./wave";

const Intro: React.FC = () => {
  return (
    <section className={`flex flex-col text-3xl text-white md:text-4xl`}>
      <Wrapper>
        <Background />
        <WaveWrapper>
          <Wave />
          <StaticBlobs />
        </WaveWrapper>
        <h2 className="mx-auto py-24 max-w-5xl text-6xl font-bold xl:text-7xl text-center">
          Our Clubs
        </h2>
        <ClubCard />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
`;

const WaveWrapper = styled.div`
  position: relative;
  top: 200px;
`;

export default Intro;
