import { FormControl, FormLabel, Input, VStack, Heading, Text, SimpleGrid, GridItem, Select, Checkbox, Button, useBreakpointValue } from "@chakra-ui/react";

const Details = () => {
    const colSpan = useBreakpointValue({base: 2, md: 1})
    return (
        <VStack w="full" h="full" p={10} spacing={10} alignItems={"flex-start"}>
            <VStack spacing="3" alignItems="flex-start">
                <Heading size="2xl">Your Details</Heading>
                <Text> If you already have an account, click here to log in</Text>
            </VStack>
            <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
                <GridItem colSpan={colSpan}>
                    <FormControl>
                        <FormLabel>First Name</FormLabel>
                        <Input placeholder="John"></Input>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={colSpan}>
                    <FormControl>
                        <FormLabel>Last Name</FormLabel>
                        <Input placeholder="Adams"></Input>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                    <FormControl>
                        <FormLabel>Address</FormLabel>
                        <Input placeholder="Blvd of Broken Dreams 17"></Input>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={colSpan}>
                    <FormControl>
                        <FormLabel>City</FormLabel>
                        <Input placeholder="Baltimore"></Input>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={colSpan}>
                    <FormControl>
                        <FormLabel>Country</FormLabel>
                        <Select>
                            <option value="usa">United States of America</option>
                            <option value="bd">Bangladesh</option>
                            <option value="in">India</option>
                            <option value="ca">Canada</option>
                            <option value="sz">Switzerland</option>
                        </Select>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                    <Checkbox defaultChecked>Ship to billing address</Checkbox>
                </GridItem>
                <GridItem colSpan={2}>
                    <Button variant="primary" size="lg" w="full">Order</Button>
                </GridItem>
            </SimpleGrid>
        </VStack>
    );
};

export default Details;