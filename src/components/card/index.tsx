import { VStack, Center, Image, Text } from "native-base";

interface CardInterface {
  id: number;
  title: string;
  bgr_url: string;
  icon_url: string;
}
interface CardProps {
  cardData: CardInterface[];
}
export const Card = (props: CardProps) => {
  return (
    <>
      {props?.cardData.map((card) => {
        const { id, title, bgr_url, icon_url } = card;
        return (
          <VStack
            key={id}
            w={["100%", "22%", "22%", "22%"]}
            height={["100%", "90%", "90%", "90%"]}
            mt={["30px", "0px", "0px", "0px"]}
          >
            <Center h="100%">
              <Image
                resizeMode="contain"
                source={{ uri: bgr_url }}
                position="absolute"
                alt="Alternate Text"
                width="100%"
                height="100%"
              />
              <Image
                resizeMode="contain"
                source={{ uri: icon_url }}
                position="absolute"
                top={["20%", "30%", "30%", "10%"]}
                alt="Alternate Text"
                width="100%"
                height={["30%", "10%", "10%", "30%"]}
              />
              <Text
                mt={["50px", "0px", "0px", "0px"]}
                zIndex="9"
                color="white"
                textTransform="uppercase"
                fontWeight="600"
              >
                {title}
              </Text>
            </Center>
          </VStack>
        );
      })}
    </>
  );
};
