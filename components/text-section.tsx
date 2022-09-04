import styled from "styled-components";

export default function TextSection() {
  return (
    <div className="relative my-0 mx-auto flex flex-col items-center p-8 text-center">
      <img
        src="/images/logo.jpeg"
        alt="captivators-logo"
        className="mb-8 h-16 w-16 rounded-full sm:mb-16 sm:h-24 sm:w-24"
      />
      <h3 className="font-['Oswald'] text-base font-semibold text-indigo-600 sm:text-2xl">
        DEPARTMENT OF CS&IT
      </h3>
      <h1 className="mb-4 font-['Oswald'] text-5xl font-bold text-white sm:mb-8 sm:text-6xl lg:text-8xl">
        CAPTIVATORS
      </h1>
      <h2 className="mb-2 p-0 text-base text-white sm:text-2xl">
        Captivate, what you wished existed
      </h2>
      <h2 className="mb-8 p-0 text-base text-white opacity-70 sm:text-2xl">
        Captivate your future and lead the technology
      </h2>
    </div>
  );
}
