import axios from "axios";

const API_URL = "http://32.198.152.36:8000/";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


// Create Student
export const createStudent = async (studentData) => {
  try {
    const response = await api.post("/students", studentData);

    return response.data;
  } catch (error) {
    throw error.response?.data?.detail || "Failed to create student";
  }
};


// Get All Students
export const getStudents = async () => {
  try {
    const response = await api.get("/students");

    return response.data;
  } catch (error) {
    throw error.response?.data?.detail || "Failed to fetch students";
  }
};
// Delete Student
export const deleteStudent = async (studentId) => {
  try {
    const response = await api.delete(`/students/${studentId}`);

    return response.data;
  } catch (error) {
    throw error.response?.data?.detail || "Failed to delete student";
  }
};

// Update Student
export const updateStudent = async (studentId, studentData) => {
  try {
    const response = await api.put(`/students/${studentId}`, studentData);

    return response.data;
  } catch (error) {
    throw error.response?.data?.detail || "Failed to update student";
  }
};

export default api;