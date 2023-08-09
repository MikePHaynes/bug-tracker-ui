import { useEffect, useState } from 'react';
import axios from 'axios';

export const ProjectsTable = () => {
  const API_BASE_URL = 'http://localhost:8080/api/projects';
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(API_BASE_URL);
      setProjects(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <tr key={project.id}>
              <td>{project.projectName}</td>
              <td>{project.projectDescription}</td>
              <td>{project.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};