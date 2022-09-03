import React, { useContext, useRef } from "react";
import styled from "styled-components";
import BlobAnimation from "./blob-animation";
import Card from "./card";
import Background from "./hero-background";
import { ScrollContext } from "./scroll-observer";
import TextSection from "./text-section";
import Wave from "./wave";

interface Props {
  executeScroll: Function;
}

const MastHead: React.FC<Props> = ({ executeScroll }) => {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;
  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  console.log(progress);

  return (
    <div
      ref={refContainer}
      className={`${
        progress === 0 ? "" : "sticky"
      } top-0 -z-10 h-auto w-full overflow-hidden`}
      style={{ transform: `translateY(-${progress * 20}vh)` }}
    >
      <Wrapper>
        <Background />
        <WaveWrapper>
          <Wave />
          <BlobAnimation />
        </WaveWrapper>
        <TextSection />
        <div className="-translate-y-20">
          <Card />
        </div>
      </Wrapper>
    </div>
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

const CardWrapper = styled.div`
  padding: 0 0px;
`;

export default MastHead;
