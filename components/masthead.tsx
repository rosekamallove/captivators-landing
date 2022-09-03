import Image from "next/image";
import React, { useCallback, useContext, useRef, useState } from "react";
import logo from "../public/images/bitcoin-brands-white.png";
import down from "../public/images/chevron-down-solid-white.png";
import { ScrollContext } from "./scroll-observer";

interface Props {
  executeScroll: Function;
}

const MastHead: React.FC<Props> = ({ executeScroll }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;
  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleImageLoaded = useCallback(() => {
    setImageLoaded(true);
  }, []);

  return (
    <div
      ref={refContainer}
      className="sticky top-0 -z-10 flex min-h-screen flex-col items-center justify-center"
      style={{ transform: `translateY(-${progress * 20}vh)` }}
    >
      <video
        autoPlay
        playsInline
        muted
        loop
        className="absolute  h-full w-full object-cover"
        style={{ filter: "brightness(40%)" }}
      >
        <source src="/assets/block_chain.m4v" type="video/mp4; codecs=hvc1 " />
        <source src="/assets/block_chain.webm" type="video/webm; codecs=vp9" />
      </video>
      <div
        className={`flex-grow-0  pt-10 transition-opacity duration-1000 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src={logo}
          width={512 / 9}
          height={512 / 9}
          alt="logo"
          onLoad={handleImageLoaded}
        />
      </div>
      <div className="flex w-full  flex-1 flex-col items-center justify-center  p-12 text-center font-bold text-white drop-shadow-[0_3px_1px_rgba(0,0,0,0.2)]">
        <h1 className="z-10 mb-6 text-6xl xl:text-7xl">Blockchain</h1>
        <h2 className="z-10 mb-2 text-2xl tracking-tight xl:text-2xl">
          <span>An Introduction to The Decentralized Web</span>
        </h2>
      </div>
      <div
        className={`flex-grow-0 cursor-pointer pb-20 transition-all duration-1000 md:pb-10 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src={down}
          width={448 / 9}
          height={512 / 9}
          alt="scroll down"
          onLoad={handleImageLoaded}
          onClick={() => executeScroll()}
        />
      </div>
    </div>
  );
};
export default MastHead;
