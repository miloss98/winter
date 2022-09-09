import { NativeBaseProvider, Center } from "native-base";
import { Navbar, Footer } from "./components/index";
import { Home, About, Services, Pricing, Contact } from "./sections/index";

function App() {
  return (
    <NativeBaseProvider>
      <Center w="100%" h="100%" justifyContent="flex-start">
        <Navbar />
        <Home />
        <About />
        <Services />
        <Pricing />
        <Contact />
      </Center>
    </NativeBaseProvider>
  );
}

export default App;
