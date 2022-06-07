import Login from "./components/login";
import Register from "./components/register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="add" element={<AddUser />}></Route>
        <Route path="update/:id" element={<EditUser />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
