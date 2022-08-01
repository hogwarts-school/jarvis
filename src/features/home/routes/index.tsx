import { Navigate, Route, Routes } from 'react-router-dom'
import { HomeA } from './HomeA'
import { HomeB } from './HomeB'

export const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<HomeA />} />
      <Route path=":id" element={<HomeB />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  )
}
