 
import './App.css';
import Navbar from './components/Navbar';
import { Router } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
        </Routes>
      </main> */}
    </div>
  </Router>
  );
}

export default App;
