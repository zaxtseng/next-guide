import { Box, Heading, HStack } from '@chakra-ui/react'
import {IoGameControllerSharp} from 'react-icons/io5'
import { Image } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

const Game = () => {
  return (
    <Box maxW={1200} mx='auto' mt='20px'>
        <HStack fontSize='24px'>
            <IoGameControllerSharp />
            <Heading as='h3'>Game</Heading>
        </HStack>
        <HStack mt='20px' spacing={3}>
            <Box w={290}>
                <Image src='/imgs/img3.png' alt='ff7cc' />
                <Text mt='10px'>The game primarily focuses on Zack Fair</Text>
            </Box>
            <Box w={290}>
                <Image src='/imgs/img3.png' alt='ff7cc' />
                <Text mt='10px'>The game primarily focuses on Zack Fair</Text>
            </Box>
            <Box w={290}>
                <Image src='/imgs/img3.png' alt='ff7cc' />
                <Text mt='10px'>The game primarily focuses on Zack Fair</Text>
            </Box>
        </HStack>
    </Box>
  )
}

export default Game