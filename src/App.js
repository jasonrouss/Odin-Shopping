import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<HomePage />}></Route>
          <Route  path="https://jr-odin-shopping.netlify.app/home" element={<HomePage />}></Route>
          <Route  path="https://jr-odin-shopping.netlify.app/shop" element={<ShopPage />}></Route>
          <Route  path="https://jr-odin-shopping.netlify.app/about" element={<AboutPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
