import { GlobalStyles } from "./GlobalStyles";
import { Router } from "./Router/Router";
import { PokemonProvider } from "./Context/PokemonContext";
import { ThemeProvider } from "styled-components";
import Themes from "./Themes/Themes";
function App() {
  return (
    <>
      <ThemeProvider theme={Themes}>
        <PokemonProvider>
          <GlobalStyles />
          <Router />
        </PokemonProvider>
      </ThemeProvider>
    </>
  );
}
export default App;
