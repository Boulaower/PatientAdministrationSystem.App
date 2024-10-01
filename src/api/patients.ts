import apiClient from './apiClient'; // Import the API client for making HTTP requests.
import { Patient } from '../types';  // Import the Patient type definition for type checking and intellisense.

// Function to retrieve all patients from the API.
export const getAllPatients = async (): Promise<Patient[]> => {
  // Make a GET request to the '/patients' endpoint.
  const response = await apiClient.get('/patients');
  // Return the data received from the response, which should be a list of Patient objects.
  return response.data;
};

// Function to retrieve a specific patient by their unique ID.
export const getPatientById = async (id: string): Promise<Patient> => {
  // Make a GET request to the '/patients/{id}' endpoint, substituting in the provided patient ID.
  const response = await apiClient.get(`/patients/${id}`);
  // Return the data received from the response, which should be a single Patient object.
  return response.data;
};

// Function to search for patients by their name.
export const searchPatientsByName = async (name: string): Promise<Patient[]> => {
  // Make a GET request to the '/patients' endpoint with a query parameter 'name' to filter patients by name.
  const response = await apiClient.get(`/patients?name=${name}`);
  // Return the data received from the response, which should be a list of Patient objects matching the name.
  return response.data;
};
