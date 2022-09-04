import React from "react";

export type ClubLeadType = {
  name: string;
  position: string;
  avatar: string;
};

const ClubLead = ({ clubLead }: { clubLead: ClubLeadType }) => {
  return (
    <div className="mx-2 flex w-32 flex-col items-center justify-start text-center text-white duration-300 hover:scale-105">
      <img
        src={clubLead.avatar}
        alt=""
        className="mb-2 h-12 w-12 rounded-full drop-shadow-xl sm:h-16 sm:w-16  md:h-20 md:w-20"
      />
      <h3 className="mb-1 text-xs font-semibold sm:text-sm">{clubLead.name}</h3>
      <h3 className="text-xs text-indigo-400">{clubLead.position}</h3>
    </div>
  );
};

export default ClubLead;
