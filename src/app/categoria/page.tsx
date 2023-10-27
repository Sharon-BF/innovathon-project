'use client'
import { useSearchParams } from 'next/navigation'
import { expense } from '@/mocks/expense'
import './category.css'
import { useState } from 'react'

export default function Category () {
  const search = useSearchParams()
  const [select, setSelect] = useState({
    isActive: false,
    idSlected: ''
  })
  const id = search.get('id')
  const category = expense.find(spent => spent.id === id)
  const groupCategories: Record<string, any[]> = {}
  category?.historial.forEach(item => {
    const { category } = item
    if (groupCategories[category] === undefined) {
      groupCategories[category] = []
    }
    groupCategories[category].push(item)
  })

  if (category === undefined) return <p>No Results</p>
  return (
    <main className="flex font-frubik flex-col items-center justify-between p-10">
      <h1>{category?.name}</h1>
      <section className='category__section'>
          <ul>
            {
              Object.entries(groupCategories).map(([key, value]) => {
                const total = value.reduce((acc, item) => acc + item.amount, 0)
                return (
                  <li key={key} className='category__item p-5 ' onClick={() => { setSelect({ isActive: !select.isActive, idSlected: key }) }}>
                    <div className='flex justify-between'>
                      <h2>{key}</h2>
                      <h2>S/.{total}</h2>

                    </div>
                    <ul className={`historyItems m-3 ${select.isActive && select.idSlected === key ? 'active' : ''}`}>
                      {
                        value.map(item => {
                          return (
                            <li key={item.id} className='flex justify-between'>
                              <p>{item.name}</p>
                              <p>S/.{item.amount}</p>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </li>
                )
              })
            }
          </ul>
      </section>
    </main>
  )
}
