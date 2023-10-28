import { icons } from '@/assets/icons'
import { categories } from '@/mocks/categories'
import Link from 'next/link'

export default function Grupal(type: number) {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-24">
        <h1>Organiza tus ahorros colectivos</h1>
        <section>
          <ul className='grid grid-cols-3 gap-4'>
            {
              categories.map((category) => {
                const { id, name, imageUrl } = category
                return (
                  <Link key={id} href={`/ahorro/grupal/${id}`} className='card'>
                    <div className='h-40 rounded-lg shadow flex items-center justify-center'>
                      {
                        name === 'otros' ?
                          <img className="" src={imageUrl} alt="" />
                          :
                          <img className="rounded-t-lg w-full h-full object-cover " src={imageUrl} alt="" />
                      }
                    </div>
                    <div className="px-5 py-2.5">
                      <h5 className="mb-2 text-sm tracking-tight  capitalize ">{name}</h5>
                    </div>
                  </Link>
                )
              })
            }

          </ul>
        </section>
      </main>
      <div className='max-w-lg flex flex-col gap-6 items-center'>
        <div><h2 className='font-semibold text-4xl'>Mis wardaditos</h2></div>
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
              <div><span className='text-bold text-2xl font-semibold'>Meta: S/ 10,000</span></div>
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

              <div><span className='text-bold text-2xl font-semibold'>Meta: S/ 18,000</span></div>

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
    </>
  )
}
