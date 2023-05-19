import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Landing from "./components/Landing/Landing";
import Result from "./components/Home/Predict/Result";
import Upload from "./components/Home/Predict/Upload";
// import Diagnosis from "./components/Home/Predict/Diagnosis";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Plant-Leaf-Detection-App" element={<Landing />} />
          <Route path="/" element={<Upload />} />
          <Route path="/result" element={<Result />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
