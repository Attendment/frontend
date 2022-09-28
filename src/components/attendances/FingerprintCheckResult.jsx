import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Container,
} from "@chakra-ui/react";
import { AiFillCloseCircle, AiFillCheckCircle } from "react-icons/ai";
import { MdFingerprint } from "react-icons/md";
import "../../styles/pulse.css";

const FingerprintCheck = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Checking Fingerprint</ModalHeader>
          <ModalBody>
            <Container centerContent>
              <MdFingerprint size="10em" className="fingerprint" />
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Stop
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

const FingerprintResult = ({ state, isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Student Room Allocation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Container centerContent>
              {state ? (
                <AiFillCheckCircle color="green" size="10em" />
              ) : (
                <AiFillCloseCircle color="red" size="10em" />
              )}
              {state
                ? "Student has been allocated to this room"
                : "Student has not been allocated to this room"}
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export { FingerprintCheck, FingerprintResult };
