import './App.css'
import { AuthProvider } from './context/AuthContext'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Information from './pages/Information'
import Login from './pages/Login'
import PrivateRoute from './components/PrivateRoute'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route element={<PrivateRoute />}>
              <Route path='/dashboard' element={<Dashboard />}></Route>
            </Route>
            <Route element={<PrivateRoute/>}>
              <Route path='/information' element={<Information/>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
