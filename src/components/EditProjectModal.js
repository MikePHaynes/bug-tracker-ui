import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const EditProjectModal = ({ project, onClose, onSave }) => {
  const schema = yup.object().shape({
    projectName: yup.string().required('Project name is required'),
    projectDescription: yup.string().required('Project description is required'),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      id: project.id,
      projectName: project.projectName,
      projectDescription: project.projectDescription,
      tickets: project.tickets,
      creationDate: project.creationDate,
    },
  });

  const onSubmit = (updatedProject) => {
    onSave(updatedProject);
    onClose();
  };
  
  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Project Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Project name"
              {...register('projectName')} 
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Project Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Project description"
              {...register('projectDescription')} 
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" type="submit" onClick={handleSubmit(onSubmit)}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );  
};