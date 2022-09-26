import { Text, Flex, Avatar } from '@chakra-ui/react';
import LabelLogo from '../LabelLogo';

const TopNavBar = () => {
  return (
    <Flex py={5} px={5} justify="space-between" boxShadow="lg">
      <LabelLogo />

      <Flex>
        <Avatar size="sm" colorScheme="yellow" />
        <Text alignSelf="center" fontWeight={'bold'} ml={2}>
          Joshua Asuman
        </Text>{' '}
        {/* TODO: add lecturer's name here */}
      </Flex>
    </Flex>
  );
};

export default TopNavBar;
