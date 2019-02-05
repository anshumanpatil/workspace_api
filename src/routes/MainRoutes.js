import { renderProtected } from "./renderProtected";
import { Dashboard, Login, Register, NotFound } from '../components';

const routes = [
    {
      path: "/",
      exact: true,
      component: Login,
      isPublic: true,
      isAsync:true
    },
    {
      path: "/register",
      component: Register,
      isPublic: true,
      isAsync:true
    },
    {
      path: "/dashboard",
      component: Dashboard,
      isPublic: false,
      redirectNonPublic: Login
    },
    {
      path: "*",
      component: NotFound,
      isPublic: true
    }
]
const MainRoutes = renderProtected(routes);
export default MainRoutes;