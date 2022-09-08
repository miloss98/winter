import { Button, Stack, Input, TextArea } from "native-base";
export const Form = () => {
  return (
    <Stack space={4} w="100%" h="300px" pt="1rem" mt="1rem" alignItems="center">
      <Input
        bgColor="white"
        size={["md", "md", "lg", "lg"]}
        placeholder="Name"
        w="90%"
      />
      <Input
        bgColor="white"
        size={["md", "md", "lg", "lg"]}
        placeholder="Email"
        w="90%"
      />
      <Input
        bgColor="white"
        size={["md", "md", "lg", "lg"]}
        placeholder="Phone"
        w="90%"
      />
      <TextArea
        bgColor="white"
        h={20}
        placeholder="Enter message (optional)"
        w="90%"
        autoCompleteType={undefined}
      />
      <Button
        bgColor="orange.500"
        w="90%"
        _text={{
          color: "white",
          fontWeight: "600",
          textTransform: "uppercase",
        }}
        _hover={{
          bgColor: "orange.600",
        }}
        _pressed={{
          bgColor: "orange.700",
        }}
      >
        Send
      </Button>
    </Stack>
  );
};
