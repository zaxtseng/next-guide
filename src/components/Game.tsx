import { baseURL } from "@/axiosConfig";
import { Box, Heading, HStack, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { IoGameControllerSharp } from "react-icons/io5";

export interface IGame {
  id: number;
  title: string;
  url: string;
  vid: number;
}

const Game = ({ data, title }: { data: IGame[]; title: string }) => {
  return (
    <Box maxW={1200} mx="auto" mt="20px">
      <HStack fontSize="24px">
        <IoGameControllerSharp />
        <Heading as="h3">{title}</Heading>
      </HStack>
      <HStack mt="20px" spacing={3}>
        {data.map(game => (
          <Box w={290} key={game.id}>
            <Image src={game.url} alt={game.title} />
            <Text mt="10px">{game.title}</Text>
          </Box>
        ))}
        {/* <Box w={290}>
          <Image src="/imgs/img3.png" alt="ff7cc" />
          <Text mt="10px">The game primarily focuses on Zack Fair</Text>
        </Box> */}
       
      </HStack>
    </Box>
  );
};

export default Game;
export const loadGame = async () => axios.get("/api/movie", { baseURL });
