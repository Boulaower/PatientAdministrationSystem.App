import apiClient from './apiClient';
import { Patient } from '../types';

export const getAllPatients = async (): Promise<Patient[]> => {
  const response = await apiClient.get('/patients');
  return response.data;
};

export const getPatientById = async (id: string): Promise<Patient> => {
  const response = await apiClient.get(`/patients/${id}`);
  return response.data;
};

export const searchPatientsByName = async (name: string): Promise<Patient[]> => {
  const response = await apiClient.get(`/patients?name=${name}`);
  return response.data;
};
