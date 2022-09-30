import React from "react";
import ClubLead, { ClubLeadType } from "./clubLead";

const ClubLeads = ({ clubLeads }: { clubLeads: ClubLeadType[] }) => {
  return (
    <div className="mt-8 flex w-full flex-col items-center text-gray-700">
      <h2 className="mb-6 text-gray-100">Club Leads</h2>
      <div className="flex w-full items-start justify-evenly">
        {clubLeads.map((clubLead) => (
          <ClubLead key={clubLead.name} clubLead={clubLead} />
        ))}
      </div>
    </div>
  );
};

export default ClubLeads;
