/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface Client {
  id: number;
  name: string;
  favoriteBurger: string;
  image: string;  
}

interface ClientCardProps {
  client: Client;
}

const ClientCard: React.FC<ClientCardProps> = ({ client }) => {
  const { darkMode } = useTheme();

  return (
    <div className={`rounded-lg max-w-sm overflow-hidden shadow-lg m-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <div className="px-6 py-4">
        <img className="w-full mb-5 h-64 object-cover" src={client.image} alt={client.name} />
        <div className="font-bold text-xl mb-2">{client.name}</div>
        <p className="text-base">Favorite Burger: {client.favoriteBurger}</p>
      </div>
    </div>
  );
};

export default ClientCard;
