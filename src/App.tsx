import { NativeBaseProvider, Center } from "native-base";
import Header from "./components/Header";
import Banner from "./components/Banner";

function App() {
  return (
    <NativeBaseProvider>
      <Center>
        <Header />
        <Banner />
      </Center>
    </NativeBaseProvider>
  );
}

export default App;
