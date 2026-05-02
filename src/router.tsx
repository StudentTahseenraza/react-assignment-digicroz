import { createRouter, createRoute, createRootRoute } from '@tanstack/react-router'
import Login from './pages/auth/Login'
import Register from './pages/Register'
import Users from './pages/Users'
import AddUser from './pages/AddUser'
import UpdateUser from './pages/UpdateUser'

const rootRoute = createRootRoute()

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/auth/login',
  component: Login,
})

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/auth/register',
  component: Register,
})

const usersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/users',
  component: Users,
})

const addUserRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/users/add',
  component: AddUser,
})

const updateUserRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/users/$id/update',
  component: UpdateUser,
})

export const routeTree = rootRoute.addChildren([
  loginRoute,
  registerRoute,
  usersRoute,
  addUserRoute,
  updateUserRoute,
])

export const router = createRouter({ routeTree })