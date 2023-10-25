import { expense } from '@/mocks/expense'
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
                <li key={id} className='card'>
                  <h3>{name}</h3>
                  <p>{description}</p>
                </li>
              )
            })
          }
        </ul>
      </section>
    </main>
  )
}
