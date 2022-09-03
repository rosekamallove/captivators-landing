import React from "react";

export type ClubLeadType = {
  name: string;
  position: string;
  avatar: string;
};

const ClubLead = ({ clubLead }: { clubLead: ClubLeadType }) => {
  return (
    <div className="mx-2 flex w-32 flex-col items-center justify-start text-center duration-300 hover:scale-105">
      <img
        src={clubLead.avatar}
        alt=""
        className="mb-2 h-16 w-16 rounded-full drop-shadow-xl  md:h-20 md:w-20"
      />
      <h3 className="mb-1 text-xs sm:text-sm">{clubLead.name}</h3>
      <h3 className="text-xs text-indigo-600">{clubLead.position}</h3>
    </div>
  );
};

export default ClubLead;
