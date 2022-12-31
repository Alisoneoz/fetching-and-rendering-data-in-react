import { BrowserRouter, Routes, Route } from "react-router-dom";
import AxiosFetching from "../pages/AxiosFetching";
import FecthInbuiltAPI from "../pages/FecthInbuiltAPI";
import Header from "./Header";
import Home from "../pages/Home";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/axios" element={<AxiosFetching />}/>
        <Route path="/fetchapi" element={<FecthInbuiltAPI />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation
