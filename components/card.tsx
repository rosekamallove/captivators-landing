import styled from "styled-components";
import Row from "./row";

export default function Card() {
  return (
    <Wrapper>
      <RowWrapper>
        <Row
          number="1"
          title="Get exposed more"
          subtitle="Joining a club or a society will enable you to connect to a peer group who shares similar interests as you."
        />
        <Row
          number="2"
          title="Enrich your life as a student."
          subtitle="Being a part of a club or a society helps you to gain knowledge, skills and experience in leadership, communication, problem-solving, group development and management, finance, presentation and public speaking."
        />
        <Row
          number="3"
          title="The experience will make your CV more interesting"
          subtitle="And of course, it is a great experience to put on your CV. After your graduation, when you apply for jobs, you will stand out amongst your peers. Your academic scores won't stand out alone. You need extra-curricular to decorate your CV"
        />
      </RowWrapper>
      <button
        type="button"
        className="text-white mt-5 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 transition-all"
      >
        Get Started Now
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  width: 100%;
  height: 500px;
  padding: 20px;
  background: rgba(15, 14, 71, 0.3);
  box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.25),
    inset 0 0 0 0.5px rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  backdrop-filter: blur(40px);
  margin: 0 auto;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
  gap: 8px;
`;
