import React from 'react';

const FreelancerList = () => {
  const freelancers = [
    { id: 1, name: 'John Doe', skills: ['Web Development', 'React.js'] },
    { id: 2, name: 'Jane Smith', skills: ['Graphic Design', 'Illustration'] },
    { id: 3, name: 'Alex Johnson', skills: ['Mobile App Development', 'React Native'] },
    // Add more freelancers as needed
  ];

  return (
    <div>
      <h2>Freelancers</h2>
      <ul>
        {freelancers.map((freelancer) => (
          <li key={freelancer.id}>
            <h3>{freelancer.name}</h3>
            <p>Skills: {freelancer.skills.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FreelancerList;
