import "../App.css";
import Mockman from "mockman-js";
import {Routes, Route} from 'react-router-dom'
import { Home } from "./pages/Home";
import { ProductPage } from "./pages/ProductPage";
import { Wishlist } from "./pages/Wishlist";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login"
import { SignUp } from "./pages/SignUp";
import { RequireAuth } from "./RequireAuth";
import { Profile } from "./pages/Profile";
import {Header} from '../components/Header'
import { Footer } from "./Footer";

function App() {

  // const {state} = useContext(HomeContext)
  // const isLoggedIn = false
  return (
    <div className="App">
      <Header />

   <Routes>
    
    <Route path="/" element={<Home />}/>
    <Route path="/productpage" element={<ProductPage />}/>
    <Route path="/profile" element={<Profile />}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/signup" element={<SignUp />}/>
    <Route path="/wishlist" element={<RequireAuth><Wishlist /> </RequireAuth> }/>
    <Route path="/cart" element={<RequireAuth> <Cart /> </RequireAuth>}/>
    <Route path="/mockman" element={<Mockman />}/>
   </Routes>


   <Footer />
    </div>
  );
}

export default App;
