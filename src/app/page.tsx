'use client'
import Link from 'next/link'
/**
 * The above function is a React csomponent for the Home page of an Innovathon application, which
 * includes a heading and a login button.
 * @returns a JSX element.
 */
export default function Home () {
  return (
    <main className="bg-gradient-to-r from-cyan-500 to-blue-500 flex min-h-screen flex-col items-center p-24">
      <div className='flex items-center gap-0'>
        <div className='text-white'>
          <h2 className='text-6xl'>Ahorra en automático con Warda</h2>
          <p className='text-yellow-400'>
            Es fácil, gratis y seguro
          </p>
          <p className='text-white'>
            Warda, la alcancía virtual del BCP, ahorra por ti desde S/1 al día de forma automática.

            Encuentranos en Vía BCP

            Regístrate ahora
          </p>
          <p>
            <a href="https://www.viabcp.com/warda" >Encuentranos en Vía BCP "</a>
          </p>
          <button className='py-2 px-8 bg-orange-600 rounded-full text-white'>
            Regístrate ahora
          </button>
        </div>
        <div className='w-1/2'>
          <img src="https://acdneu2wrdap01ecdn02.azureedge.net/assets-landing-nuevo/img/img-intro.png" alt="" />
        </div>
      </div>
    </main>
  )
}
