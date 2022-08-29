import { NativeBaseProvider, Center } from "native-base";
import Header from "./components/Header";
function App() {
  return (
    <NativeBaseProvider>
      <Center>
        <Header />
      </Center>
    </NativeBaseProvider>
  );
}

export default App;
