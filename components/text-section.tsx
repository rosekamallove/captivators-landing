import styled from "styled-components";

export default function TextSection() {
  return (
    <Wrapper>
      <h1 className="mb-4 font-['Oswald'] text-5xl font-bold text-white sm:mb-8 sm:text-6xl lg:text-8xl">
        CAPTIVATORS
      </h1>
      <h2 className="mb-2 p-0 text-lg text-white sm:text-2xl">
        Captivate, what you wished existed
      </h2>
      <h2 className="m-0 p-0 text-lg text-white opacity-70 sm:text-2xl">
        Captivate your future and lead the technology
      </h2>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
  padding: 140px 20px;
`;

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 18px;
  margin: 0;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 130%;
  margin: 0;
`;
