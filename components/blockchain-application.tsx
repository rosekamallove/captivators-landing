import React from "react";

interface Props {
  title: string;
}

const BlockChainApplication: React.FC<Props> = ({ title }) => {
  return (
    <div className="cursor-pointer rounded-md p-5 font-semibold shadow-md transition hover:shadow-xl">
      {title}
    </div>
  );
};
export default BlockChainApplication;
