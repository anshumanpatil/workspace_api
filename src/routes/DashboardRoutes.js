import { renderProtected } from "./renderProtected";
import { Profile } from '../components';

const routes = [
    {
      path: "/profile",
      component: Profile,
      isPublic: true
    }
]
const DashboardRoutes = renderProtected(routes);
export default DashboardRoutes;