import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal';

export const AddProjectModal = ({ onClose, onAdd }) => {
  const [newProject, setNewProject] = useState({
    projectName: '',
    projectDescription: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prevProject) => ({
      ...prevProject,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    onAdd(newProject);
    onClose();
  };

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <FloatingLabel
              controlId="floatingInput"
              label="Project name"
              className="mb-3"
            >
              <Form.Control 
                type="text"
                name="projectName"
                value={newProject.projectName}
                onChange={handleChange} 
                placeholder="Project name"
                required 
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Project description"
            >
              <Form.Control
                as="textarea"
                name="projectDescription"
                value={newProject.projectDescription}
                onChange={handleChange}
                placeholder="Project description"
                style={{ height: '100px' }}
                required 
              />
            </FloatingLabel>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleAdd}>
          Add
        </Button>
        <Button variant="danger" onClick={onClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};