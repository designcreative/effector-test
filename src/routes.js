import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

const routes = [
    { path: "/pokemon/:id", component: Profile },
    { path: "/", component: Dashboard },
];

export default routes;
