import { VStack, Center, Image, Text, HStack } from "native-base";

interface CardInterface {
  id: number;
  title: string;
  bgr_url: string;
  icon_url: string;
}
interface IProps {
  cardData: CardInterface[];
}
export const Card = (props: IProps) => {
  return (
    <HStack w="80%" h="80%" justifyContent="space-evenly" alignItems="center">
      {props?.cardData.map((card) => {
        const { id, title, bgr_url, icon_url } = card;
        return (
          <VStack key={id} w="22%" height="90%">
            <Center h="100%" bgColor="blue.500">
              <Image
                resizeMode="cover"
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
                top="10%"
                alt="Alternate Text"
                width="100%"
                height="30%"
              />
              <Text zIndex="9">{title}</Text>
            </Center>
          </VStack>
        );
      })}
    </HStack>
  );
};
