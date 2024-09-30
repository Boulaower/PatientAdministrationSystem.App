import apiClient from '../api/apiClient';

// Fetch all hospitals
export const getAllHospitals = async () => {
  const response = await apiClient.get('/hospitals'); // Adjust endpoint as needed
  return response.data;
};
