import styled, { keyframes } from "styled-components";

const BlobAnimation: React.FC = () => {
  return (
    <div>
      <Blob className="hidden lg:block" />
      <Blob2 className="hidden lg:block" />
      <Blob3 className="hidden lg:block" />
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

const move2 = keyframes`
  from {
    transform: translate(-200px, 0px) rotate(-90deg);
    border-radius: 51% 49% 58% 42% / 34% 78% 22% 66%;
  }

  to {
    transform: translate(400px, 100px) rotate(-120deg);
    border-radius: 22% 78% 73% 27% / 68% 31% 69% 32%;
  }
`;

const move3 = keyframes`
  from {
    transform: translate(-200px, 0px) rotate(-90deg);
    border-radius: 51% 49% 58% 42% / 34% 78% 22% 66%;
  }

  to {
    transform: translate(200, 120) rotate(-120deg);
    border-radius: 22% 78% 73% 27% / 68% 31% 69% 32%;
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

const Blob2 = styled(Blob)`
  background: linear-gradient(
    180deg,
    rgba(186, 117, 255, 0.5) 26%,
    #3913b8 100%
  );

  animation: ${move2} 30s infinite alternate;
`;

const Blob3 = styled(Blob)`
  background: linear-gradient(
    180deg,
    rgba(186, 117, 255, 0.5) 26%,
    #3913b8 100%
  );

  animation: ${move3} 10s infinite alternate;
`;

export default BlobAnimation;
