import axios from 'axios';

 //const API_BASE_URL = 'http://16.171.239.100:3001';

 const API_BASE_URL = 'http://localhost:3000';
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


export const getTeachers = async () => {
  const response = await api.get('/teachers');
  return response.data;
};
export const getTeachersId = async (studentId) => {
    const response = await api.get(`/teachers/${studentId}`);
    return response.data;
  };
export const createTeachers = async (studentData) => {
  const response = await api.post('/teachers', studentData);
  return response.data;
};

export const updateTeachers = async (studentId, studentData) => {
  const response = await api.put(`/teachers/${studentId}`, studentData);
  return response.data;
};

export const deleteTeacher = async (studentId) => {
  const response = await api.delete(`/teachers/${studentId}`);
  return response.data;
};
//marks
export const getMarks = async () => {
  const response = await api.get('/marks');
  return response.data;
};
export const getMarksById = async (studentId) => {
    const response = await api.get(`/marks/${studentId}`);
    return response.data;
  };
export const createMarks = async (markData) => {
  const response = await api.post('/marks', markData);
  return response.data;
};

export const updateMarks = async (studentId, studentData) => {
  const response = await api.put(`/students/marks/${studentId}`, studentData);
  return response.data;
};

//subjects

export const getSubjects = async () => {
  const response = await api.get('/subject');
  return response.data;
};
export const getSubjectsById = async (studentId) => {
    const response = await api.get(`/students/marks/${studentId}`);
    return response.data;
  };
export const createSubjects = async (studentData) => {
  const response = await api.post('/students/marks', studentData);
  return response.data;
};

export const updateSubjects = async (studentId, studentData) => {
  const response = await api.put(`/students/marks/${studentId}`, studentData);
  return response.data;
};

export const deleteMarks = async (studentId) => {
  const response = await api.delete(`/students/marks/${studentId}`);
  return response.data;
};

