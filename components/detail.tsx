import Link from "next/link";
import React, { ReactNode } from "react";

export const DetailContainer: React.FC<{ children: ReactNode }> = ({
  children,
}) => (
  <div className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-2">
    {children}
  </div>
);

export const DetailBackground: React.FC = () => (
  <div className="sticky top-0 grid min-h-screen w-full  grid-cols-1 bg-gradient-to-b from-[#0300a1] to-[#17026d] lg:grid-cols-2">
    <div className="h-[30vh] bg-transparent lg:h-auto"></div>
    <div className="relative flex h-[70vh] items-center justify-center bg-transparent lg:min-h-screen">
      <div className="absolute top-40 left-24 h-[12rem] w-[12rem] animate-blob rounded-full bg-blue-500/60 blur-2xl filter md:h-[24rem] md:w-[24rem]"></div>
      <div className="animation-delay-2000 absolute right-32 h-[12rem] w-[12rem] animate-blob rounded-full bg-emerald-500/60 blur-2xl filter md:h-[24rem] md:w-[24rem]"></div>
      <div className="animation-delay-4000 absolute bottom-32 left-32 h-[12rem] w-[12rem] animate-blob rounded-full bg-purple-300/60 blur-2xl filter md:h-[24rem] md:w-[24rem]"></div>
    </div>
  </div>
);

export const DetailLeft: React.FC<{
  progress: number;
  children: ReactNode;
}> = ({ progress, children }) => {
  let translateY = Math.max(0, 50 - progress * 3 - 50);
  if (progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 2 * 50);

  return (
    <div
      className="flex-cols flex h-[30vh] items-center justify-center text-3xl lg:h-auto lg:text-3xl"
      style={{
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div className="leading-10">{children}</div>
    </div>
  );
};

export const DetailRight: React.FC<{
  progress: number;
  children: ReactNode;
}> = ({ children, progress }) => {
  let translateY = Math.max(-50, -(progress - 0.5));
  return (
    <div
      className="flex h-screen flex-1 justify-center lg:items-center"
      style={{
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div className="flex h-[40rem] w-full max-w-xl flex-col justify-center rounded-3xl border border-white/20 bg-[#0F0E47]/30 p-8 px-10 pt-5 backdrop-blur-2xl lg:pt-10">
        {children}
      </div>
    </div>
  );
};

interface LinkProps {
  href: string;
  children: ReactNode;
}

export const DetailLink: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <Link href={href}>
      <a
        className="text-black underline decoration-1 underline-offset-8 hover:no-underline"
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    </Link>
  );
};
