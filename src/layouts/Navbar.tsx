import LOGO from '../../public/logo.png'
import './layouts.css'

export function NavBar () {
  return (
    <nav>
        <div className='flex items-center'>
            <img src={LOGO.src} alt="logo" />
            <ul className='flex list-none ms-3'>
                <li>Gastos</li>
                <li>Ahorros</li>
            </ul>
        </div>
        <button>Login</button>
    </nav>
  )
}
