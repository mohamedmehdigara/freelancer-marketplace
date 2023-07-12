import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const ClientCard = ({ client }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate.push(`/clients/${client.id}`); // Replace with the appropriate client profile route
  };

  return (
    <div className="client-card">
    <h3>{client.name}</h3>
    <p>{client.company}</p>
    <p>{client.description}</p>
    <p>Location: {client.location}</p>
    <p>Projects: {client.projects}</p>
  </div>
  );
};

export default ClientCard;

