import React, { useState, useEffect } from 'react';
import { getAllPatients, Patient } from '../api/patients';
import SearchBar from './SearchBar';

const PatientList: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [filteredPatients, setFilteredPatients] = useState<Patient[]>([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const data: Patient[] = await getAllPatients();
        setPatients(data);
        setFilteredPatients(data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  const handleSearch = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = patients.filter((patient) =>
      patient.name.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredPatients(filtered);
  };

  return (
    <div>
      <h2>Patient List</h2>
      <SearchBar onSearch={handleSearch} />
      <button onClick={() => setFilteredPatients(patients)}>Retrieve All Patients</button>
      <ul>
        {filteredPatients.map((patient) => (
          <li key={patient.id}>
            {patient.name} - Visit Date: {new Date(patient.visitDate).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
