import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<HomePage />}></Route>
          <Route exact path="/shop" element={<ShopPage />}></Route>
          <Route exact path="/about" element={<AboutPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
