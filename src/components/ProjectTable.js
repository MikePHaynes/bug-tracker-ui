import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { faEdit, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EditModal } from './EditModal';
import { DeleteModal } from './DeleteModal';
import Button from 'react-bootstrap/Button';

export const ProjectTable = () => {
  const API_BASE_URL = 'http://localhost:8080/api/projects';
  const [projects, setProjects] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [showProjects, setShowProjects] = useState(true);
  const [showTickets, setShowTickets] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);

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

  const openEditModal = (projectId) => {
    setSelectedProjectId(projectId);
    setEditModalIsOpen(true);
  };

  const closeEditModal = () => {
    setSelectedProjectId(null);
    setEditModalIsOpen(false);
  };

  const openDeleteModal = (projectId) => {
    setSelectedProjectId(projectId);
    setDeleteModalIsOpen(true);
  };

  const closeDeleteModal = () => {
    setSelectedProjectId(null);
    setDeleteModalIsOpen(false);
  };

  const deleteProject = async () => {
    try {
      await axios.delete(`${API_BASE_URL}/${selectedProjectId}`);
      setDeleteModalIsOpen(false);
      setSelectedProjectId(null);
      fetchProjects();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {showProjects && <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Details</th>
            <th>Tickets</th>
            <th>Creation Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <tr key={project.id}>
              <td>{project.projectName}</td>
              <td><Button variant="link">View Details</Button></td>
              <td><Button onClick={() => fetchProjectTickets(project)} variant="link">View Tickets</Button></td>
              <td>{project.creationDate}</td>
              <td>
                <Button><FontAwesomeIcon icon={faEdit} onClick={() => openEditModal(project.id)}/></Button>
                <Button variant="danger"><FontAwesomeIcon icon={faTrashCan} onClick={() => openDeleteModal(project.id)}/></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>}
      {showTickets && <Table striped bordered hover>
      <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Severity</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map(ticket => (
            <tr key={ticket.id}>
              <td>{ticket.ticketName}</td>
              <td>{ticket.ticketDescription}</td>
              <td>{ticket.severityLevel}</td>
              <td>{ticket.createdAt}</td>
              <td>
                <button><FontAwesomeIcon icon={faEdit}/></button>
                <button><FontAwesomeIcon icon={faTrashCan}/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>}

      <EditModal
        isOpen={editModalIsOpen}
        projectId={selectedProjectId}
        onCancel={closeEditModal}
      />

      <DeleteModal
        isOpen={deleteModalIsOpen}
        projectId={selectedProjectId}
        onCancel={closeDeleteModal}
        onConfirm={deleteProject}
      />
    </div>
  );
};