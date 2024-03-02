import Image from "next/image";
import { Inter } from "next/font/google";
import { Container, Flex, VStack } from '@chakra-ui/react'
import Cart from "@/src/sections/cart";
import Details from "@/src/sections/details";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex 
        h={{base: 'auto', md: "100vh"}}
        py={[0, 10, 20]}
        direction={{base: 'column-reverse', md: 'row'}}
      >
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
}
