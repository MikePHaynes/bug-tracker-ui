import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const EditModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Edit Project</Modal.Title>
    </Modal.Header>
    <Modal.Body>Form Here</Modal.Body>
    <Modal.Footer>
      <Button variant="danger">
        Close
      </Button>
      <Button variant="primary">
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
};