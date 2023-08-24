import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/fonts/stylesheet.css";
import "./App.css";

// Pages
import Home from "./page/Home";
import Offer from "./page/Offer";
import Signup from "./page/Signup";
// Components
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
