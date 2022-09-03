import React from "react";
import { DetailLink } from "./detail";

const Intro: React.FC = () => {
  return (
    <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
      <div className="container mx-auto px-11">
        <h2 className="mx-auto mb-6 max-w-5xl text-6xl font-bold xl:text-7xl">
          So, What Is a Blockchain?
        </h2>
        <p className="mx-auto my-10 max-w-5xl text-3xl ">
          <strong>
            A blockchain is a distributed database that is shared among the
            nodes of a computer network.
          </strong>{" "}
        </p>
        <p className="mx-auto my-10  max-w-5xl text-3xl ">
          As a database, a blockchain stores information electronically in
          digital format. Blockchains are best known for their crucial role in
          cryptocurrency systems, such as{" "}
          <DetailLink href="https://www.investopedia.com/terms/b/bitcoin.asp">
            Bitcoin
          </DetailLink>
          , for maintaining a secure and decentralized record of transactions.
          The innovation with a blockchain is that it guarantees the fidelity
          and security of a record of data and generates trust without the need
          for a trusted third party.
        </p>
        <p className="mx-auto my-10 max-w-5xl text-3xl leading-tight">
          One key difference between a typical database and a blockchain is how
          the data is structured. A blockchain collects information together in
          groups, known as{" "}
          <DetailLink href="https://www.investopedia.com/terms/b/block-bitcoin-block.asp">
            blocks
          </DetailLink>
          , that hold sets of information.{" "}
        </p>
        <p className="mx-auto my-5 max-w-5xl text-3xl ">
          Blocks have certain storage capacities and, when filled, are closed
          and linked to the previously filled block, forming a chain of data
          known as the blockchain. All new information that follows that freshly
          added block is compiled into a newly formed block that will then also
          be added to the chain once filled.
        </p>
      </div>
    </section>
  );
};

export default Intro;
