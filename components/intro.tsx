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
        <div className="w-ful flex h-full flex-col items-center justify-evenly">
          <h2 className="text-center text-4xl font-semibold sm:text-4xl lg:text-6xl">
            Our Clubs
          </h2>
          <ClubCard />
        </div>
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
