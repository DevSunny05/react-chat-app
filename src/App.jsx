import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Chat from './pages/chat/Chat'
import Login from './pages/login/Login'
import ProfileUpdate from './pages/profileUpdate/ProfileUpdate'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Routes>
        <Route path='/chat' element={<Chat/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<ProfileUpdate/>}/>
      </Routes>
    </div>
  )
}

export default App