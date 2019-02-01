
import { renderRoutes } from "react-router-config";
import { Dashboard, Login, Register, NotFound } from '../components';

const routes = [
    {
      path: "/",
      exact: true,
      component: Login
    },
    {
      path: "/register",
      component: Register
    },
    {
      path: "/dashboard",
      component: Dashboard
    },
    {
      path: "*",
      component: NotFound
    }
]
const MainRoutes = renderRoutes(routes);
export default MainRoutes;