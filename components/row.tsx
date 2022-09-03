import styled from "styled-components";

export default function Row(props) {
  const { number, title, subtitle } = props;

  return (
    <Wrapper>
      <NumberWrapper>
        <Number>{number}</Number>
      </NumberWrapper>
      <TextWrapper>
        <Title>{title}</Title>
        <Description>{subtitle}</Description>
      </TextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 46px auto;
  align-items: top;
  gap: 10px;
  width: 100%;
  min-width: 220px;
  max-width: 500px;
  height: fit-content;
  padding: 10px;
  border-radius: 10px;

  &,
  * {
    transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  }
`;

const NumberWrapper = styled.div`
  width: 36px;
  height: 36px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 50px;
  display: grid;
  place-content: center;
  place-items: center;
`;

const Number = styled.p`
  text-align: center;
  color: #ffffff;
`;

const TextWrapper = styled.div`
  display: grid;
  grid-gap: 8px;
  align-self: center;
`;

const Title = styled.p`
  max-width: 300px;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding-right: 40px;
`;

const Description = styled.p`
  font-weight: normal;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Duration = styled.picture`
  position: absolute;
  width: 48px;
  height: 20px;
  background: rgba(0, 0, 0, 0.2);
  color: #ffffff;
  border-radius: 5px;
  text-align: center;
  margin: 0;
  padding-top: 2px;
  top: 10px;
  right: 10px;
`;
