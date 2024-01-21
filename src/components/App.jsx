import '../scss/app.scss'
import { Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Profile from './Profile';
import AuthRoute from './AuthRoute';
import Footer from './Footer';
import HouseList from './HouseList';
import CharacterList from './CharacterList';


function App () {

    return (
        <div className="container-app">
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/house" element={<HouseList />} />
                <Route path="/character" element={<CharacterList />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route 
                path="/myprofile" 
                element={<AuthRoute component={<Profile />} />} />
            </Routes>
            <Footer/>
            
        </div>
  );
}

export default App;
