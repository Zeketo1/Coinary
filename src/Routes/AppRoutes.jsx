import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, DashBoard, Login, NotFound, Signup} from "../Pages/pageExports";
import NavBar from "../Components/Landing/NavBar";
import Withdraw from "../Components/Withdraw/Withdraw";
import { useState } from "react";
import ProfileNav from "../Components/Common/ProfileNav";
import CoinContextProvider from "../Contexts/CoinContextProvider";
import Miner from "../Pages/Miner";

const AppRoutes = () => {
    const [navBar, setNavBar] = useState(1);

    return (
        <BrowserRouter>
            <CoinContextProvider>
                {/* {navBar > 0 ? <NavBar /> : <ProfileNav />} */}
                {navBar > 0 && <NavBar />}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/dashboard" element={<DashBoard />} />
                    <Route path="/dashboard/:id" element={<DashBoard />} />
                    <Route
                        path="/withdraw"
                        element={<Withdraw setNavBar={setNavBar} />}
                    />
                    <Route
                        path="/miner"
                        element={<Miner setNavBar={setNavBar} />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </CoinContextProvider>
        </BrowserRouter>
    );
};

export default AppRoutes;
