import React, { useState, useEffect } from 'react'; // Import React, useState for state management, and useEffect for side effects.
import { getAllPatients, Patient } from '../api/patients'; // Import the getAllPatients function and Patient type from the API module.
import SearchBar from './SearchBar'; // Import the SearchBar component for searching patients.

const PatientList: React.FC = () => {
  // State to store all patients fetched from the API.
  const [patients, setPatients] = useState<Patient[]>([]);
  // State to store filtered patients based on the search query.
  const [filteredPatients, setFilteredPatients] = useState<Patient[]>([]);

  // useEffect hook to fetch all patients when the component mounts.
  useEffect(() => {
    // Function to fetch patients from the API.
    const fetchPatients = async () => {
      try {
        // Fetch data and store it in the patients array.
        const data: Patient[] = await getAllPatients();
        setPatients(data); // Set the state with all patients.
        setFilteredPatients(data); // Initially, set filtered patients to show all patients.
      } catch (error) {
        // Log any error that occurs during fetching.
        console.error('Error fetching patients:', error);
      }
    };

    // Call the function to fetch patients.
    fetchPatients();
  }, []); // Empty dependency array to ensure the fetch occurs only once when the component mounts.

  // Function to handle search and filter patients by name.
  const handleSearch = (query: string) => {
    // Convert the query to lowercase for case-insensitive search.
    const lowerCaseQuery = query.toLowerCase();
    // Filter patients whose name includes the search query.
    const filtered = patients.filter((patient) =>
      patient.name.toLowerCase().includes(lowerCaseQuery)
    );
    // Update the filteredPatients state to reflect search results.
    setFilteredPatients(filtered);
  };

  return (
    <div>
      {/* Heading for the patient list */}
      <h2>Patient List</h2>
      {/* Search bar component for searching patients */}
      <SearchBar onSearch={handleSearch} />
      {/* Button to reset the filtered list and display all patients */}
      <button onClick={() => setFilteredPatients(patients)}>Retrieve All Patients</button>
      {/* Display a list of filtered patients */}
      <ul>
        {filteredPatients.map((patient) => (
          <li key={patient.id}>
            {/* Display patient's name and formatted visit date */}
            {patient.name} - Visit Date: {new Date(patient.visitDate).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList; // Export the component for use in other parts of the application.
