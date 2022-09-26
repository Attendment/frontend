import { Button, Divider, Flex, Heading, VStack } from '@chakra-ui/react';
import NavItem from './NavItem';

import {
  HiDocumentReport,
  HiUserGroup,
  HiOutlineDocumentDuplicate,
} from 'react-icons/hi';

const SideBar = () => {
  return (
    <Flex
      left={0}
      top={0}
      pos={'sticky'}
      h="100vh"
      w="250px"
      flexDirection={'column'}
      justify={'space-between'}
      boxShadow="lg"
    >
      <Flex flexDirection={'column'}>
        <Heading fontSize={'2xl'} textAlign={'center'} color="gray.700" pt={5}>
          Dashboard
        </Heading>
        <VStack
          pt={10}
          spacing={5}
          flexDirection="column"
          alignItems="flex-start"
          px={2}
        >
          <NavItem icon={HiUserGroup} to="students" title="Students" />
          <NavItem icon={HiDocumentReport} title="Exam Attendances" />
          <NavItem
            icon={HiOutlineDocumentDuplicate}
            title="Student Attendances"
          />
        </VStack>
      </Flex>
      <Flex flexDirection={'column'}>
        <Divider />
        <Button colorScheme="red">Logout</Button>
      </Flex>
    </Flex>
  );
};

export default SideBar;
