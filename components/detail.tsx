import Link from "next/link";
import React from "react";

export const DetailContainer: React.FC = ({ children }) => (
  <div className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-2">
    {children}
  </div>
);

export const DetailBackground: React.FC = () => (
  <div className="sticky top-0 grid min-h-screen w-full  grid-cols-1 lg:grid-cols-2 ">
    <div className="h-[30vh] bg-black lg:h-auto"></div>
    <div className="h-[70vh] bg-white lg:min-h-screen"></div>
  </div>
);

export const DetailLeft: React.FC<{ progress: number }> = ({
  progress,
  children,
}) => {
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

export const DetailRight: React.FC<{ progress: number }> = ({
  children,
  progress,
}) => {
  let translateY = Math.max(-50, -(progress - 0.5));
  return (
    <div
      className="flex h-screen flex-1 justify-center lg:items-center"
      style={{
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div className="w-full max-w-xl px-10 pt-5 lg:pt-10">{children}</div>
    </div>
  );
};

interface LinkProps {
  href: string;
}

export const DetailLink: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <Link href={href}>
      <a
        className="text-black underline decoration-1 underline-offset-8"
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    </Link>
  );
};
