import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export const EditProjectModal = ({ project, onClose, onSave }) => {
  const [updatedProject, setUpdatedProject] = useState(project);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProject((prevProject) => ({
      ...prevProject,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(updatedProject);
    onClose();
  };
  
  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Project Name</Form.Label>
            <Form.Control
              type="text"
              name="projectName"
              value={updatedProject.projectName}
              onChange={handleChange} 
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Project Description</Form.Label>
            <Form.Control
              type="text"
              name="projectDescription"
              value={updatedProject.projectDescription}
              onChange={handleChange} 
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );  
};