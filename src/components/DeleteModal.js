import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const DeleteModal = ({ isOpen, projectId, onCancel, onConfirm }) => {
  return (
    <Modal show={isOpen} onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Project</Modal.Title>
      </Modal.Header>
      <Modal.Body>{projectId}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onCancel}>
          Close
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );  
};