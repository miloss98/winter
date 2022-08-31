import { NativeBaseProvider, Center } from "native-base";
import Header from "./components/Header";
import Banner from "./components/Banner";

function App() {
  return (
    <NativeBaseProvider>
      <Center w="100%" h="100%" justifyContent="flex-start">
        <Header />
        <Banner />
      </Center>
    </NativeBaseProvider>
  );
}

export default App;
