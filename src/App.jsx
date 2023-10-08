import "https://kit.fontawesome.com/a2db0f7c4b.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import Community from "./pages/Community";
import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
import Researches from './pages/Researches';
import DataSources from './pages/DataSources';

import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="community" element={<Community />} />
          <Route path="login" element={<Login />} />
          <Route path="researches" element={<Researches />} />
          <Route path="data-sources" element={<DataSources />} />
          <Route path="*" element={<Error />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
