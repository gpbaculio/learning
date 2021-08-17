import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home, CardFlip } from "./screens";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/card-flip' component={CardFlip} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
