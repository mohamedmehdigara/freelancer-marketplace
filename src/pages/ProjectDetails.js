import React from 'react';

const ProjectDetails = ({ match }) => {
  const projectData = {
    title: 'Project Title',
    description: 'Project Description',
    client: 'Client Name',
    deadline: '2023-07-31',
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Project Details</h2>
      <div className="bg-white rounded shadow p-4">
        <h3 className="text-lg font-semibold mb-2">{projectData.title}</h3>
        <p className="mb-2">{projectData.description}</p>
        <p className="text-gray-600">Client: {projectData.client}</p>
        <p className="text-gray-600">Deadline: {projectData.deadline}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;



