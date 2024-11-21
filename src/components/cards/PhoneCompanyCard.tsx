// components/PhoneCompanyCard.js
import React from "react";
import { NewContainer } from "@/components/container/NewContainer";

interface PhoneCompanyCardProps {
  companySearch: string;
  onSelect: (company: { id: number; name: string; icon: string }) => void;
}

const PhoneCompanyCard: React.FC<PhoneCompanyCardProps> = ({
  companySearch,
  onSelect,
}) => {
  const phoneCompanies = [
    { id: 1, name: "Telcel", icon: "📱" },
    { id: 2, name: "Movistar", icon: "📱" },
    { id: 3, name: "AT&T", icon: "📱" },
    { id: 4, name: "Unefon", icon: "📱" },
    { id: 5, name: "Weex", icon: "📱" },
    { id: 6, name: "Virgin Mobile", icon: "📱" },
  ];

  const filteredCompanies = phoneCompanies.filter((company) =>
    company.name.toLowerCase().includes(companySearch.toLowerCase())
  );

  return (
    <div>
      {filteredCompanies.map((company) => (
        <NewContainer key={company.id} onClick={() => onSelect(company)}>
          <div className="text-3xl mb-2 text-pink-500 mr-16">
            {company.icon}
          </div>
          <h2 className="text-lg font-semibold">{company.name}</h2>
        </NewContainer>
      ))}
    </div>
  );
};

export default PhoneCompanyCard;
