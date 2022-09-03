import styled from "styled-components";
import IconRow from "./icon-row";

export default function ClubCard() {
  return (
    <Wrapper>
      <RowWrapper>
        <IconRow
          number="🧑‍💻"
          title="CodeZen"
          subtitle="Enviorment of coding and development in campus"
        />
        <IconRow
          number="📷"
          title="PhotoPedia"
          subtitle="Develop a healthy enviorment for cultural activities in campus"
        />
        <IconRow
          number="🖌️"
          title="ArtisticDots"
          subtitle="For those with photography as their passion"
        />
        <IconRow
          number="🫂"
          title="SocializeLives"
          subtitle="To organize social service events like tree plantation drive, safai abhiyan etc"
        />
      </RowWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 80%;
  width: 100%;
  height: auto;
  padding: 100px;
  background: rgba(15, 14, 71, 0.3);
  box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.25),
    inset 0 0 0 0.5px rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  backdrop-filter: blur(40px);
  margin: 0 auto;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height: fit-content;
  gap: 50px;
`;
