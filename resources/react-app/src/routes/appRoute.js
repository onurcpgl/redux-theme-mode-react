import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import RootLayout from "../layouts/rootLayout";

function AppRoute() {
    return (
        <Routes>
            <Route>
                <Route path="" element={<RootLayout />}>
                    <Route path="/" element={<Home />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default AppRoute;
