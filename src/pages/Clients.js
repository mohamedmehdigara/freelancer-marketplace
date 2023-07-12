import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ClientCard from '../components/ClientCard';

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get('/api/clients');
        setClients(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchClients();
  }, []);

  return (
    <div>
      <h2>Clients</h2>
      {clients.map((client) => (
        <ClientCard key={client.id} client={client} />
      ))}
    </div>
  );
};

export default Clients;
