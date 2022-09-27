import { Box, Flex, useToast, VStack, Button } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormSelect from '../../components/forms/FormSelect';
import { useProgrammes } from '../../hooks/programme';
import ExamService from '../../utils/exam.util';

const exams = [
  {
    id: 'c7971505-0bfc-452e-a776-05ba30f70380',
    course_name: 'Differential Equations 1',
    course_code: 'DE 821',
    level: '400',
    start: '2022-09-24T15:00:00Z',
    end: '2022-09-24T17:00:00Z',
    students: [
      {
        id: 'aa8f5c11-9646-4796-8caf-6812c7193de2',
        full_name: 'Gabriel Rockson',
        student_id: '82329982',
        index_number: '43872252',
        level: '400',
        programme_name: 'Electrical Engineering',
      },
      {
        id: '7f763bd2-aa7c-4c4b-98aa-d3b0b8fb505b',
        full_name: 'Anastasia Yeboah',
        student_id: '88227731',
        index_number: '11123442',
        level: '400',
        programme_name: 'Computer Engineering',
      },
    ],
    rooms: [
      {
        id: 'cf83a618-0352-4526-b17a-b89b6d7e95bf',
        name: 'PB 208',
        capacity: 80,
      },
    ],
  },
  {
    id: 'cdaa236d-637b-4206-83dd-5d9c080b3cd5',
    course_name: 'Differential Equations 2',
    course_code: 'DE 821',
    level: '400',
    start: '2022-09-24T09:00:00Z',
    end: '2022-09-24T11:00:00Z',
    students: [],
    rooms: [
      {
        id: 'cf83a618-0352-4526-b17a-b89b6d7e95bf',
        name: 'PB 208',
        capacity: 80,
      },
    ],
  },
];
export default function ExamAttendanceRecordNewPage({ onClose }) {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    ExamService.getExamList()
      .then((res) => {
        if (res.status === 200) {
          setExams(res?.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const initialValues = {
    exam: '',
    room: '',
  };

  const validationSchema = Yup.object().shape({
    exam: Yup.string().required('Exam is required'),
  });

  const handleSubmit = (values, { setSubmitting, setErrors, resetForm }) => {};

  return (
    <Flex justify="center">
      <Box width={400}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            errors,
            touched,
            values,
            handleSubmit,
            handleChange,
            handleBlur,
            isSubmitting,
          }) => (
            <form method="POST">
              <VStack spacing={5}>
                <FormSelect
                  name="exam"
                  label="Examination"
                  errors={errors}
                  touched={touched}
                  values={values}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  isRequired={true}
                  options={exams}
                  option_value="id"
                  option_label="course_name"
                />
                {values['exam'] ? (
                  <FormSelect
                    name="room"
                    label="Room"
                    errors={errors}
                    touched={touched}
                    values={values}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    isRequired={true}
                    options={
                      exams.filter((exam) => exam.id === values['exam'])[0]
                        ?.rooms
                    }
                    option_value="id"
                    option_label="name"
                  />
                ) : null}
              </VStack>{' '}
              <Button
                mt={5}
                colorScheme="green"
                type="submit"
                disabled={isSubmitting}
                onClick={handleSubmit}
              >
                Start Recording Attendance
              </Button>
            </form>
          )}
        </Formik>
      </Box>{' '}
    </Flex>
  );
}
