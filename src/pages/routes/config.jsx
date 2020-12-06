import Dashboard from "../home/dashboard";

const privateRoute = [
  {
    path: "/dashboard",
    component: Dashboard,
    auth: true,
    label: "Dashboard",
  },
];

export default privateRoute;
