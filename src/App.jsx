import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const [authStatus, setAuthStatus] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
        setAuthStatus(true)
      } else {
        dispatch(logout())
      }
    })
    .catch(err => {
      console.log("Error : ", err)
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className='flex flex-wrap content-between'>
      <div className='min-h-screen flex flex-col w-full block'>
        <Header/>
        <main className='p-2 grow'>
            {authStatus ? <Outlet /> : <div className='font-bold text-2xl'>Need To Login To See Blogs</div>}
            
        </main>
        <Footer/>
      </div>
    </div>
  ) : (<div>Loading...</div>)
}

export default App
