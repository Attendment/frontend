import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import StudentService from '../../utils/students.util';

const StudentsList = ({ students }) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>All enrolled students</TableCaption>
        <Thead>
          <Tr>
            <Th>Full Name</Th>
            <Th>Student ID</Th>
            <Th>Index Number</Th>
            <Th>Programme</Th>
          </Tr>
        </Thead>
        <Tbody>
          {students?.map((student) => (
            <Tr key={student.id}>
              <Td>{student.full_name}</Td>
              <Td>{student.student_id}</Td>
              <Td>{student.index_number}</Td>
              <Td>{student.programme_name}</Td>
              <Td>
                <ButtonGroup>
                  <Button colorScheme="orange">Enroll Fingerprint</Button>
                </ButtonGroup>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
// TODO: Add filter so a student can be searched
export default StudentsList;
