import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function ProfileRouter() {
  const { isAuthenticated } = useAuth()

  return isAuthenticated ? <Navigate to="/hsign" replace /> : <Navigate to="/flog" replace />
}
