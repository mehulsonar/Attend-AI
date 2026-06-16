import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import HomeScreen from './screens/HomeScreen'
import TeacherRegister from './pages/TeacherRegister'
import TeacherLogin from './pages/TeacherLogin'
function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomeScreen />}></Route>
        <Route path='/teacher-register' element={<TeacherRegister />}></Route>
        <Route path='teacher-login' element={<TeacherLogin/>}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
