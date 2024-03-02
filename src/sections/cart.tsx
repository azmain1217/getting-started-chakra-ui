import { VStack, Heading, Button, Text, HStack, AspectRatio, Image, Stack, Divider, useColorMode, useColorModeValue } from "@chakra-ui/react";

const Cart = () => {
    const { toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
    const secondaryTextColor = useColorModeValue("gray.600", "gray.400")
    return (
        <VStack w="full" h="full" p={10} spacing={10} alignItems={"flex-start"} bg={bgColor}>
            <VStack spacing={3} alignItems="flex-start">
                <Heading size="2xl">Cart Items</Heading>
                <Text>
                    If price is too hard on your eyes, {' '}
                    <Button onClick={toggleColorMode} variant="link" colorScheme="black">
                        try changing the theme
                    </Button>
                </Text>
            </VStack>
            <HStack spacing={6} alignItems="center" w="full">
                <AspectRatio ratio={1} w={24}>
                    <Image src="/images/skateboard.jpg" alt="Skateboard"></Image>
                </AspectRatio>
                <Stack
                    spacing={0}
                    w="full"
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <VStack w="full" spacing={0} alignItems="flex-start">
                        <Heading size="md">Penny Board</Heading>
                        <Text color="gray.600">CTSPENN2310</Text>
                    </VStack>
                    <Heading size="sm" textAlign="end">
                        $119.00
                    </Heading>
                </Stack>
            </HStack>
            <VStack spacing={4} alignItems="stretch" w="full">
                <HStack justifyContent="space-between">
                    <Text color={secondaryTextColor}>Subtotal</Text>
                    <Heading size="sm">$119.00</Heading>
                </HStack>
                <HStack justifyContent="space-between">
                    <Text color={secondaryTextColor}> Shipping</Text>
                    <Heading size="sm">$10.00</Heading>
                </HStack>
                <HStack justifyContent="space-between">
                    <Text color={secondaryTextColor}>Taxes </Text>
                    <Heading size="sm"> $5.32</Heading>
                </HStack>
            </VStack>
            <Divider />
            <HStack justifyContent="space-between" w="full">
                <Text color={secondaryTextColor}>Total</Text>
                <Heading>$134.32</Heading>
            </HStack>
        </VStack>
    );
};

export default Cart;