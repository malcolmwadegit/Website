import Home from './pages/Home/Home';
import ContactPage from './pages/Contact/Contact';
import './styles/Global.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <div className="app-container">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-page" element={<ContactPage />} />
      </Routes>
    </Router>

    
    
    </div>
    </>
  );
}

export default App;
