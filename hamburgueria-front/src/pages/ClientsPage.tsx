import React from 'react';
import ClientList from '../components/ClientList';
import { useTheme } from '../context/ThemeContext';
import Hamburguer from '../assets/freepik-export-20240613214404wWTP.jpeg';

const ClientsPage: React.FC = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}  style={{
      backgroundImage: `url(${Hamburguer})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <h1 className="text-3xl font-bold mb-8 text-white">Clientes</h1>
      <div className='w-full flex items-center justify-center h-full'>
      <ClientList />
      </div>
    </div>
  );
};

export default ClientsPage;
