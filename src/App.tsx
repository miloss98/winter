import { NativeBaseProvider, Box } from "native-base";

function App() {
  return (
    <div className="wrapper">
      <NativeBaseProvider>
        <Box>Hello world</Box>
      </NativeBaseProvider>
    </div>
  );
}

export default App;
