import { ICat } from '@/@types/cat';
import { Image } from '@chakra-ui/react';
import api from '@/services/api';
import { Button, Container, Text, Box } from '@chakra-ui/react';
import { useState } from 'react';

export function Presente() {
  const [cat, setCat] = useState<ICat>();

  async function handleGetCat() {
    try {
      const { data } = await api.get('/search');
      setCat(data[0]);
    } catch (err) {
      console.error('Error when fetching a random cat image ', err);
    }
  }

  return (
    <Box w="100%" bg="background">
      <Container py="20" maxW="container.sm" w="100%" centerContent>
        <Text px="4" fontSize="28" color="white" fontWeight="600" letterSpacing="2px">
          Meu amor, hoje é um dia muito especial para mim e para você, pois é o seu aniversário! Eu
          gostaria de lhe desejar um feliz aniversário e dizer o quanto você é importante para mim.
          Que você continue sendo essa pessoa maravilhosa, cheia de amor e de luz, que ilumina a
          vida de todos ao seu redor. Quero que saiba que estarei sempre aqui para apoiá-la. Hoje,
          no seu aniversário, quero desejar que todos os seus sonhos se realizem e que você seja
          muito feliz. Que este novo ano de vida seja cheio de alegrias e realizações. Você merece
          tudo de melhor que a vida pode oferecer!
        </Text>
        <Text fontSize="4rem" color="primary" fontWeight="800" textAlign="center">
          Eu te amooo!!
        </Text>

        <Button
          size="sm"
          mt="10"
          bg="primary"
          color="white"
          fontSize="2.4rem"
          fontWeight="700"
          letterSpacing="2px"
          px={20}
          py={14}
          borderRadius="50"
          onClick={handleGetCat}
        >
          Gerar imagem de gatinho
        </Button>
        <Image
          mt="16"
          boxSize="100%"
          objectFit="cover"
          src={cat ? cat.url : '/bg-bolo.jpg'}
          alt="Imagem de gatinho"
        />
      </Container>
    </Box>
  );
}
