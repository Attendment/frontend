import { Box, Flex, useToast, VStack, Button, Spinner, useDisclosure } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import FormSelect from "../../components/forms/FormSelect";
import { useProgrammes } from "../../hooks/programme";
import ExamService from "../../utils/exam.util";
import {
  FingerprintCheck,
  FingerprintResult,
} from "../../components/attendances/FingerprintCheckResult";
import ExamAttendanceService from "../../utils/exam-attendance.utils"
import FingerprintService from "../../utils/fingerprints.util";

export default function ExamAttendanceRecordNewPage({ onClose }) {
  const [exams, setExams] = useState([]);
  const [latestFingerprint,setLatestFingerprint] = useState({state:false,student:null});
  const [fingerprintResult,setFingerPrintResult] = useState(false);
    const {
    isOpen: checkFingerprintIsOpen,
    onOpen: checkFingerprintOnOpen,
    onClose: checkFingerprintOnClose,
  } = useDisclosure();

  const {
    isOpen: fingerprintResultIsOpen,
    onOpen: fingerprintResultOnOpen,
    onClose: fingerprintResultOnClose,
  } = useDisclosure();


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
    exam: "",
    room: "",
  };

  const checkFingerprint = () => {
    checkFingerprintOnOpen();
    setTimeout(() => {
      checkFingerprintOnClose();
      fingerprintResultOnOpen();      
    }, 5000);
  };

  const validationSchema = Yup.object().shape({
    exam: Yup.string().required("Exam is required"),
  });

  // const verifyFingerprint = async () => {
  //   checkFingerprintOnOpen();
  //   const latestFingerprintData = await FingerprintService.getLatestFingerprint();
  //   setLatestFingerprint(latestFingerprintData.data)
  //   if(!(latestFingerprintData.data.student === null) && (latestFingerprint.student === null)){
  //     setFingerPrintResult(true);
  //     checkFingerprintOnClose();
  //     fingerprintResultOnOpen();      
  //     console.log(latestFingerprintData.data)
  //     fingerprintResultOnClose();
  //     checkFingerprintOnOpen();
  //     setFingerPrintResult(false);
  //   }
  //   // checkFingerprintOnClose();
  // }

  const handleSubmit = async (values, { setSubmitting, setErrors, resetForm }) => {
    const createdExamAttendance = await ExamAttendanceService.addExamAttendance(values);
    console.log(createdExamAttendance.data);
    if(createdExamAttendance.status === 201){
      await verifyFingerprint()
    }
    checkFingerprintOnClose();
    setSubmitting(false)
  };

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
                {values["exam"] ? (
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
                      exams.filter((exam) => exam.id === values["exam"])[0]
                        ?.rooms
                    }
                    option_value="id"
                    option_label="name"
                  />
                ) : null}
              </VStack>{" "}
              <Button
                mt={5}
                colorScheme="green"
                // type="submit"
                disabled={isSubmitting}
                onClick={handleSubmit}
              >
                Start Recording Attendance
              </Button>
            </form>
          )}
        </Formik>
      </Box>{" "}
        <FingerprintCheck isOpen={checkFingerprintIsOpen} onClose={checkFingerprintOnClose} />
        <FingerprintResult state={fingerprintResult} isOpen={fingerprintResultIsOpen} onClose={fingerprintResultOnClose} />
    </Flex>
  );
}
