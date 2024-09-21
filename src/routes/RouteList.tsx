import {  Routes, Route, useLocation } from 'react-router-dom'

// Screen
import { RootScreen } from '@_src/components/Screen/RootScreen'

export const RouteList = () => {
  const location = useLocation()

  
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<RootScreen />} />
      <Route path="/home" element={<RootScreen />} />
    </Routes>
  )
}