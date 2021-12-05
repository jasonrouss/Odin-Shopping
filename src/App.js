import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="https://odinshopping.netlify.app/"
            element={<HomePage />}
          ></Route>
          <Route
            path="https://odinshopping.netlify.app//home"
            element={<HomePage />}
          ></Route>

          <Route
            exact
            path="https://odinshopping.netlify.app//shop"
            element={<ShopPage />}
          ></Route>
          <Route
            exact
            path="https://odinshopping.netlify.app//about"
            element={<AboutPage />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
