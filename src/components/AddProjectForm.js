import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export const AddProjectForm = () => {
  return (
    <div>
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
    </div>
  );
};