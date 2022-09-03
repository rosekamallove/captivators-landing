import styled from "styled-components";

export default function TextSection() {
  return (
    <Wrapper>
      <Title>Captivators</Title>
      <Subtitle>Captivate, what you wished existed</Subtitle>
      <Description>Captivate your future and lead the technology</Description>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: grid;
  gap: 20px;
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

const Title = styled.h1`
  color: rgba(255, 255, 255, 1);
  font-style: normal;
  font-weight: bold;
  font-size: 82px;
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
