import {BrowserRouter,Routes, Route} from "react-router-dom";
import Signin from "./pages/Signin";
import Signout from './pages/Signout';
import About from './pages/About';
import Profile from "./pages/Profile"
import Home from "./pages/Home"
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signin" element={<Signin />}/>
        <Route path="/signup" element={<Signout />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
