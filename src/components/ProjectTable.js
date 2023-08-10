import { useEffect, useState } from 'react';
import axios from 'axios';

export const ProjectTable = () => {
  const API_BASE_URL = 'http://localhost:8080/api/projects';
  const [projects, setProjects] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [showProjects, setShowProjects] = useState(true);
  const [showTickets, setShowTickets] = useState(false);

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

  const fetchProjectTickets = async (project) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${project.id}/tickets`);
      setTickets(response.data);
      handleViewTickets();
    } catch (error) {
      console.error(error);
    }
  };

  const handleViewTickets = () => {
    setShowProjects(false);
    setShowTickets(true);
  };

  return (
    <div>
      {showProjects && <table className="table-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Created At</th>
            <th>View</th>
            <th>Tickets</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <tr key={project.id}>
              <td>{project.projectName}</td>
              <td>{project.projectDescription}</td>
              <td>{project.createdAt}</td>
              <td><button>View</button></td>
              <td><button onClick={() => fetchProjectTickets(project)}>Tickets</button></td>
              <td><button>Edit</button></td>
              <td><button>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>}
      {showTickets && <table className="table-auto">
      <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Severity</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map(ticket => (
            <tr key={ticket.id}>
              <td>{ticket.ticketName}</td>
              <td>{ticket.ticketDescription}</td>
              <td>{ticket.severityLevel}</td>
              <td>{ticket.createdAt}</td>
            </tr>
          ))}
        </tbody>
        </table>}
    </div>
  );
};