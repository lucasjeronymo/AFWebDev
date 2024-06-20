import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface Burger {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface BurgerCardProps {
  burger: Burger;
}

const BurgerCard: React.FC<BurgerCardProps> = ({ burger }) => {
  const { darkMode } = useTheme();

  return (
    <div className={`rounded-lg max-w-sm overflow-hidden shadow-lg m-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <img className="w-full" src={burger.image} alt={burger.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{burger.name}</div>
        <p className="text-base">{burger.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className={`inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
          ${burger.price}
        </span>
      </div>
    </div>
  );
};

export default BurgerCard;
