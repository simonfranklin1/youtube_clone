import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Box } from '@mui/material'

function App() {

  return (
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Outlet />
    </Box>
  )
}

export default App
