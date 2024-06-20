import React from 'react';
import ClientCard from './ClientCard';
import User from "../assets/60111.jpg";

const mockClients = [
  {
    id: 1,
    name: 'John Doe',
    favoriteBurger: 'Classic Burger',
    image: User,
  },
  {
    id: 2,
    name: 'Jane Smith',
    favoriteBurger: 'Bacon Burger',
    image: User,
  },
  {
    id: 3,
    name: 'Alice Johnson',
    favoriteBurger: 'Veggie Burger',
    image: User,
  },
];

const ClientList: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {mockClients.map((client) => (
        <ClientCard key={client.id} client={client} />
      ))}
    </div>
  );
};

export default ClientList;
