import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Pages/Create/Create";
import Lists from "./Pages/Lists/Lists";
import Welcome from "./Pages/Welcome/Welcome";
import Website from "./Pages/Website/Website";
import Developer from "./Pages/Developer/Developer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create></Create>}></Route>
          <Route path="/notes" element={<Lists></Lists>}></Route>
          <Route path="/welcome" element={<Welcome></Welcome>}></Route>
          <Route path="/about" element={<Website></Website>}></Route>
          <Route path="/developer" element={<Developer></Developer>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
