import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PatientList from './components/PatientList';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-800 p-4">
        {/* Application Header */}
        <header className="bg-blue-600 text-white text-center p-4 rounded-lg shadow-md mb-4">
          <h1 className="text-3xl font-bold">Patient Administration System</h1>
        </header>

        {/* Main Content */}
        <main className="container mx-auto bg-white p-6 rounded-lg shadow-lg">
          <Routes>
            <Route path="/" element={<PatientList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
