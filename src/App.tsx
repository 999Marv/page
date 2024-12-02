import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import "./styles/app.css";
import Win from "./Win";
import Lose from "./Lose";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
        <Route path="/win" element={<Win />} />
        <Route path="/lose" element={<Lose />} />
      </Routes>
    </Router>
  );
}

export default App;
