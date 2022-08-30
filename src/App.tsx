import { NativeBaseProvider, Center } from "native-base";
import Header from "./components/Header";
import Banner from "./components/Banner";

function App() {
  return (
    <NativeBaseProvider>
      <Center w="100vw" height="100vh" justifyContent="flex-start">
        <Header />
        <Banner />
      </Center>
    </NativeBaseProvider>
  );
}

export default App;
