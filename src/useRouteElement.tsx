import { useRoutes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import Login from './pages/Login'
import ProductList from './pages/ProductList'
import RegisterLayout from './layouts/RegisterLayout'
import Register from './pages/Register'

export default function useRouteElement() {
  const routerElement = useRoutes([
    {
      path: '/',
      element: (
        <MainPage>
          <ProductList />
        </MainPage>
      )
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    },
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    }
  ])
  return routerElement
}
