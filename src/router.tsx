import React from "react";
import { Routes ,Route } from 'react-router-dom';
import { PageHome } from "./pages/PageHome/PageHome";
import { PageUser } from "./pages/PageUser/PageUser";

export const Router = () => {
    return (
        <Routes>
            <Route path="/home">
                <PageHome />
            </Route>
            <Route path="/user">
                <PageUser />
            </Route>
        </Routes>
    );
}
