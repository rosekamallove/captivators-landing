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
  <div className="sticky top-0 grid min-h-screen w-full  grid-cols-1 bg-indigo-200 lg:grid-cols-2">
    <div className="h-[30vh] bg-indigo-200 lg:h-auto"></div>
    <div className="relative flex h-[70vh] items-center justify-center bg-indigo-200 lg:min-h-screen">
      <div className="absolute top-40 left-24 h-[12rem] w-[12rem] animate-blob rounded-full bg-purple-500/40 blur-xl filter md:h-[24rem] md:w-[24rem]"></div>
      <div className="animation-delay-2000 absolute right-32 h-[12rem] w-[12rem] animate-blob rounded-full bg-yellow-500/40 blur-xl filter md:h-[24rem] md:w-[24rem]"></div>
      <div className="animation-delay-4000 absolute bottom-32 left-32 h-[12rem] w-[12rem] animate-blob rounded-full bg-pink-500/40 blur-xl filter md:h-[24rem] md:w-[24rem]"></div>
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
      <div className="w-full max-w-xl rounded-3xl border border-gray-100/30 bg-gradient-to-br from-white/20 to-indigo-100/20 p-8 px-10 pt-5 backdrop-blur-2xl lg:pt-10">
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
