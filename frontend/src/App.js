import './App.css';
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Home from "./Components/Home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Welcome from "./Components/Welcome/Welcome";
import Update from "./Components/Update/Update";
import UpdatePrice from "./Components/Update/UpdatePrice";
import AddProduct from "./Components/Create/AddProduct";
import AddPrice from "./Components/Create/AddPrice";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/welcome" element={<Welcome/>} />
                <Route path="/update/:id" element={<Update />} />
                <Route path="/update-price/:id" element={<UpdatePrice />} />
                <Route path="/add-product" element={<AddProduct />} />
                <Route path="/add-price/:id" element={<AddPrice />}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
