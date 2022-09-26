import { Flex, Box } from '@chakra-ui/react';
import SideBar from '../../components/dashboard/SideBar';
import TopNavBar from '../../components/dashboard/TopNavBar';

export default function Dashboard() {
  return (
    <Flex flexDirection={'row'}>
      <SideBar />

      <Box w="calc(100% - 250px)">
        <TopNavBar />
      </Box>
    </Flex>
  );
}
