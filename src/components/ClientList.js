import React from 'react';

const ClientList = () => {
  const clients = [
    { id: 1, name: 'ABC Company', industry: 'IT', location: 'New York' },
    { id: 2, name: 'XYZ Corporation', industry: 'Finance', location: 'London' },
    { id: 3, name: 'PQR Inc.', industry: 'E-commerce', location: 'San Francisco' },
    // Add more clients as needed
  ];

  return (
    <div>
      <h2>Clients</h2>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <h3>{client.name}</h3>
            <p>Industry: {client.industry}</p>
            <p>Location: {client.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientList;
