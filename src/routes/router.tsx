import { createRouter, createRoute, createRootRoute } from "@tanstack/react-router";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Users from "../pages/users/Users";

const rootRoute = createRootRoute();

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

export const router = createRouter({
  routeTree: rootRoute.addChildren([
    loginRoute,
    registerRoute,
    usersRoute,
  ]),
});