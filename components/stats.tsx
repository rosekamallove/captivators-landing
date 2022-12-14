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
    <div ref={refContainer} className="bg-indigo-900 text-white">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col  items-center justify-center px-10 py-24  text-4xl font-semibold md:py-28 md:text-6xl lg:px-20 lg:py-36 lg:text-7xl">
        <div className="leading-[1.15]">
          <span
            className={`${s.statsText} mb-4 inline-block font-medium`}
            style={{ opacity: opacityForBlock(progress, 0) }}
          >
            Joining a club or a society will enable you to connect to a{" "}
            <strong className="text-indigo-500">peer group</strong> who shares
            similar interests as you.{" "}
          </span>
          <span
            className={`${s.statsText} mb-4 inline-block font-medium`}
            style={{ opacity: opacityForBlock(progress, 1) }}
          >
            You will get an insight into other countries{" "}
            <strong className="text-indigo-500">culture</strong>,{" "}
            <strong className="text-indigo-500">values</strong>,{" "}
            <strong className="text-indigo-500">
              thinking process and views
            </strong>
            .
          </span>
          <span
            className={`${s.statsText} mb-4 inline-block font-medium`}
            style={{ opacity: opacityForBlock(progress, 2) }}
          >
            Being a part of a club or a society helps you to gain{" "}
            <strong className="text-indigo-500">knowledge</strong>,{" "}
            <strong className="text-indigo-500">skills</strong>,{" and "}
            <strong className="text-indigo-500">experience</strong>.
          </span>
          <span
            className={`${s.statsText} mb-4 inline-block font-medium`}
            style={{ opacity: opacityForBlock(progress, 3) }}
          >
            You will undoubtedly learn new skills. In a diverse group, you will
            be able to experience{" "}
            <strong className="text-indigo-500">personal growth</strong>.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
