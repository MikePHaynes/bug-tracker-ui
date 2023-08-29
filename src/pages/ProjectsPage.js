import { useEffect, useState } from 'react';
import { ProjectsTable } from "../components/ProjectsTable";
import { Container, Button, Row, Col } from 'react-bootstrap';
import { AddProjectModal } from "../components/AddProjectModal";
import axios from 'axios';

export const ProjectsPage = () => {
  const PROJECTS_API_BASE_URL = 'http://localhost:8080/api/projects';
  const [showAddProjectModal, setShowAddProjectModal] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(PROJECTS_API_BASE_URL);
      setProjects(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleAddProject = async (project) => {
    setShowAddProjectModal(true);
    await axios.post(PROJECTS_API_BASE_URL, project);
    setShowAddProjectModal(false);
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
        <ProjectsTable  
          projects={projects}
          api={PROJECTS_API_BASE_URL}
          fetchProjects={fetchProjects} 
        />
      </Container>

      <AddProjectModal
        isOpen={showAddProjectModal}
        onCancel={closeAddProjectModal}
      />
    </div>
  );
};