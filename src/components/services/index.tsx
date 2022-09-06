import { Box, Center, VStack, Text, Heading, HStack, Image } from "native-base";
import { DividerLine } from "../divider";
import {
  servicesbg,
  development_bgr,
  design_bgr,
  concept_bgr,
  system_bgr,
  development_icon,
  design_icon,
  concept_icon,
  system_icon,
} from "../../assets";
export const Services = () => {
  return (
    <Box w="100vw" h="100vh" justifyContent="space-evenly" bgColor="red.500">
      <Image
        resizeMode="cover"
        source={{ uri: servicesbg }}
        position="absolute"
        alt="Alternate Text"
        width="100%"
        height="100%"
      />
      <HStack h="25%" w="100%" justifyContent="center" alignItems="center">
        <VStack h="100%" w="100%" justifyContent="center" alignItems="center">
          <Heading
            pb="1rem"
            mt="70px"
            fontWeight="500"
            fontSize={["2rem", "2rem", "2.2rem", "3rem"]}
            textTransform="uppercase"
            color="white"
          >
            Our services
          </Heading>
          <Text
            color="white"
            width={["100%", "100%", "80%", "80%"]}
            fontSize={["xs", "sm", "sm", "md"]}
            textAlign="center"
          >
            Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
            ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos.
          </Text>
          <DividerLine />
        </VStack>
      </HStack>
      <Center w="100%" h="80%">
        <HStack
          w="80%"
          h="80%"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <VStack w="22%" height="90%">
            <Center h="100%" bgColor="blue.500">
              <Image
                resizeMode="cover"
                source={{ uri: development_bgr }}
                position="absolute"
                alt="Alternate Text"
                width="100%"
                height="100%"
              />
              <Image
                resizeMode="contain"
                source={{ uri: development_icon }}
                position="absolute"
                top="10%"
                alt="Alternate Text"
                width="100%"
                height="30%"
              />
              <Text zIndex="9">Development</Text>
            </Center>
          </VStack>
          <VStack w="22%" height="90%">
            <Center h="100%" bgColor="blue.500">
              <Image
                resizeMode="cover"
                source={{ uri: design_bgr }}
                position="absolute"
                alt="Alternate Text"
                width="100%"
                height="100%"
              />
              <Image
                resizeMode="contain"
                source={{ uri: design_icon }}
                position="absolute"
                top="10%"
                alt="Alternate Text"
                width="100%"
                height="30%"
              />
              <Text zIndex="9">Design</Text>
            </Center>
          </VStack>
          <VStack w="22%" height="90%">
            <Center h="100%" bgColor="blue.500">
              <Image
                resizeMode="cover"
                source={{ uri: concept_bgr }}
                position="absolute"
                alt="Alternate Text"
                width="100%"
                height="100%"
              />
              <Image
                resizeMode="contain"
                source={{ uri: concept_icon }}
                position="absolute"
                top="10%"
                alt="Alternate Text"
                width="100%"
                height="30%"
              />
              <Text zIndex="9">Concept</Text>
            </Center>
          </VStack>
          <VStack w="22%" height="90%">
            <Center h="100%" bgColor="blue.500">
              <Image
                resizeMode="cover"
                source={{ uri: system_bgr }}
                position="absolute"
                alt="Alternate Text"
                width="100%"
                height="100%"
              />
              <Image
                resizeMode="contain"
                source={{ uri: system_icon }}
                position="absolute"
                top="10%"
                alt="Alternate Text"
                width="100%"
                height="30%"
              />
              <Text zIndex="9">System</Text>
            </Center>
          </VStack>
        </HStack>
      </Center>
    </Box>
  );
};
