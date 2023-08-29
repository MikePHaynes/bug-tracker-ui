import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { faEdit, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EditProjectModal } from './EditProjectModal';
import { DeleteProjectModal } from './DeleteProjectModal';
import Button from 'react-bootstrap/Button';

export const ProjectsTable = ({ projects, api, fetchProjects }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleEditModalOpen = (project) => {
    setSelectedProject(project);
    setShowEditModal(true);
  };

  const handleEditModalClose = () => {
    setShowEditModal(false);
    setSelectedProject(null);
  };

  const handleDeleteModalOpen = (project) => {
    setSelectedProject(project);
    setShowDeleteModal(true);
  };

  const handleDeleteModalClose = () => {
    setShowDeleteModal(false);
    setSelectedProject(null);
  };

  const handleSaveProject = async (updatedProject) => {
    try {
      await axios.put(`${api}/${updatedProject.id}`, updatedProject);
      fetchProjects();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteProject = async () => {
    try {
      await axios.delete(`${api}/${selectedProject.id}`);
      fetchProjects();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Table striped bordered hover>
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
              <td><Button variant="link">View Tickets</Button></td>
              <td>{project.creationDate}</td>
              <td>
                <Button><FontAwesomeIcon icon={faEdit} onClick={() => handleEditModalOpen(project)}/></Button>
                <Button variant="danger"><FontAwesomeIcon icon={faTrashCan} onClick={() => handleDeleteModalOpen(project)}/></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {showEditModal && (
        <EditProjectModal
          project={selectedProject}
          onClose={handleEditModalClose}
          onSave={handleSaveProject}
        />
      )}

      {showDeleteModal && (
        <DeleteProjectModal
          project={selectedProject}
          onClose={handleDeleteModalClose}
          onDelete={handleDeleteProject}
        />
      )}
    </div>
  );
};