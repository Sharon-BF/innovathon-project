import { categories } from '@/mocks/categories'
import Link from 'next/link'

export default function Grupal () {
  return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h1>Organiza tus ahorros colectivos</h1>
            <section>
              <ul className='grid grid-cols-3 gap-4'>
                  {
                      categories.map((category) => {
                        const { id, name, imageUrl } = category
                        return (
                          <Link key={id} href={`/ahorro/grupal/${id}`} className='card'>
                            <div className='h-40 rounded-lg shadow'>
                                {
                                    name === 'otros' ? <></> : <img className="rounded-t-lg w-full h-full object-cover " src={imageUrl} alt="" />
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
  )
}
