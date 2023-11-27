import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getStudents = async () => {
  const response = await api.get('/students');
  return response.data;
};
export const getStudentById = async (studentId) => {
    const response = await api.get(`/students/${studentId}`);
    return response.data;
  };
export const createStudent = async (studentData) => {
  const response = await api.post('/students', studentData);
  return response.data;
};

export const updateStudent = async (studentId, studentData) => {
  const response = await api.put(`/students/${studentId}`, studentData);
  return response.data;
};

export const deleteStudent = async (studentId) => {
  const response = await api.delete(`/students/${studentId}`);
  return response.data;
};



//teachers


export const getTeacher = async () => {
  const response = await api.get('/students');
  return response.data;
};
export const getTeachertyId = async (studentId) => {
    const response = await api.get(`/students/${studentId}`);
    return response.data;
  };
export const createTeacher = async (studentData) => {
  const response = await api.post('/students', studentData);
  return response.data;
};

export const updateTeacher = async (studentId, studentData) => {
  const response = await api.put(`/students/${studentId}`, studentData);
  return response.data;
};

export const deleteTeacher = async (studentId) => {
  const response = await api.delete(`/students/${studentId}`);
  return response.data;
};