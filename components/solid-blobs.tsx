
import styled, { keyframes } from "styled-components";

const StaticBlobs: React.FC = () => {
  return (
    <div>
      <Blob />
    </div>
  );
};

const move = keyframes`
  from {
    transform: translate(0px, -50px) rotate(-90deg);
    border-radius: 24% 76% 35% 65% / 27% 36% 64% 73%;
  }

  to {
    transform: translate(500px, 100px) rotate(-10deg);
    border-radius: 76% 24% 33% 67% / 68% 55% 45% 32%;
  }
`;


const Blob = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  background: linear-gradient(
    180deg,
    rgba(47, 184, 255, 0.42) 31.77%,
    #9eecd9 100%
  );
  mix-blend-mode: color-dodge;
  transition: 1s cubic-bezier(0.07, 0.8, 0.16, 1);
  animation: ${move} 25s infinite alternate;

  :hover {
    width: 520px;
    height: 520px;
    filter: blur(30px);
    box-shadow: inset 0 0 0 0.5px rgba(255, 255, 255, 0.6),
      inset 100px 100px 0 0px #fa709a, inset 200px 200px 0 0px #784ba0,
      inset 300px 300px 0 0px #2b86c5;
  }
`;

export default StaticBlobs;
