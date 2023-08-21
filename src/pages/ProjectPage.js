import { useState } from 'react';
import { ProjectTable } from "../components/ProjectTable";
import { Container, Button, Row, Col } from 'react-bootstrap';
import { AddProjectModal } from "../components/AddProjectModal";
import axios from 'axios';

export const ProjectPage = () => {
  const API_BASE_URL = 'http://localhost:8080/api/projects';
  const [showAddProjectModal, setShowAddProjectModal] = useState(false);
  
  const handleAddProject = () => {
    setShowAddProjectModal(true);
  };

  const closeAddProjectModal = () => {
    setShowAddProjectModal(false);
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

      <AddProjectModal
       isOpen={showAddProjectModal}
       onCancel={closeAddProjectModal}
      />
    </div>
  );
};