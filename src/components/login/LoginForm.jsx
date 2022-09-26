import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Text,
  VStack,
} from '@chakra-ui/react';
import FormInput from '../forms/FormInput';

const LoginForm = () => {
  const initialValues = {
    username: '',
    password: '',
  };

  const loginValidationSchema = Yup.object().shape({
    username: Yup.string().required('Lectuer ID is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = (values, { setSubmitting, setErrors }) => {
    console.log(values);

    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginValidationSchema}
      onSubmit={handleSubmit}
    >
      {({
        errors,
        touched,
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form>
          <Text pt={4} pb={6} fontSize="4xl" fontWeight="bold">
            Invigilator Login
          </Text>
          <VStack spacing={5}>
            <FormInput
              isRequired={true}
              label="Lecturer ID"
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
              touched={touched}
              errors={errors}
              name="username"
              type="username"
            />
            <FormInput
              isRequired={true}
              label="Password"
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
              touched={touched}
              errors={errors}
              name="password"
              type="password"
            />
          </VStack>
          <Button
            mt={5}
            colorScheme="yellow"
            type="submit"
            disabled={isSubmitting}
            onClick={handleSubmit}
          >
            Login
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
