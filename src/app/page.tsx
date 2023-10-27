'use client'
import { expense } from '@/mocks/expense'
import Link from 'next/link'

export default function Home () {
  return (
    <main className="flex font-frubik flex-col items-center justify-between p-10">
      <h1>Gestiona tus gastos sin esfuerzo</h1>
      <section>
        <ul className='cards-container my-10'>
          {
            expense.map(spent => {
              const { id, name, description } = spent
              return (
                <Link
                  key={id}
                  className='card'
                  href={{
                    pathname: '/categoria',
                    query: { id }
                  }}
                >
                  <h3>{name}</h3>
                  <p className='my-3'>{description}</p>
                </Link>
              )
            })
          }
        </ul>
      </section>
    </main>
  )
}
