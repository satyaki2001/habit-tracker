import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HabitContainer from "./components/HabitContainer";
import Home from "./pages/Home";

function App() {
	return (
   <div className="App">
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="habits" element={<HabitContainer />} />
    </Routes>
  </BrowserRouter>
		</div>
	);
}

export default App;
