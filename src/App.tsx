import { useRoutes } from 'react-router-dom'
import MainPage from './pages/MainPage'

function App() {
  let routerElement = useRoutes([
    {
      path: '/',
      element: <MainPage />
    }
  ])

  return routerElement
}

export default App
