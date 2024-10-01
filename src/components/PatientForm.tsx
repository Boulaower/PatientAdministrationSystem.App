import React, { useState } from 'react'; // Import React and the useState hook for managing state.

interface PatientFormValues {
  name: string; // The name of the patient.
  reasonForVisit: string; // The reason for the patient's visit.
}

interface Patient {
  id: string; // A unique identifier for the patient.
  name: string; // The name of the patient.
  visitDate: Date; // The date of the visit.
  reasonForVisit: string; // The reason for the patient's visit.
}

const PatientForm = () => {
  // Initialize form state with name and reasonForVisit as empty strings.
  const [formValues, setFormValues] = useState<PatientFormValues>({
    name: '',
    reasonForVisit: '',
  });

  // Create a patient object that includes an ID, name, current date, and reason for visit.
  const patient: Patient = {
    id: 'some-id', // A placeholder for a unique ID; replace this with an actual ID or UUID.
    name: formValues.name, // Use the name value from form state.
    visitDate: new Date(), // Set the current date for the visit.
    reasonForVisit: formValues.reasonForVisit, // Use the reason for visit from form state.
  };

  // Function to handle form submission.
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission behavior.

    // Log the patient object to the console for debugging or processing.
    console.log(patient);
    // You can add functionality here to submit the patient object to an API or perform other actions.
  };

  return (
    // The form with a submit handler.
    <form onSubmit={handleSubmit}>
      {/* Input for the patient's name */}
      <input
        type="text"
        value={formValues.name}
        onChange={(e) => setFormValues({ ...formValues, name: e.target.value })} // Update the name value in form state on change.
        placeholder="Name" // Placeholder text for the input.
      />
      {/* Input for the reason for the patient's visit */}
      <input
        type="text"
        value={formValues.reasonForVisit}
        onChange={(e) =>
          setFormValues({ ...formValues, reasonForVisit: e.target.value }) // Update the reasonForVisit value in form state on change.
        }
        placeholder="Reason for Visit" // Placeholder text for the input.
      />
      {/* Submit button for the form */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default PatientForm; // Export the component for use in other parts of the application.
