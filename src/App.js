import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import ResetPassword from "./components/ResetPassword";
import Conversations from "./components/Conversations";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/conversation" element={<Conversations />} />
      </Routes>
    </Router>
  );
}

export default App;
