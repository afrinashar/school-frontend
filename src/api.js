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

export const editTeachers = async (studentId, studentData) => {
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
  const response = await api.put(`/marks/${studentId}`, studentData);
  return response.data;
};
export const deleteMarks = async (studentId) => {
  const response = await api.delete(`/marks/${studentId}`);
  return response.data;
};
//subjects

export const getSubjects = async () => {
  const response = await api.get('/subject');
  return response.data;
};
export const getSubjectsById = async (studentId) => {
    const response = await api.get(`/subject/${studentId}`);
    return response.data;
  };
export const createSubjects = async (studentData) => {
  const response = await api.post('/subject', studentData);
  return response.data;
};

export const updateSubjects = async (studentId, studentData) => {
  const response = await api.put(`/subject/${studentId}`, studentData);
  return response.data;
};

export const deleteSubjects = async (studentId) => {
  const response = await api.delete(`/subject/${studentId}`);
  return response.data;
};


//timetable

export const getTmietable = async () => {
  const response = await api.get('/timetable');
  return response.data;
};
export const getTimetableById = async (studentId) => {
    const response = await api.get(`/timetable/${studentId}`);
    return response.data;
  };
export const createTimetable = async (studentData) => {
  const response = await api.post('/timetable', studentData);
  return response.data;
};

export const updateTimetable = async (studentId, studentData) => {
  const response = await api.put(`/timetable/${studentId}`, studentData);
  return response.data;
};

export const deleteTimetable= async (studentId) => {
  const response = await api.delete(`/class/${studentId}`);
  return response.data;
};
//classes

export const getClasses = async () => {
  const response = await api.get('/class');
  return response.data;
};
export const getClassesById = async (studentId) => {
    const response = await api.get(`/class/${studentId}`);
    return response.data;
  };
export const createClasses = async (studentData) => {
  const response = await api.post('/class', studentData);
  return response.data;
};

export const updateClasses = async (studentId, studentData) => {
  const response = await api.put(`/class/${studentId}`, studentData);
  return response.data;
};

export const deleteClasses = async (studentId) => {
  const response = await api.delete(`/class/${studentId}`);
  return response.data;
};
export const signup = async (username, password, role) => {
  const response = await api.post('/auth/signup', { username, password, role });
  return response.data;
};

export const login = async (username, password) => {
  const response = await api.post('/auth/login', { username, password });
  return response.data;
};