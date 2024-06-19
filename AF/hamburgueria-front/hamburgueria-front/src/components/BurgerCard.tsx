import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface Hamburguer {
  _id: string;
  nome: string;
  ingredientes: string[];
  preco: number;
  estoque: number;
}

interface BurgerCardProps {
  burger: Hamburguer;
}

const BurgerCard: React.FC<BurgerCardProps> = ({ burger }) => {
  const { darkMode } = useTheme();

  return (
    <div className={`rounded-lg max-w-sm overflow-hidden shadow-lg m-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <img className="w-full"alt={burger.nome} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{burger.nome}</div>
        <p className="text-base">Ingredientes: {burger.ingredientes.join(', ')}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className={`inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
          R$ {burger.preco.toFixed(2)}
        </span>
        <span className={`inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
          Estoque: {burger.estoque}
        </span>
      </div>
    </div>
  );
};

export default BurgerCard;
