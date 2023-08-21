import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const AddProjectModal = () => {
  return (
    <Modal>
      <Modal.Header closeButton>
        <Modal.Title>Add Project</Modal.Title>
      </Modal.Header>
      <Modal.Body>Form Here</Modal.Body>
      <Modal.Footer>
        <Button variant="primary">
          Add
        </Button>
        <Button variant="danger">
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};