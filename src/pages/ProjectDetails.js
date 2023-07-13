import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ProjectDetails = () => {
  const location = useLocation();
  const projectId = location.pathname.split('/')[2];

  const [projectData, setProjectData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating API call to fetch project details based on projectId
    fetchProjectDetails(projectId);
  }, [projectId]);

  const fetchProjectDetails = (projectId) => {
    // Simulating API call to fetch project details
    setTimeout(() => {
      const fakeProjectData = {
        id: projectId,
        title: 'Project Title',
        description: 'Project Description',
        client: 'Client Name',
        deadline: '2023-07-31',
      };
      setProjectData(fakeProjectData);
      setIsLoading(false);
    }, 1000);
  };

  const handleDeleteProject = () => {
    // Simulating API call to delete the project
    setTimeout(() => {
      alert(`Project with ID ${projectData.id} deleted successfully!`);
    }, 1000);
  };

  if (isLoading) {
    return <div>Loading project details...</div>;
  }

  if (!projectData) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Project Details</h2>
      <div className="bg-white rounded shadow p-4">
        <h3 className="text-lg font-semibold mb-2">{projectData.title}</h3>
        <p className="mb-2">{projectData.description}</p>
        <p className="text-gray-600">Client: {projectData.client}</p>
        <p className="text-gray-600">Deadline: {projectData.deadline}</p>
        <button className="bg-red-500 text-white px-4 py-2 mt-4" onClick={handleDeleteProject}>
          Delete Project
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;
