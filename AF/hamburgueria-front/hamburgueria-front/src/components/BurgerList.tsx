import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BurgerCard from './BurgerCard';

interface Hamburguer {
  _id: string;
  nome: string;
  ingredientes: string[];
  preco: number;
  estoque: number;
}

const BurgerList: React.FC = () => {
  const [burgers, setBurgers] = useState<Hamburguer[]>([]);

  useEffect(() => {
    fetchBurgers();
  }, []);

  const fetchBurgers = async () => {
    try {
      const response = await axios.get<Hamburguer[]>('http://localhost:3000/hamburgueres');
      setBurgers(response.data);
    } catch (error) {
      console.error('Erro ao buscar hamburgueres:', error);
    }
  };

  return (
    <div className="flex flex-wrap justify-center">
      {burgers.map((burger) => (
        <BurgerCard key={burger._id} burger={burger} />
      ))}
    </div>
  );
};

export default BurgerList;
