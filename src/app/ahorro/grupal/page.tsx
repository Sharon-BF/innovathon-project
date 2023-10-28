'use client'

import { categories } from '@/mocks/categories'
import { useRouter } from 'next/navigation'

export default function Grupal (type: number) {
  const route = useRouter()
  const handleNavigate = (id: number) => {
    route.push(`/ahorro/grupal/${id}`)
    localStorage.setItem('id', id.toString())
  }
  return (
    <>
    <main className="flex min-h-screen flex-col items-center p-10">
      <h3 className='my-10'>Organiza tus ahorros colectivos</h3>
      <section>
        <ul className='grid grid-cols-3 gap-4'>
          {
            categories.map((category) => {
              const { id, name, imageUrl } = category
              const idSelect = localStorage.getItem('id')
              const display = localStorage.getItem('display')
              return (
                <li key={id} onClick={() => { handleNavigate(id) }} className='card'>
                  <div className='h-40 rounded-lg shadow flex items-center justify-center'>
                    {
                      name === 'otros'
                        ? <img className="" src={imageUrl} alt="" />
                        : <img className="rounded-t-lg w-full h-full object-cover " src={imageUrl} alt="" />
                    }
                  </div>
                  <div className={`px-5 py-2.5 ${idSelect === id.toString() && display === 'yes' ? 'bg-indigo-500 rounded-b-lg' : ''}`}>
                    <h5 className="mb-2 text-sm tracking-tight  capitalize ">{name}</h5>
                  </div>
                </li>
              )
            })
          }

          </ul>
        </section>
      </main>

    </>
  )
}
