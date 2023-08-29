import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const AddProjectModal = ({ onClose, onAdd }) => {
  const schema = yup.object().shape({
    projectName: yup.string().required('Project name is required'),
    projectDescription: yup.string().required('Project description is required'),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (project) => {
    onAdd(project);
    onClose();
  };

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <FloatingLabel
              controlId="floatingInput"
              label="Project name"
              className="mb-3"
            >
              <Form.Control 
                type="text"
                placeholder="Project name"
                {...register('projectName')}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Project description"
            >
              <Form.Control
                as="textarea"
                placeholder="Project description"
                {...register('projectDescription')} 
              />
            </FloatingLabel>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" type="submit" onClick={handleSubmit(onSubmit)}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};