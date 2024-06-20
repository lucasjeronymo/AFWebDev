import React from 'react';
import BurgerCard from './BurgerCard';
import Hamburguer from "../assets/front-view-burger-stand.jpg";

const mockBurgers = [
  {
    id: 1,
    name: 'Classic Burger',
    description: 'A classic burger with cheese, lettuce, and tomato.',
    price: 8.99,
    image: Hamburguer,
  },
  {
    id: 2,
    name: 'Bacon Burger',
    description: 'A delicious burger topped with crispy bacon.',
    price: 9.99,
    image: Hamburguer,
  },
  {
    id: 3,
    name: 'Veggie Burger',
    description: 'A healthy burger with fresh veggies and hummus.',
    price: 7.99,
    image: Hamburguer,
  },
];

const BurgerList: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {mockBurgers.map((burger) => (
        <BurgerCard key={burger.id} burger={burger} />
      ))}
    </div>
  );
};

export default BurgerList;
