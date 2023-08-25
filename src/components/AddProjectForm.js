import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const AddProjectForm = ({ onSubmit }) => {
  const schema = yup.object().shape({
    projectName: yup.string().required(),
    projectDescription: yup.string().required()
  });

  const { register, handleSubmit, formState: { errors }, } = useForm({
    resolver: yupResolver(schema)
  });
  
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FloatingLabel
        controlId="floatingInput"
        label="Project name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Project name" />
      </FloatingLabel>
      <FloatingLabel 
        controlId="floatingTextarea" 
        label="Project description"
      >
        <Form.Control 
          as="textarea"
          placeholder="Project description"
        />
      </FloatingLabel>
    </Form>
  );
};