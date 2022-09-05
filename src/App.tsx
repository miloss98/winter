import { NativeBaseProvider, Center } from "native-base";
import { Header, HomeScreen } from "./components/index";

function App() {
  return (
    <NativeBaseProvider>
      <Center w="100%" h="100%" justifyContent="flex-start">
        <Header />
        <HomeScreen />
      </Center>
    </NativeBaseProvider>
  );
}

export default App;
