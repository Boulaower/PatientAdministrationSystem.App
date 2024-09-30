import { searchPatientsByName } from '../api/patients';

export const fetchSearchedPatients = async (name: string) => {
  return await searchPatientsByName(name);
};
