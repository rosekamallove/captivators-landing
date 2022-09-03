import Image from "next/image";
import React from "react";
import roseImage from "../public/images/rose_photo.jpg";
import BlockChainApplication from "./blockchain-application";
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
    <TileWrapper numOfPages={6}>
      <TileBackground>
        <DetailBackground />
      </TileBackground>
      <TileContent>
        <Tile
          page={0}
          renderContent={({ progress }) => (
            <DetailContainer>
              <DetailLeft progress={progress}>
                <div className="text-4xl font-bold lg:text-5xl">
                  Working of Blockchain
                </div>
              </DetailLeft>
              <DetailRight progress={progress}>
                <p className="z-10 py-2 pt-10 text-xl  text-black">
                  The goal of blockchain is to allow digital information to be
                  recorded and distributed, but not edited. In this way, a
                  blockchain is the foundation for immutable ledgers, or records
                  of transactions that cannot be altered, deleted, or destroyed.
                  This is why blockchains are also known as a{" "}
                  <DetailLink href="https://www.investopedia.com/terms/d/distributed-ledger-technology-dlt.asp">
                    distributed ledger technology (DLT).
                  </DetailLink>
                </p>
                <p className="text-xl  text-black">
                  First proposed as a research project in 1991, the blockchain
                  concept predated its first widespread application in use:
                  Bitcoin, in 2009. In the years since, the use of blockchains
                  has exploded via the creation of various{" "}
                  <DetailLink href="https://www.investopedia.com/terms/c/cryptocurrency.asp">
                    cryptocurrencies
                  </DetailLink>
                  ,
                  <DetailLink href="investopedia.com/decentralized-finance-defi-5113835">
                    decentralized finance (DeFi)
                  </DetailLink>{" "}
                  applications,{" "}
                  <DetailLink href="investopedia.com/non-fungible-tokens-nft-5115211">
                    non-fungible tokens (NFTs)
                  </DetailLink>
                  , and smart contracts.
                </p>
              </DetailRight>
            </DetailContainer>
          )}
        />
        <Tile
          page={1}
          renderContent={({ progress }) => (
            <DetailContainer>
              <DetailLeft progress={progress}>
                <div className="text-4xl font-bold lg:text-5xl">
                  The Problem
                </div>
              </DetailLeft>
              <DetailRight progress={progress}>
                <p className="z-10 py-2 pt-10 text-xl  text-black">
                  Imagine that a company owns a server farm with 10,000
                  computers used to maintain a database holding all of its
                  client’s account information. This company owns a warehouse
                  building that contains all of these computers under one roof
                  and has full control of each of these computers and all of the
                  information contained within them. This, however, provides a
                  single point of failure. What happens if the electricity at
                  that location goes out? What if its Internet connection is
                  severed? What if it burns to the ground? What if a bad actor
                  erases everything with a single keystroke? In any case, the
                  data is lost or corrupted.
                </p>
              </DetailRight>
            </DetailContainer>
          )}
        />
        <Tile
          page={2}
          renderContent={({ progress }) => (
            <DetailContainer>
              <DetailLeft progress={progress}>
                <div className="text-4xl font-bold lg:text-5xl">
                  The Decentralized Solution
                </div>
              </DetailLeft>
              <DetailRight progress={progress}>
                <p className="z-10 py-2 pt-10 text-xl  text-black">
                  What a blockchain does is to allow the data held in that
                  database to be spread out among several network nodes at
                  various locations. This not only creates redundancy but also
                  maintains the fidelity of the data stored therein—if somebody
                  tries to alter a record at one instance of the database, the
                  other nodes would not be altered and thus would prevent a bad
                  actor from doing so. If one user tampers with Bitcoin’s record
                  of transactions, all other nodes would cross-reference each
                  other and easily pinpoint the node with the incorrect
                  information. This system helps to establish an exact and
                  transparent order of events. This way, no single node within
                  the network can alter information held within it.
                </p>
              </DetailRight>
            </DetailContainer>
          )}
        />
        <Tile
          page={3}
          renderContent={({ progress }) => (
            <DetailContainer>
              <DetailLeft progress={progress}>
                <div className="text-4xl font-bold lg:text-5xl">
                  Transparency
                </div>
              </DetailLeft>
              <DetailRight progress={progress}>
                <p className="z-10 py-2 pt-10 text-xl  text-black">
                  Because of the decentralized nature of Bitcoin’s blockchain,
                  all transactions can be transparently viewed by either having
                  a personal node or using{" "}
                  <DetailLink href="https://www.blockchain.com/explorer?utm_campaign=dcomnav_explorer">
                    blockchain explorers
                  </DetailLink>{" "}
                  that allow anyone to see transactions occurring live. Each
                  node has its own copy of the chain that gets updated as fresh
                  blocks are confirmed and added. This means that if you wanted
                  to, you could track Bitcoin wherever it goes.
                </p>
                <p className="py-2 pt-10 text-xl  text-black">
                  For example, exchanges have been hacked in the past, where
                  those who kept Bitcoin on the exchange lost everything. While
                  the hacker may be entirely anonymous, the Bitcoins that they
                  extracted are easily traceable. If the Bitcoins stolen in some
                  of these hacks were to be moved or spent somewhere, it would
                  be known.
                </p>
              </DetailRight>
            </DetailContainer>
          )}
        />
        <Tile
          page={4}
          renderContent={({ progress }) => (
            <DetailContainer>
              <DetailLeft progress={progress}>
                <div className="text-4xl font-bold lg:text-5xl">
                  Applications of Blockchain
                </div>
              </DetailLeft>
              <DetailRight progress={progress}>
                <div className="md:grid-col-3 mt-10 grid grid-cols-2 gap-5 text-xl text-black lg:grid-cols-3  ">
                  <BlockChainApplication title={"Money Transfer"} />
                  <BlockChainApplication title={"Financial Exchange"} />
                  <BlockChainApplication title={"Lending"} />
                  <BlockChainApplication title={"Insurance"} />
                  <BlockChainApplication title={"Real Estate"} />
                  <BlockChainApplication title={"Voting"} />
                  <BlockChainApplication title={"Artist Royalties"} />
                  <BlockChainApplication title={"NFTs"} />
                  <BlockChainApplication title={"Logistics Tracking"} />
                  <BlockChainApplication title={"Secure IoT"} />
                  <BlockChainApplication
                    title={"Secure personal information"}
                  />
                  <BlockChainApplication title={"Government benefits"} />
                </div>
              </DetailRight>
            </DetailContainer>
          )}
        />
        <Tile
          page={5}
          renderContent={({ progress }) => (
            <DetailContainer>
              <DetailLeft progress={progress}>
                <div className="text-6xl font-bold lg:text-5xl">About Me</div>
              </DetailLeft>
              <DetailRight progress={progress}>
                <div className="flex w-full  flex-1 flex-col items-center justify-center ">
                  <Image
                    src={roseImage}
                    width={150}
                    height={150}
                    alt="profile"
                    className="rounded-full"
                  />
                  <p className="text-4xl font-bold text-black">
                    <DetailLink href="https://rosekamallove.vercel.app">
                      Rose Kamal Love
                    </DetailLink>
                  </p>
                </div>
                <p className="py-2  text-xl  text-black">
                  A friendly ambivert who loves writing code, with a craving to
                  create music.
                </p>
                <p className="py-2  text-xl  text-black">
                  I am a full-stack developer with experience in the MERN stack
                  and have also built a backend with Django. I like to Solve
                  Problems, algorithmic as well as the problems I face while
                  developing some cool projects like{" "}
                  <DetailLink href="https://github.com/rosekamallove/youtemy">
                    <strong>YouTemy</strong>
                  </DetailLink>{" "}
                  I also have a knack for Music, I love to listen as well as
                  create Music{" "}
                  <DetailLink href="https://soundcloud.com/user-276723683">
                    (SoundCloud)
                  </DetailLink>
                  .
                </p>
              </DetailRight>
            </DetailContainer>
          )}
        />
      </TileContent>
    </TileWrapper>
  );
};

export default Details;
