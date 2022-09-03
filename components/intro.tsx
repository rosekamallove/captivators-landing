import React from "react";
import styled from "styled-components";
import BlobAnimation from "./blob-animation";
import ClubCard from "./club-cards";
import Background from "./hero-background";
import StaticBlobs from "./solid-blobs";
import Wave from "./wave";

const Intro: React.FC = () => {
  return (
    <section
      className={`flex flex-col bg-[#1C0A63] py-20 text-3xl text-white md:text-4xl`}
    >
      <div className="container mx-auto px-11">
        <h2 className="mx-auto mb-24 max-w-5xl text-6xl font-bold xl:text-7xl text-center">
          Our Clubs
        </h2>
      </div>
      <Wrapper>
        <Background />
        <WaveWrapper>
          <Wave />
          <StaticBlobs />
        </WaveWrapper>
        <ClubCard />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 80vh;
`;

const WaveWrapper = styled.div`
  position: relative;
  top: 200px;
`;

export default Intro;
