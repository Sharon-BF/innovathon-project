import Link from 'next/link'

export default function Ahorro() {
  return (
    <section className='max-w-3xl'>
      <ul className=' my-10  flex items-center gap-8'>
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
        {/* {
        categories.map(category => {
          const { id, name, description } = category
          return (
            <Link
              key={id}
              className='card'
              href={{
                pathname: '/ahorro',
                query: { id }
              }}
            >
              <h3>{name}</h3>
              <p className='my-3'>{description}</p>
            </Link>
          )
        })
      } */}
      </ul>
    </section>
  )
}
