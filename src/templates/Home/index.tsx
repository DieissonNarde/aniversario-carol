import { Link } from '@chakra-ui/next-js';
import { Heading, Button, Container, Text, Flex, Box } from '@chakra-ui/react';

export function Home() {
  return (
    <Box h="100vh" w="100%" bg="background">
      <Flex height="100%" flexDirection="column" align="center" justify="center" gap="2">
        <Heading color="#4b204b" fontSize="78" letterSpacing="1.4px">
          28/03/2023
        </Heading>
        <Text
          color="white"
          fontSize="5xl"
          fontWeight="600"
          letterSpacing="2px"
          textAlign="center"
          mx="4"
        >
          Chegou o seu diiaaa... <br /> Feliz aniversário meu amor!!!
        </Text>
        <Link
          href="/presente"
          mt="10"
          bg="primary"
          color="white"
          fontSize={28}
          fontWeight="700"
          letterSpacing="2px"
          px={20}
          py={4}
          borderRadius="50"
        >
          Clique aqui!
        </Link>
      </Flex>
    </Box>
  );
}
