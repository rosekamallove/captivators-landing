import styled from "styled-components";

export default function TextSection() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-2 text-center">
      <img
        src="/images/logo.jpeg"
        alt="captivators-logo"
        className="m-0 mb-4 h-16 w-16 rounded-full p-0 sm:h-20 sm:w-20"
      />
      <h3 className="font-['Oswald'] text-base font-semibold text-indigo-600 sm:text-xl">
        DEPARTMENT OF CSIT
      </h3>
      <h1 className="font-['Oswald'] text-5xl font-bold text-white sm:text-6xl lg:text-6xl">
        CAPTIVATORS
      </h1>
      <h2 className="text-base text-white sm:text-lg">
        Captivate, what you wished existed
      </h2>
    </div>
  );
}
