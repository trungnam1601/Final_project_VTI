import config from '../config/config';

//page
import Home from '../pages/Home/Home';
import Login from './../pages/Login/Login';
import Blog from './../pages/Blog/Blog';
import Detail from './../pages/Detail/Detail';
import Favourite from './../pages/Favourite/Favourite';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.login, component: Login },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.detail, component: Detail },
    { path: config.routes.favourite, component: Favourite },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
