import { ProjectTable } from "../components/ProjectTable";
import { Container, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';

export const ProjectPage = () => {
  const API_BASE_URL = 'http://localhost:8080/api/projects';
  
  const handleAddProject = () => {
    
  };
  
  return (
    <div>
      <Container className="mt-3">
        <Row>
          <Col xs={6}><h2>Projects</h2></Col>
          <Col xs={6} className="text-right">
            <Button variant="primary" onClick={handleAddProject}>Add Project</Button>
          </Col>
        </Row>
        <hr />
        <ProjectTable />
      </Container>
    </div>
  );
};