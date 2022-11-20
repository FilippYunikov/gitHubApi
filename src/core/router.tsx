import { Routes ,Route } from 'react-router-dom';
import { PageHome } from "../pages/page-home/page-home";
import { PageUser } from "../pages/page-user/page-user";

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
