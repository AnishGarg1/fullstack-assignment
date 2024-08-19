import React from 'react'
import { useNavigate } from 'react-router-dom';

function FeaturesSection({ allCards }) {
  const navigate = useNavigate();

  const handleCardClick = (title) => {
    navigate(`${title}`);
  };

  return (
    <div className='w-full mt-10 mb-16'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl mx-auto">
        {allCards.map((card, index) => (
          <div 
            key={index} 
            className="flex items-start space-x-4 border bg-gray-500 bg-opacity-10 rounded-lg px-5 py-4 cursor-pointer"
            onClick={() => handleCardClick(card.link)} // Navigate to card details on click
          >
            <div className='flex flex-col gap-2'>
              <h2 className="font-bold text-gray-600">{card.title}</h2>
              <p className="text-muted-foreground">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturesSection;
