import { useParams } from 'react-router-dom'

export const HomeB = () => {
  const { id } = useParams()
  return <h1>HomeB page {id}</h1>
}
