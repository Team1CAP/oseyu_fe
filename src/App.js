import "./App.css";
import Router from "./router/Router";
import { Global } from "@emotion/react";
import ResetStyle from "./styles/GlobalStyle";
function App() {
  return (
    <div className="App">
      <Global styles={ResetStyle} />
      <Router />
    </div>
  );
}

export default App;
