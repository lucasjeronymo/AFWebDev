import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Hamburguer from '../assets/freepik-export-20240613214404wWTP.jpeg';

const HomePage: React.FC = () => {
  const { darkMode } = useTheme();

  return (
    <div
    className={`relative flex flex-col items-center justify-center h-screen overflow-hidden ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}
    style={{
      backgroundImage: `url(${Hamburguer})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
      <h1 className="text-5xl font-bold mb-8">Bem-vindo à Hamburgueria</h1>
      <div className="space-x-4">
        <Link to="/burgers" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Ver Hambúrgueres
        </Link>
        <Link to="/clients" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Ver Clientes
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
