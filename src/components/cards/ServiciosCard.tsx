// components/ServiceCard.js
import React from 'react';

const ServiciosCard = ({ id, name, icon, onSelect }) => {
    return (
        <div
            key={id}
            onClick={onSelect}
            className="flex flex-col items-center justify-center w-full border-secondary border-4 px-5 py-5 rounded-lg text-xl background-container mt-2 cursor-pointer"
        >
            <div className="text-3xl mb-2 text-pink-500">{icon}</div>
            <h2 className="text-white font-semibold text-lg">{name}</h2>
        </div>
    );
};

export default ServiciosCard;
