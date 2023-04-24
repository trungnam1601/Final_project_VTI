import config from '../config/config';

//page
import Home from '../pages/Home/Home';
import Login from './../pages/Login/Login';
import Detail from './../pages/Detail/Detail';
import Favourite from './../pages/Favourite/Favourite';
import Register from './../pages/Register/Register';
import AdminPage from './../pages/AdminPage/AdminPage';
import AdminLayout from '../layouts/AdminLayout/AdminLayout';
import AddArticle from '../pages/AddArticle/AddArticle';
import Statistical from '../pages/Statistical/Statistical';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.login, component: Login },
    { path: config.routes.detail, component: Detail },
    { path: config.routes.favourite, component: Favourite },
    { path: config.routes.register, component: Register },
    { path: config.routes.admin, component: AdminPage, layout: AdminLayout },
    { path: config.routes.AddArticle, component: AddArticle, layout: AdminLayout },
    { path: config.routes.statistical, component: Statistical, layout: AdminLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
