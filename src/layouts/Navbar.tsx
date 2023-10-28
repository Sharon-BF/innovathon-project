'use client'
import { useRouter } from 'next/navigation'
import LOGO from '../../public/logo.png'
import './layouts.css'

export function NavBar () {
  const route = useRouter()
  const handleClick = () => {
    route.push('/login')
  }
  return (
    <nav>
        <div className='flex items-center'>
            <img src={LOGO.src} alt="logo" />
        </div>
        <button onClick={handleClick}>Login</button>
    </nav>
  )
}
