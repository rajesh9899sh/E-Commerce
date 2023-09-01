import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import Nav from "./Component/Nav";
import Foot from "./Component/Foot";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <AppRouter />
      </BrowserRouter>
      <Foot />
    </div>
  );
}

export default App;
