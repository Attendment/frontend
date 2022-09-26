import {
  Select,
  Input,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex,
  Button,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useDisclosure,
} from '@chakra-ui/react';

import AddStudentForm from '../../components/students/AddStudentForm';

export default function FingerPrint() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Top Bar */}
      <Flex justify="space-between">
        <Text fontWeight="bold" fontSize={'3xl'}>
          Students
        </Text>
        <Button onClick={onOpen} colorScheme="yellow">
          Enroll Student
        </Button>
      </Flex>

      {/* Modal for add fingerprint form */}
      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight="bold">Enroll Student</ModalHeader>

          <ModalCloseButton />
          <ModalBody mb={4}>
            <AddStudentForm />
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Main content */}
      <Flex></Flex>
    </>
  );
}
