import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';
import { HomePage } from './pages/HomePage';
import { ProjectPage } from './pages/ProjectPage';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
