import React, { useState } from 'react';

interface PatientFormValues {
  name: string;
  reasonForVisit: string;
}

interface Patient {
  id: string;
  name: string;
  visitDate: Date;
  reasonForVisit: string;
}

const PatientForm = () => {
  const [formValues, setFormValues] = useState<PatientFormValues>({
    name: '',
    reasonForVisit: '',
  });

  // Create a patient object
  const patient: Patient = {
    id: 'some-id', // Use a unique ID or UUID
    name: formValues.name,
    visitDate: new Date(), // Set the correct date
    reasonForVisit: formValues.reasonForVisit,
  };

  // Use the patient variable in your handleSubmit function
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Use patient variable here
    console.log(patient);
    // Submit to API or process the patient object
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formValues.name}
        onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
        placeholder="Name"
      />
      <input
        type="text"
        value={formValues.reasonForVisit}
        onChange={(e) =>
          setFormValues({ ...formValues, reasonForVisit: e.target.value })
        }
        placeholder="Reason for Visit"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PatientForm;
