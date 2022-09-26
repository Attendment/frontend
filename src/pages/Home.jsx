import {
  Box,
  Text,
  Button,
  Flex,
  Heading,
  Spacer,
  ButtonGroup,
} from '@chakra-ui/react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

export default function Home() {
  return (
    <Box px="10rem">
      <Flex py={4}>
        <Heading fontSize="2xl" fontWeight="bold">
          Attendly
        </Heading>
        <Spacer />
        <ButtonGroup gap={1}>
          <Button
            fontWeight="bold"
            colorScheme="twitter"
            fontSize="lg"
            variant="ghost"
          >
            login
          </Button>
          <Button fontWeight="bold" colorScheme="yellow" fontSize="lg">
            Start Recording Attendance
          </Button>{' '}
          {/* TODO: make the button navigate to the dashboard */}
        </ButtonGroup>{' '}
      </Flex>

      <Box py={5}>
        <Text fontWeight="extrabold" Align="center" fontSize="5xl">
          KNUST EXAM ATTENDANCE SOFTWARE
        </Text>
        <Flex alignContent="center" height="80vh" justify="center">
          <Player
            autoplay
            loop
            src="https://assets9.lottiefiles.com/packages/lf20_crwpngvr.json"
            style={{ height: '100%', width: '100%' }}
          >
            <Controls
              visible={false}
              buttons={['play', 'repeat', 'frame', 'debug']}
            />
          </Player>
        </Flex>
      </Box>
    </Box>
  );
}
