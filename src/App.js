import Home from './pages/Home/Home';
import ContactPage from './pages/Contact/Contact';
import './styles/Global.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="app-container">
      <Router basename="/website">
        <Routes>
          <Route path="/website" element={<Home />} />
          <Route path="/website/contact-page" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
