import React from 'react';

const ClientCard = ({ client }) => {
  return (
    <div className="client-card">
      <h3>{client.name}</h3>
      <p>{client.company}</p>
      <p>{client.description}</p>
    </div>
  );
};

export default ClientCard;
