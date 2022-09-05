import { NativeBaseProvider, Center } from "native-base";
import { Navbar, Home, About } from "./components/index";

function App() {
  return (
    <NativeBaseProvider>
      <Center w="100%" h="100%" justifyContent="flex-start">
        <Navbar />
        <Home />
        <About />
      </Center>
    </NativeBaseProvider>
  );
}

export default App;
