import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home, CardFlip } from "./screens";

import "./screens/CardFlip/CardFlip.css";
import "./App.css";
import { ThemeProvider } from "styled-components";
const theme = {
  primary: "#FFCE00",
  secondary: "#FE4880",
  dark: "#212121",
  light: "#F3F3F3",
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/card-flip' component={CardFlip} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
