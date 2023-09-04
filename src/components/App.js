import "../App.css";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProductPage } from "./pages/ProductPage";
import { Wishlist } from "./pages/Wishlist";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { RequireAuth } from "./RequireAuth";
import { Profile } from "./pages/Profile/Profile";
import { Header } from "../components/Header";
import { ProductInfoPage } from "./pages/ProductInfoPage";
import { Checkout } from "./pages/Checkout";

function App() {
  // const {state} = useContext(HomeContext)
  // const isLoggedIn = false
  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>

      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/productinfopage/:id" element={<ProductInfoPage />} />
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/wishlist"
            element={
              <RequireAuth>
                <Wishlist />{" "}
              </RequireAuth>
            }
          />
          <Route
            path="/cart"
            element={
              <RequireAuth>
                {" "}
                <Cart />{" "}
              </RequireAuth>
            }
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/mockman" element={<Mockman />} />
        </Routes>
      </div>
      <div className="App-footer"></div>
    </div>
  );
}

export default App;
