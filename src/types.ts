// src/types.ts

// Consolidate the Patient interface here
export interface Patient {
  id: string;
  name: string;
  visitDate: string; // If you're using `Date` objects, this can be `Date`
  reasonForVisit: string;
  // Add any other necessary properties
}
