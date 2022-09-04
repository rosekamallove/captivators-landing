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
                <div className="text-center text-4xl font-bold text-gray-100 lg:text-8xl">
                  <h1 className="mb-2 text-[2rem] sm:mb-8 sm:text-[5rem] md:drop-shadow-[5px_0px_0px_#3fffc699]">
                    {"🧑‍💻"}
                  </h1>
                  <h1 className="mb-2 font-['Oswald'] sm:mb-4 md:drop-shadow-[5px_0px_0px_#3fffc699]">
                    CodeZen
                  </h1>
                  <p className="text-xl font-medium text-gray-300">
                    Coding Club
                  </p>
                </div>
              </DetailLeft>
              <DetailRight progress={progress}>
                <p className="mb-2 text-base text-gray-100 sm:mb-4 sm:text-xl">
                  Coding is the process of transforming ideas, solutions and
                  instructions into the language that computer can understand.
                </p>
                <p className="mb-1 hidden text-base text-gray-100 sm:mb-2 sm:block sm:text-xl">
                  Coding club helps members gain in depth knowledge of coding.
                </p>
                <p className="mb-2 text-base text-gray-100 sm:mb-4 sm:text-xl">
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
                <div className="text-center text-4xl font-bold text-gray-100 lg:text-8xl">
                  <h1 className="mb-2 text-[2rem] sm:mb-8 sm:text-[5rem] md:drop-shadow-[5px_0px_0px_#3fffc699]">
                    {"📷"}
                  </h1>
                  <h1 className="mb-2 font-['Oswald'] sm:mb-4 md:drop-shadow-[5px_0px_0px_#3fffc699]">
                    Photopedia
                  </h1>
                  <p className="text-xl font-medium text-gray-300">
                    Photography Club
                  </p>
                </div>
              </DetailLeft>
              <DetailRight progress={progress}>
                <p className="mb-2 text-base text-gray-100 sm:mb-4 sm:text-xl">
                  It is a group of people who focus to imagine, capture and
                  freeze a moment and create beauty.
                </p>
                <p className="mb-2 text-base text-gray-100 sm:mb-4 sm:text-xl">
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
                <div className="text-center text-4xl font-bold text-gray-100 lg:text-8xl">
                  <h1 className="mb-2 text-[2rem] sm:mb-8 sm:text-[5rem] md:drop-shadow-[5px_0px_0px_#3fffc699]">
                    {"🖌️"}
                  </h1>
                  <h1 className="mb-2 font-['Oswald'] sm:mb-4 md:drop-shadow-[5px_0px_0px_#3fffc699]">
                    ArtisticDots
                  </h1>
                  <p className="text-xl font-medium text-gray-300">Arts Club</p>
                </div>
              </DetailLeft>
              <DetailRight progress={progress}>
                <p className="mb-2 text-base text-gray-100 sm:mb-4 sm:text-xl">
                  The main motivation behind formation of this club is to
                  provide every member with the opportunity to learn and develop
                  a deeper understanding of art, craft and culture through
                  activities, performances and listening.
                </p>
                <p className="mb-2 text-base text-gray-100 sm:mb-4 sm:text-xl">
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
                <div className="text-center text-4xl font-bold text-gray-100 lg:text-8xl">
                  <h1 className="mb-2 text-[2rem] sm:mb-8 sm:text-[5rem] md:drop-shadow-[5px_0px_0px_#3fffc699]">
                    {"🫂"}
                  </h1>
                  <h1 className="mb-2 font-['Oswald'] sm:mb-4 md:drop-shadow-[5px_0px_0px_#3fffc699]">
                    SocializeLives
                  </h1>
                  <p className="text-xl font-medium text-gray-300">
                    Social Club
                  </p>
                </div>
              </DetailLeft>
              <DetailRight progress={progress}>
                <p className="mb-2 text-base text-gray-100 sm:mb-4 sm:text-xl">
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
