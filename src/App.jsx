import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./page/User";
import Home from "./page/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userdata/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
