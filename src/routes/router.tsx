import {
  createRouter,
  createRoute,
  createRootRoute,
  Outlet,
} from "@tanstack/react-router";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Users from "../pages/users/Users";
import AddUser from "../pages/users/AddUser";
import UpdateUser from "../pages/users/UpdateUser";

const RootLayout = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "20px",
      }}
    >
      <Outlet />
    </div>
  );
};

const rootRoute = createRootRoute({
  component: RootLayout,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/auth/login",
  component: Login,
});

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/auth/register",
  component: Register,
});

const usersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/users",
  component: Users,
});

const addUserRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/users/add",
  component: AddUser,
});

const updateUserRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/users/$id/update",
  component: UpdateUser,
});

export const router = createRouter({
  routeTree: rootRoute.addChildren([
    loginRoute,
    registerRoute,
    usersRoute,
    addUserRoute,
    updateUserRoute,
  ]),
});