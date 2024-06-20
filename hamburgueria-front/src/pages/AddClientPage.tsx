import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import Hamburguer from '../assets/freepik-export-20240613214404wWTP.jpeg';

const AddClientPage: React.FC = () => {
  const { darkMode } = useTheme();
  const [name, setName] = useState('');
  const [favoriteBurger, setFavoriteBurger] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Client added:', { name, favoriteBurger });
  };

  return (
    <div className={`h-screen flex flex-col items-center justify-center p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}
    style={{
      backgroundImage: `url(${Hamburguer})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className='w-full max-w-3xl bg-white p-10 rounded-2xl dark:bg-gray-900 '>
        <h1 className="text-3xl font-bold mb-8">Cadastrar Cliente</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Nome
            </label>
            <input
              id="name"
              type="text"
              className="shadow appearance-none border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-900"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="favoriteBurger">
              Hambúrguer Favorito
            </label>
            <select
              id="favoriteBurger"
              className="shadow appearance-none border text-gray-900 rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              value={favoriteBurger}
              onChange={(e) => setFavoriteBurger(e.target.value)}
            >
              <option value="X-Bacon">X-Bacon</option>
              <option value="X-Salada">X-Salada</option>
              <option value="X-Egg">X-Egg</option>
              <option value="X-Tudo">X-Tudo</option>
            </select>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddClientPage;
