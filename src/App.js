import Home from './pages/Home/Home';
import ContactPage from './pages/Contact/Contact';
import './styles/Global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename="/website">
      <div className="app-container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact-page" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
