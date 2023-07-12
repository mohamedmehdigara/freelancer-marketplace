import React from 'react';

const FreelancerCard = ({ freelancer }) => {
  return (
    <div className="freelancer-card">
      <h3>{freelancer.name}</h3>
      <p>{freelancer.skills.join(', ')}</p>
      <p>{freelancer.description}</p>
    </div>
  );
};

export default FreelancerCard;
