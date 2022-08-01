import { useRoutes } from 'react-router-dom'
import { HomeRoutes } from '@/features/home'

export const AppRoutes = () => {
  const commonRoutes = [{ path: '*', element: <HomeRoutes /> }]

  const element = useRoutes([...commonRoutes])

  return <>{element}</>
}
