// components/CompanyCard.js
import React from 'react';
import { NewContainer } from '@/components/container/NewContainer';

const CompanyCard = ({ serviceName, companySearch, onSelect }) => {
    const companies = [
        { id: 1, name: 'Telmex', service: 'Internet', icon: '🌐' },
        { id: 2, name: 'Izzi', service: 'Internet', icon: '🌐' },
        { id: 3, name: 'Megacable', service: 'Internet', icon: '🌐' },
        { id: 4, name: 'Totalplay', service: 'Internet', icon: '🌐' },
        { id: 5, name: 'Axtel', service: 'Internet', icon: '🌐' },

        { id: 1, name: 'SAPAL', service: 'Agua', icon: '💧' },
        { id: 2, name: 'CAEM', service: 'Agua', icon: '💧' },
        { id: 3, name: 'SAPI', service: 'Agua', icon: '💧' },
        { id: 4, name: 'SIDUE', service: 'Agua', icon: '💧' },
        { id: 5, name: 'SIMAPAG', service: 'Agua', icon: '💧' },
        { id: 6, name: 'OOMAPAS', service: 'Agua', icon: '💧' },
        { id: 7, name: 'Aguas de Saltillo', service: 'Agua', icon: '💧' },

        { id: 1, name: 'CFE', service: 'Luz', icon: '💡' },

        { id: 1, name: 'Pemex', service: 'Gas', icon: '🔥' },
        { id: 2, name: 'Gas Natural Fenosa', service: 'Gas', icon: '🔥' },
        { id: 3, name: 'Grupo Zeta Gas', service: 'Gas', icon: '🔥' },
        { id: 4, name: 'Gas del Norte', service: 'Gas', icon: '🔥' },
        { id: 5, name: 'Gas de Monterrey', service: 'Gas', icon: '🔥' },
        { id: 6, name: 'Naturgy', service: 'Gas', icon: '🔥' },
        { id: 7, name: 'Gas Oriente', service: 'Gas', icon: '🔥' },
    ];

    const filteredCompanies = companies.filter(
        (company) =>
            company.name.toLowerCase().includes(companySearch.toLowerCase()) &&
            company.service === serviceName
    );

    return (
        <div>
            {filteredCompanies.map((company) => (
                <NewContainer
                    key={company.id}
                    onClick={() => onSelect(company)}
                >
                    <div className="text-3xl mb-2 text-pink-500 mr-16">{company.icon}</div>
                    <h2 className="text-lg font-semibold">{company.name}</h2>
                </NewContainer>
            ))}
        </div>
    );
};

export default CompanyCard;
