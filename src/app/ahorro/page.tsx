import Link from 'next/link'

export default function Ahorro () {
  return (
    <main>

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
    </main>
  )
}
