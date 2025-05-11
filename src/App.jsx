import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "../src/pages/home"
import LandingPage from "../src/pages/landingpage"

function App() {

  return (
    <Router>
      <Routes>
         <Route path="/" element={<LandingPage />} />
         <Route path="/home" element={<HomePage />} />
    </Routes>
    </Router>
  )
}

export default App
