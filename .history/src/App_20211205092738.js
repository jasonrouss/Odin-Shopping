import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div>
      <BrowserRouter>
<<<<<<< HEAD
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
=======
        <Routes><Route exact path="https://odinshopping.netlify.app/" element={<HomePage />}></Route>
          <Route exact path="https://odinshopping.netlify.app/home" element={<HomePage />}></Route>
          <Route exact path="https://odinshopping.netlify.app/shop" element={<ShopPage />}></Route>
          <Route exact path="https://odinshopping.netlify.app/about" element={<AboutPage />}></Route>
>>>>>>> 71631433e198a4cff68f3ac7d6b76856360afc40
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
