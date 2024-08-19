import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function SearchSection({ allCards }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCards, setFilteredCards] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim()) {
      const results = allCards.filter(card =>
        card.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCards(results);
    } else {
      setFilteredCards([]);
    }
  };

  return (
    <div className="flex flex-col gap-2 items-center w-full bg-[#e6e6f7] py-8 pt-20">
      <h1 className="text-5xl font-semibold mb-6">How can we help?</h1>
      <div className="relative mb-16 w-full max-w-lg">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-4 border rounded-md"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="absolute right-4 top-3.5">
          <FaArrowRight className="w-5 h-5" />
        </button>
        {filteredCards.length > 0 && (
          <ul className="absolute mt-2 bg-white border rounded-md w-full max-h-60 overflow-y-auto">
            {filteredCards.map((card, index) => (
              <li key={index} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                <Link to={`/cards/${card.title}`}>
                  {card.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SearchSection;
