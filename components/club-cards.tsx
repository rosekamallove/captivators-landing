import styled from "styled-components";
import IconRow from "./icon-row";

export default function ClubCard() {
  return (
    <Wrapper>
      <RowWrapper className="grid grid-cols-1 p-8 sm:grid-cols-2 sm:gap-y-32">
        <IconRow
          number="🧑‍💻"
          title="CodeZen"
          subtitle="Enviorment of coding and development in campus"
        />
        <IconRow
          number="📷"
          title="Photopedia"
          subtitle="Develop a healthy enviorment for photography"
        />
        <IconRow
          number="🖌️"
          title="ArtisticDots"
          subtitle="For those with art as their passion"
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
  width: 85%;
  height: auto;
  padding: 1rem;
  background: rgba(15, 14, 71, 0.3);
  box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.25),
    inset 0 0 0 0.5px rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  backdrop-filter: blur(40px);
  margin: 0 auto;
`;

const RowWrapper = styled.div`
  width: 100%;
  height: fit-content;
`;
