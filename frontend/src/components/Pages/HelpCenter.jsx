import React, { useEffect, useState } from 'react';
import Header from '../HelpCenter/Header';
import SearchSection from '../HelpCenter/SearchSection';
import FeaturesSection from '../HelpCenter/FeatureSection';
import Footer from '../Common/Footer';
import { getAllCards, createCard } from '../../services/operations/cardAPI';
import CreateCardModal from '../HelpCenter/CreateCardModal';
import { IoAddOutline } from "react-icons/io5";

function HelpCenter() {
  const [allCards, setAllCards] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchAllCards = async () => {
      const result = await getAllCards();
      if (result) {
        setAllCards(result);
      }
    };
    fetchAllCards();
  }, []);

  const handleCreateCard = async (newCard) => {
    const result = await createCard(newCard);
    if (result) {
      setAllCards([...allCards, result]); // Update the state with the new card
    }
    setShowModal(false); // Close the modal
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* <Header /> */}
      <main className='w-full'>
        <SearchSection allCards={allCards} />
        <div className='flex justify-end py-2 w-11/12'>
          <div className='flex gap-2'>
            <button
              onClick={() => setShowModal(true)}
              className="px-4 flex gap-2 py-2 items-center bg-blue-600 text-white rounded-md mt-8 mx-auto hover:scale-110"
            >
              Create Card
              <IoAddOutline className='text-black font-semibold text-xl'/>
            </button>
          </div>
        </div>
        <FeaturesSection allCards={allCards} />
      </main>
      {/* <Footer /> */}
      {showModal && (
        <CreateCardModal onClose={() => setShowModal(false)} onCreate={handleCreateCard} />
      )}
    </div>
  );
}

export default HelpCenter;
