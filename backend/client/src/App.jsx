import { Route, Routes } from "react-router-dom";
import { Login, Signup } from "../../../dashboard/src/pages";
import Home from "../../../dashboard/src/pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
