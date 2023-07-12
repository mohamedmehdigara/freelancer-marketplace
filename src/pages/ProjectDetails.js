import React from 'react';

const ProjectDetails = ({ match }) => {
  const projectData = {
    title: 'Project Title',
    description: 'Project Description',
    client: 'Client Name',
    deadline: '2023-07-31',
  };

  return (
    <div>
      <h2>Project Details</h2>
      <h3>{projectData.title}</h3>
      <p>{projectData.description}</p>
      <p>Client: {projectData.client}</p>
      <p>Deadline: {projectData.deadline}</p>
    </div>
  );
};

export default ProjectDetails;


