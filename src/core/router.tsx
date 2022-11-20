import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { PageHome } from "../pages/page-home/page-home";
import { PageUser } from "../pages/page-user/page-current-user";
import { NotFound } from '../pages/not-found';

export const Navigation = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PageHome />} />
                <Route path="/user/:login" element={<PageUser />} />
                <Route element={<NotFound />} />
            </Routes>
        </Router>
    );
}
