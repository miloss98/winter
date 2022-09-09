import { Box, Heading, HStack, Text, Image, Link } from "native-base";
import {
  location_icon,
  phone_icon,
  mail_icon,
  facebook_icon,
  twitter_icon,
} from "../../assets/index";

export const Info = () => {
  return (
    <Box my="2rem" w={["90%", "90%", "50%", "45%"]} h="300px">
      <Heading size="xl" color="orange.500" pb="1rem" pl="0.2rem">
        Get in touch !
      </Heading>
      <HStack
        pb="1rem"
        w={["100%", "80%", "80%", "50%"]}
        justifyContent={[
          "space-around",
          "space-around",
          "space-between",
          "space-between",
        ]}
        alignItems="center"
      >
        <Image
          resizeMode="contain"
          source={{ uri: location_icon }}
          alt="Alternate Text"
          width="30px"
          height="30px"
        />
        <Text w="80%" fontSize={["sm", "sm", "md", "md"]} color="white">
          999, Lorem ipsum dolor sit.
        </Text>
      </HStack>

      <HStack
        pb="1rem"
        w={["100%", "80%", "70%", "50%"]}
        justifyContent={[
          "space-around",
          "space-around",
          "space-between",
          "space-between",
        ]}
        alignItems="center"
      >
        <Image
          resizeMode="contain"
          source={{ uri: phone_icon }}
          alt="Alternate Text"
          width="30px"
          height="30px"
        />
        <Text w="80%" fontSize={["sm", "sm", "md", "md"]} color="white">
          (+001) 001 002 0034
        </Text>
      </HStack>

      <HStack
        w={["100%", "80%", "70%", "50%"]}
        justifyContent={[
          "space-around",
          "space-around",
          "space-between",
          "space-between",
        ]}
        alignItems="center"
      >
        <Image
          resizeMode="contain"
          source={{ uri: mail_icon }}
          alt="Alternate Text"
          width="30px"
          height="30px"
        />
        <Text w="80%" fontSize={["sm", "sm", "md", "md"]} color="white">
          test@mail.com
        </Text>
      </HStack>

      <HStack mt="2rem" w="50%" justifyContent="flex-start" alignItems="center">
        <Text
          pl={["0.5rem", "0.5rem", "0rem", "0rem"]}
          pr="1rem"
          fontSize={["md", "md", "lg", "xl"]}
          color="orange.500]"
        >
          Social:
        </Text>
        <Link href="https://www.facebook.com" isExternal>
          <Image
            resizeMode="contain"
            source={{ uri: facebook_icon }}
            alt="Alternate Text"
            width="30px"
            height="30px"
            mr="0.5rem"
          />
        </Link>
        <Link href="https://www.twitter.com" isExternal>
          <Image
            resizeMode="contain"
            source={{ uri: twitter_icon }}
            alt="Alternate Text"
            width="30px"
            height="30px"
          />
        </Link>
      </HStack>
    </Box>
  );
};
