import axios_instance from './axios.utils';

const getStudentList = async () => {
  return await axios_instance.get('students/');
};

const getStudentData = async (id) => {
  return await axios_instance.get(`students/${id}/`);
};

const addStudent = async (data) => {
  return await axios_instance.post('students/', data);
};

const StudentService = {
  getStudentList,
  getStudentData,
  addStudent,
};

export default StudentService;
