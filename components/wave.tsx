import styled from "styled-components";

import RoundWave from "/public/images/round-wave.svg";

export default function Wave() {
  return (
    <Wrapper>
      <Wave1 />
      <Wave2>
        <svg style={{ position: "absolute" }}>
          <clipPath id="wave4">
            <path d="M1228.1 62.9026C1015.3 -18.9903 1005.12 -4.07699 783.138 14.9026C561.156 33.8822 492.527 81.4487 327.138 62.9026C161.75 44.3565 74.1221 67.9803 -5.00049 87.7609C-5.00049 175.694 -5.00073 584 -5.00073 584L1517.1 584L1517.1 62.9025C1517.1 62.9025 1441.29 144.945 1228.1 62.9026Z" />
          </clipPath>
        </svg>
      </Wave2>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  height: 1000px;
  width: 100%;
  overflow: hidden;
`;

const Wave1 = styled.div`
  position: absolute;
  width: 100%;
  height: 1000px;
  top: 0px;
  left: 1%;
  background-image: url(${RoundWave});
  background-position: 0 top;
  background-repeat: no-repeat;
  background-size: 100%;
  z-index: -1;

  @media (max-width: 1440px) {
    background-size: 1440px;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

const Wave2 = styled.div`
  position: absolute;
  width: 100%;
  height: 600px;
  top: 450px;
  background: linear-gradient(
    180deg,
    rgba(31, 31, 71, 0.25) -18.72%,
    #1f1f47 37.6%
  );
  clip-path: url(#wave4);
  transform-origin: top left;
  overflow: hidden;
  z-index: -1;

  @media (min-width: 1440px) {
    transform: scale(1.5);
  }

  @media (min-width: 2200px) {
    transform: scale(2);
  }

  @media (min-width: 2600px) {
    transform: scale(2.1);
  }
`;
