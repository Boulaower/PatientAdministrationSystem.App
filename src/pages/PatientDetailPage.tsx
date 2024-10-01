import React, { useState, useEffect } from 'react'; // Import React and necessary hooks for state and side effects.
import { getPatientById } from '../api/patients'; // Import API function to fetch a patient by ID.
import PatientForm from '../components/PatientForm'; // Import the PatientForm component for displaying and editing patient details.
import { useParams } from 'react-router-dom'; // Import the useParams hook for accessing route parameters.

const PatientDetailPage = () => {
  // State to store the patient data fetched from the API.
  const [patient, setPatient] = useState(null);
  // Destructure the `id` parameter from the URL using useParams.
  const { id } = useParams();

  // useEffect hook to fetch patient details when the component mounts or when the `id` changes.
  useEffect(() => {
    // Async function to fetch a single patient's details based on the ID.
    const fetchPatient = async () => {
      // Call the API to get the patient data using the extracted `id`.
      const data = await getPatientById(id as string); // Cast `id` as string for type safety.
      setPatient(data); // Update the patient state with the fetched data.
    };

    fetchPatient(); // Invoke the function to fetch patient details.
  }, [id]); // Dependency array ensures that the effect runs when `id` changes.

  return (
    <div>
      {/* Title for the patient detail page */}
      <h1>Patient Details</h1>
      {/* Conditional rendering: show PatientForm if data is loaded, otherwise show loading message */}
      {patient ? (
        // Display the PatientForm component with patient data and an onSave handler.
        <PatientForm patient={patient} onSave={() => { /* handle saving */ }} />
      ) : (
        // Show a loading message while the patient data is being fetched.
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PatientDetailPage; // Export the PatientDetailPage component for use in routing or navigation.
