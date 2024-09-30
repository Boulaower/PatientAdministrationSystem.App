import React, { useState, useEffect } from 'react';
import { getPatientById } from '../api/patients';
import PatientForm from '../components/PatientForm';
import { useParams } from 'react-router-dom';

const PatientDetailPage = () => {
  const [patient, setPatient] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPatient = async () => {
      const data = await getPatientById(id as string);
      setPatient(data);
    };

    fetchPatient();
  }, [id]);

  return (
    <div>
      <h1>Patient Details</h1>
      {patient ? (
        <PatientForm patient={patient} onSave={() => { /* handle saving */ }} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PatientDetailPage;
