import './App.css';
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Home from "./Components/Home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<SignUp/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
