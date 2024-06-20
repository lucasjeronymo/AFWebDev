import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import Hamburguer from '../assets/freepik-export-20240613214404wWTP.jpeg';

const AddBurgerPage: React.FC = () => {
  const { darkMode } = useTheme();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Burger added:', { name, description, price, image });
    // Aqui você pode adicionar a lógica para salvar o hambúrguer
  };

  return (
    <div className={`h-screen flex flex-col items-center justify-center p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}
    style={{
      backgroundImage: `url(${Hamburguer})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className='w-full max-w-3xl bg-white p-10 rounded-2xl dark:bg-gray-900'>
        <h1 className="text-3xl font-bold mb-8">Cadastrar Hambúrguer</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Nome
            </label>
            <input
              id="name"
              type="text"
              className="shadow text-gray-900 appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="description">
              Descrição
            </label>
            <input
              id="description"
              type="text"
              className="shadow text-gray-900 appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="price">
              Preço
            </label>
            <input
              id="price"
              type="text"
              className="shadow text-gray-900 appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="image">
              URL da Imagem
            </label>
            <input
              id="image"
              type="text"
              className="shadow text-gray-900 appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBurgerPage;
