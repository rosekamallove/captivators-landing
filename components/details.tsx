import Image from "next/image";
import React from "react";
import roseImage from "../public/images/rose_photo.jpg";
import BlockChainApplication from "./blockchain-application";
import ClubLeads from "./clubLeads";
import {
  DetailBackground,
  DetailContainer,
  DetailLeft,
  DetailLink,
  DetailRight,
} from "./detail";
import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";

const Details: React.FC = () => {
  return (
    <TileWrapper numOfPages={4}>
      <TileBackground>
        <DetailBackground />
      </TileBackground>
      <TileContent>
        <Tile
          page={0}
          renderContent={({ progress }) => (
            <DetailContainer>
              <DetailLeft progress={progress}>
                <div className="text-center text-4xl font-bold text-black lg:text-8xl">
                  <h1 className="mb-8 text-[5rem]">{"🧑‍💻"}</h1>
                  <h1 className="mb-4 font-['Oswald']">
                    <span className="text-indigo-700">C</span>odeZen
                  </h1>
                  <p className="text-xl font-medium text-gray-600">
                    Coding Club
                  </p>
                </div>
              </DetailLeft>
              <DetailRight progress={progress}>
                <p className="mb-3 text-xl text-gray-700">
                  Coding is the process of transforming ideas, solutions and
                  instructions into the language that computer can understand.
                </p>
                <p className="mb-3 text-xl text-gray-700">
                  Coding club helps members gain in depth knowledge of coding.
                </p>
                <p className="mb-3 text-xl text-gray-700">
                  It is a platform where students with different interests such
                  as coding, app development, machine learning and web designing
                  come up to enhance their knowledge.
                </p>
                <ClubLeads
                  clubLeads={[
                    {
                      name: "Rose Kamal Love",
                      position: "CS&IT 3rd Yr",
                      avatar: "/images/RoseKamalLove.jpeg",
                    },
                    {
                      name: "Yash Kumar Mishra",
                      position: "CS&IT 3rd Yr",
                      avatar: "/images/YashKumarMishra.jpg",
                    },
                    {
                      name: "Niharika Shakya",
                      position: "CS&IT 3rd Yr",
                      avatar: "/images/NiharikaShakya.jpg",
                    },
                    {
                      name: "Nishith Pandey",
                      position: "CS&IT 2nd Yr",
                      avatar: "/images/NishithPandey.jpg",
                    },
                  ]}
                />
              </DetailRight>
            </DetailContainer>
          )}
        />
        <Tile
          page={3}
          renderContent={({ progress }) => (
            <DetailContainer>
              <DetailLeft progress={progress}>
                <div className="text-center text-4xl font-bold text-black lg:text-8xl">
                  <h1 className="mb-8 text-[5rem]">{"📷"}</h1>
                  <h1 className="mb-4 font-['Oswald']">
                    <span className="text-indigo-700">P</span>hotopedia
                  </h1>
                  <p className="text-xl font-medium text-gray-600">
                    Photography Club
                  </p>
                </div>
              </DetailLeft>
              <DetailRight progress={progress}>
                <p className="z-10 py-2 pt-10 text-xl  text-gray-700">
                  It is a group of people who focus to imagine, capture and
                  freeze a moment and create beauty.
                </p>
                <p className="py-2 pt-10 text-xl  text-gray-700">
                  Students in this club have the opportunity to hove their
                  skills by understanding and learning about what makes a good
                  photograph, from composition to artistic expression.
                </p>
                <ClubLeads
                  clubLeads={[
                    {
                      name: "Harshit Kumar Singh",
                      position: "CS&IT 4th Yr",
                      avatar: "/images/HarshitKumarSingh.jpg",
                    },
                    {
                      name: "Avneesh Kumar",
                      position: "CS&IT 3rd Yr",
                      avatar: "/images/AvneeshKumar.jpg",
                    },
                    {
                      name: "Aditi Mishra",
                      position: "CS&IT 2nd Yr",
                      avatar: "/images/AditiMishra.jpg",
                    },
                  ]}
                />
              </DetailRight>
            </DetailContainer>
          )}
        />
        <Tile
          page={1}
          renderContent={({ progress }) => (
            <DetailContainer>
              <DetailLeft progress={progress}>
                <div className="text-center text-4xl font-bold text-black lg:text-8xl">
                  <h1 className="mb-8 text-[5rem]">{"🖌️"}</h1>
                  <h1 className="mb-4 font-['Oswald']">
                    <span className="text-indigo-700">A</span>rtisticDots
                  </h1>
                  <p className="text-xl font-medium text-gray-600">Arts Club</p>
                </div>
              </DetailLeft>
              <DetailRight progress={progress}>
                <p className="z-10 py-2 pt-10 text-xl  text-gray-700">
                  The main motivation behind formation of this club is to
                  provide every member with the opportunity to learn and develop
                  a deeper understanding of art, craft and culture through
                  activities, performances and listening.
                </p>
                <p className="z-10 py-2 pt-10 text-xl  text-gray-700">
                  Art brings different people together and culture helps
                  appreciate each other with their diversity.
                </p>
                <ClubLeads
                  clubLeads={[
                    {
                      name: "Sakshi Agarwal",
                      position: "CS&IT 3rd Yr",
                      avatar: "/images/SakshiAgarwal.jpg",
                    },
                    {
                      name: "Niharika Shakya",
                      position: "CS&IT 3rd Yr",
                      avatar: "/images/NiharikaShakya.jpg",
                    },
                    {
                      name: "Utkarsh Gupta",
                      position: "CS&IT 3rd Yr",
                      avatar: "/images/UtkarshGupta.jpg",
                    },
                  ]}
                />
              </DetailRight>
            </DetailContainer>
          )}
        />
        <Tile
          page={2}
          renderContent={({ progress }) => (
            <DetailContainer>
              <DetailLeft progress={progress}>
                <div className="text-center text-4xl font-bold text-black lg:text-8xl">
                  <h1 className="mb-8 text-[5rem]">{"🫂"}</h1>
                  <h1 className="mb-4 font-['Oswald']">
                    <span className="text-indigo-700">S</span>ocializeLives
                  </h1>
                  <p className="text-xl font-medium text-gray-600">
                    Social Club
                  </p>
                </div>
              </DetailLeft>
              <DetailRight progress={progress}>
                <p className="z-10 py-2 pt-10 text-xl  text-gray-700">
                  Through this club we sensitize students to develop social
                  values, widespread their responsibilities and knowledge in
                  societal issues and problems by making them to involve with
                  the community people.
                </p>
                <ClubLeads
                  clubLeads={[
                    {
                      name: "Harshit Kumar Singh",
                      position: "CS&IT 4th Yr",
                      avatar: "/images/HarshitKumarSingh.jpg",
                    },
                    {
                      name: "Nishith Pandey",
                      position: "CS&IT 2nd Yr",
                      avatar: "/images/NishithPandey.jpg",
                    },
                    {
                      name: "Aditi Mishra",
                      position: "CS&IT 2nd Yr",
                      avatar: "/images/AditiMishra.jpg",
                    },
                  ]}
                />
              </DetailRight>
            </DetailContainer>
          )}
        />
      </TileContent>
    </TileWrapper>
  );
};

export default Details;
