import React, { useState } from 'react'; 
import { fetchSearchedPatients } from '../services/patientSearchService';
import PatientList from '../components/PatientList';
import SearchBar from '../components/SearchBar';

// Define the type for a Patient object
type PatientType = {
  id: string;
  name: string;
  age: number;
  // Add any other relevant properties here
};

const PatientListPage: React.FC = () => {
  // State to hold patients array
  const [patients, setPatients] = useState<PatientType[]>([]);

  // Handle search function to fetch patients based on the query
  const handleSearch = async (query: string) => {
    const results = await fetchSearchedPatients(query);
    setPatients(results); // Update state with fetched patients
  };

  return (
    <div>
      <h1>Patients</h1>
      {/* Pass handleSearch as a prop to SearchBar */}
      <SearchBar onSearch={handleSearch} />
      {/* Pass patients array as a prop to PatientList */}
      <PatientList patients={patients} />
    </div>
  );
};

export default PatientListPage;
