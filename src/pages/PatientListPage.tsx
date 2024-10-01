import React, { useState } from 'react'; // Import React and useState hook for state management.
import { fetchSearchedPatients } from '../services/patientSearchService'; // Import function to fetch patients based on search query.
import PatientList from '../components/PatientList'; // Import component to display a list of patients.
import SearchBar from '../components/SearchBar'; // Import component for search input.

// Define the type for a Patient object with required properties.
type PatientType = {
  id: string; // Unique identifier for the patient.
  name: string; // Name of the patient.
  age: number; // Age of the patient.
  // Add any other relevant properties here, if needed.
};

const PatientListPage: React.FC = () => {
  // State to hold an array of PatientType objects.
  const [patients, setPatients] = useState<PatientType[]>([]);

  // Function to handle search and fetch patients based on the query.
  const handleSearch = async (query: string) => {
    // Fetch results by calling the search service with the query string.
    const results = await fetchSearchedPatients(query);
    // Update the state with the fetched patients' results.
    setPatients(results);
  };

  return (
    <div>
      {/* Main heading for the patients list page */}
      <h1>Patients</h1>
      {/* Search bar component to input search queries, passing handleSearch as a prop */}
      <SearchBar onSearch={handleSearch} />
      {/* Patient list component to display the array of patients, passing the patients state as a prop */}
      <PatientList patients={patients} />
    </div>
  );
};

export default PatientListPage; // Export the PatientListPage component for use in routing or as part of the application.
