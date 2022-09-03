import React, { useContext, useRef } from "react";
import s from "../styles/stats.module.css";
import { ScrollContext } from "./scroll-observer";

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  return 0.2;
};

const Stats: React.FC = () => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);

  const numOfPages = 4;
  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  return (
    <div ref={refContainer} className="bg-black text-white">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col  items-center justify-center px-10 py-24  text-4xl font-semibold md:py-28 md:text-6xl lg:px-20 lg:py-36 lg:text-7xl">
        <div className="leading-[1.15]">
          <span
            className={`${s.statsText} inline-block`}
            style={{ opacity: opacityForBlock(progress, 0) }}
          >
            By the end of 2024, it’s expected that corporations will spend{" "}
            <strong>$20 billion</strong> per year on blockchain technical
            services.
          </span>
          <span
            className={`${s.statsText} inline-block`}
            style={{ opacity: opacityForBlock(progress, 1) }}
          >
            About <strong>90%</strong> of U.S. and European banks had started
            exploring blockchain’s potential by 2018.
          </span>
          <span
            className={`${s.statsText} inline-block`}
            style={{ opacity: opacityForBlock(progress, 2) }}
          >
            <strong>74%</strong> of tech-savvy executive teams say they believe
            there’s a huge business potential in blockchain technology.
          </span>
          <span
            className={`${s.statsText} inline-block`}
            style={{ opacity: opacityForBlock(progress, 3) }}
          >
            <strong>24%</strong> of companies expect to invest between{" "}
            <strong>$5 million </strong>and <strong>$10 million</strong> in
            blockchain during 2021.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
