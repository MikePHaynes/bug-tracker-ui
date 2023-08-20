import { ProjectTable } from "../components/ProjectTable";
import { Container, Button, Row, Col } from 'react-bootstrap';

export const ProjectPage = () => {
  return (
    <div>
      <Container className="mt-3">
        <Row>
          <Col xs={6}><h2>Projects</h2></Col>
          <Col xs={6} className="text-right">
            <Button variant="primary">Add Project</Button>
          </Col>
        </Row>
        <hr />
        <ProjectTable />
      </Container>
    </div>
  );
};