import CardCategory from '@/Components/Card/CardCategory'

import { categories } from '@/mocks/categories'
import React from 'react'

export default function Savings () {
  return (
        <div className='px-5 flex flex-col gap-6 items-center'>
            <div className='flex flex-col gap-1 '>
                <h4 className='font-bold'>¿Qué te motiva a ahorrar?</h4>
                <p>Logra eso que tanto deseas</p>
            </div>
            <section className='flex gap-4 flex-wrap justify-center'>
                {
                    categories.map((category) => {
                      const { id, name, imageUrl } = category
                      return (
                            <CardCategory key={id} id={id} name={name} imageUrl={imageUrl} />
                      )
                    })
                }
            </section>
        </div>
  )
}
