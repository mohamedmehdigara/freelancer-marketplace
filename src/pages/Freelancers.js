import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FreelancerCard from '../components/FreelancerCard';

const Freelancers = () => {
  const [freelancers, setFreelancers] = useState([]);

  useEffect(() => {
    const fetchFreelancers = async () => {
      try {
        const response = await axios.get('/api/freelancers');
        setFreelancers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFreelancers();
  }, []);

  return (
    <div>
      <h2>Freelancers</h2>
      {freelancers.map((freelancer) => (
        <FreelancerCard key={freelancer.id} freelancer={freelancer} />
      ))}
    </div>
  );
};

export default Freelancers;
