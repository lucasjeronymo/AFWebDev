import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <nav className={`p-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-lg`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/">Hamburgueria</Link>
        </div>
        <div className="space-x-4">
          <Link to="/burgers" className="hover:underline">Hambúrgueres</Link>
          <Link to="/clients" className="hover:underline">Clientes</Link>
          <Link to="/add-client" className="hover:underline">Cadastrar Cliente</Link>
          <Link to="/add-burger" className="hover:underline">Cadastrar Hambúrguer</Link>
        </div>
        <button onClick={toggleDarkMode} className="p-2 rounded bg-blue-500 text-white ml-4">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
