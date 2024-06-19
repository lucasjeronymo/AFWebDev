import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ClientCard from './ClientCard';

interface Client {
  _id: string;
  nome: string;
  hamb_id: string;
}

const ClientList: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/clientes')
      .then(response => setClients(response.data)) 
      .catch(error => console.error("Erro ao buscar clientes:", error));
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {clients.map((client) => (
        <ClientCard key={client._id} client={client} />
      ))}
    </div>
  );
};

export default ClientList;
