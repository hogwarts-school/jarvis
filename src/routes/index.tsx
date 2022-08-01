import { useRoutes } from 'react-router-dom'
import { HomeRoutes } from '@/features/home'
import { DemoRoutes } from '@/features/demo'

export const AppRoutes = () => {
  const commonRoutes = [
    { path: '*', element: <HomeRoutes /> },
    { path: '/demo', element: <DemoRoutes /> },
  ]

  const element = useRoutes([...commonRoutes])

  return <>{element}</>
}
