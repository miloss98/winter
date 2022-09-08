import { Box, Heading, HStack, Text, Image } from "native-base";
import {
  location_icon,
  phone_icon,
  mail_icon,
  facebook_icon,
  twitter_icon,
  googleplus_icon,
} from "../../assets/index";

export const Info = () => {
  return (
    <Box my="2rem" w="90%" bgColor="gray.500" h="300px">
      <Heading size="xl" color="orange.500" p="10px">
        Get in touch !
      </Heading>
      <HStack w="100%" justifyContent="space-between">
        <Image
          resizeMode="contain"
          source={{ uri: location_icon }}
          alt="Alternate Text"
          width="40px"
          height="40px"
          ml="10px"
        />
        <Text w="50%">
          990 Proin Gravida Street, Aliquet Snean Tate, Lincoln Way, San
          Francisco, California.
        </Text>
      </HStack>
      <HStack>
        <Text>
          (+001) 001 002 0034, (+002) 009 008 0760 (+003) 456 050 0670
        </Text>
      </HStack>
      <HStack>
        <Text> test@mail..com </Text>
      </HStack>
    </Box>
  );
};
