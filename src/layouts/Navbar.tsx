'use client'
import LOGO from '../../public/logo.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useEffect, useState } from 'react'
import './layouts.css'

export function NavBar () {
  const [token, setToken] = useState(localStorage.getItem('token'))

  useEffect(() => {
    setToken(localStorage.getItem('token'))
  }, [localStorage.getItem('token')])

  const handleClick = () => {
    // Aquí puedes manejar la lógica de cierre de sesión
    localStorage.removeItem('token')
    setToken(null)
  }

  return (
    <nav>
      <div className='flex items-center'>
        <img src={LOGO.src} alt="logo" />
      </div>
      {
        (token === null || token === undefined || token === '')
          ? <button >Login</button>
          : <AccountCircleIcon onClick={handleClick} />
      }
    </nav>
  )
}
