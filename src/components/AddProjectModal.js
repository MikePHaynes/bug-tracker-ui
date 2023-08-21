import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AddProjectForm } from './AddProjectForm';

export const AddProjectModal = ({ isOpen, onCancel }) => {
  return (
    <Modal show={isOpen} onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Add Project</Modal.Title>
      </Modal.Header>
      <Modal.Body><AddProjectForm /></Modal.Body>
      <Modal.Footer>
        <Button variant="primary">
          Add
        </Button>
        <Button variant="danger" onClick={onCancel}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};