import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCardDetails } from '../../services/operations/cardAPI';

const CardDetails = () => {
  const { title } = useParams(); // Get the title from the URL
  const [card, setCard] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const result = await fetchCardDetails(title);
      if (result) {
        setCard(result);
      }
    };
    fetchDetails();
  }, [title]);

  if (!card) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{card.title}</h1>
        <p className="text-lg text-gray-600 mb-6">{card.description}</p>
        {/* Add more details below if needed */}
        <div className="flex flex-col gap-4">
          <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
            <h2 className="text-xl font-semibold text-gray-700">Additional Info</h2>
            <p className="text-gray-500 mt-2">Here you can add more details about the card.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
