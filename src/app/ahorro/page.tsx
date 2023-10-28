'use client'
import Link from 'next/link'
import { icons } from '@/assets/icons'
import { useEffect, useState } from 'react'

export default function Ahorro () {
  const [idSelect, setIdSelect] = useState<string | null>('')
  useEffect(() => {
    const idS = localStorage.getItem('display')
    setIdSelect(idS)
  }, [])

  return (
    <main className='flex items-center'>

      <section className='section-ahorro'>
        <ul className='grid grid-cols-2 my-10 gap-8 items-center mx-24'>
          <Link
            className='card px-4 py-6'
            href={{
              pathname: '/ahorro/personal'
            }}
          >
            <h3>Cuenta Personal</h3>
            <p className='my-3'>Categoriza tus ahorros e impúlsalos con metas</p>
          </Link>
          <Link
            className='card px-4 py-6'
            href={{
              pathname: '/ahorro/grupal'
            }}
          >
            <h3>Cuenta Grupal</h3>
            <p className='my-3'>Realiza ahorros grupales e incrementa tus posibilidades</p>

          </Link>
        </ul>
      </section>
      <div className={`max-w-lg flex flex-col gap-6 items-center py-10 ${idSelect === 'yes' ? '' : 'hidden'}`}>
        <div><h1 className='font-semibold'>Mis wardaditos</h1></div>
        <div className='flex gap-2.5 p-2.5 w-full bg-blue-50 rounded-lg'>
          <div>
            {icons.character}
          </div>
          <div>
            <div className='text-sm flex flex-col gap-3'>
              <div className='flex justify-between'>
                <p className='font-semibold text-lg'>Nuestro hogar</p>
                <p>2.5%</p>
              </div>
              <div>
                <svg width="386" height="5" viewBox="0 0 386 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="386" height="4" transform="translate(0 0.571289)" fill="white" />
                  <rect width="106" height="4" transform="translate(0 0.571289)" fill="#06CC60" />
                </svg>
              </div>
              <div>
                <span className='w-4 h-4 bg-green-600' />
                <div>Tu aporte: <span className='font-semibold'>S/ 400.00</span></div>
              </div>
              <div>
                <span className='w-1 h-1 bg-yellow-400' />
                <div>Aporte de Sharon: <span className='font-semibold'>S/ 400.00</span></div>
              </div>
              <div><span className='text-bold text-xl font-semibold'>Meta: S/ 10,000</span></div>
              <div></div>
            </div>
          </div>
        </div>
        <div className='flex gap-2.5 p-2.5 w-full bg-blue-50 rounded-lg'>
          <div>
            {icons.character}
          </div>
          <div>
            <div className='text-sm'>
              <div className='flex justify-between'>
                <p className='font-semibold'>Estudios</p>
                <p>37%</p>
              </div>
              <div>
                <svg width="386" height="5" viewBox="0 0 386 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="386" height="4" transform="translate(0 0.571289)" fill="white" />
                  <rect width="160" height="4" transform="translate(0 0.571289)" fill="#06CC60" />
                </svg>
              </div>
              <div>
                <div>Progreso: <span className='font-semibold'>S/ 500.00</span></div>
              </div>

              <div><span className='text-bold text-xl font-semibold'>Meta: S/ 18,000</span></div>

            </div>
          </div>
        </div>
        <div className='flex'>
          <button className='text-lg rounded-md text-white bg-blue-700 py-4 px-8  '>ver todos</button>
        </div>
        <div>
          <p>Si tu tiempo de ahorro es mayor a 6 meses, puedes ganar intereses a una tasa de hasta 6.5% TCEA.</p>
        </div>
      </div>
    </main>
  )
}
