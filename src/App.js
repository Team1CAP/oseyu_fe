import "./App.css";
import Router from "./router/Router";
import { RecoilRoot } from "recoil";
function App() {
  return (
    <RecoilRoot>
      <div className="container text-center min-h-screen justify-center font-san">
        <Router />
      </div>
    </RecoilRoot>
  );
}

export default App;
