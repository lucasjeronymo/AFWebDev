import React from 'react';

interface Client {
  _id: string;
  nome: string;
  hamb_id: string;
}

interface ClientCardProps {
  client: Client;
}

const ClientCard: React.FC<ClientCardProps> = ({ client }) => {
  return (
    <div className="rounded-lg max-w-sm overflow-hidden shadow-lg m-4 bg-white text-gray-800">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{client.nome}</div>
        <p className="text-base">Favorite Burger: {client.hamb_id}</p>
      </div>
    </div>
  );
};

export default ClientCard;


