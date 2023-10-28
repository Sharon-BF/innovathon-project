import LOGO from '../../public/logo.png'
import './layouts.css'

export function NavBar () {
  return (
    <nav>
        <div className='flex items-center'>
            <img src={LOGO.src} alt="logo" />
        </div>
        <button>Login</button>
    </nav>
  )
}
