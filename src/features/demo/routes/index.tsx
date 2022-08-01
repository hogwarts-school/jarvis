import { Navigate, Route, Routes } from 'react-router-dom'
import { RecoidDemo } from './Recoid'

export const DemoRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<RecoidDemo />} />
      <Route path="*" element={<Navigate to="." />} />
    </Routes>
  )
}
