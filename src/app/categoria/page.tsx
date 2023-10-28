'use client'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { AreaChart, Tooltip, Area, CartesianGrid, XAxis } from 'recharts'

import { List, ListItemIcon, ListItemText, ListItem, Collapse } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood'

import { expense } from '@/mocks/expense'
import './category.css'

interface Data {
  name: string
  gasto: number
}
export default function Category () {
  const search = useSearchParams()
  const [select, setSelect] = useState({
    isActive: false,
    idSlected: ''
  })
  const id = search.get('id')
  const category = expense.find(spent => spent.id === id)

  const groupCategories: Record<string, any[]> = {}
  const data: Data[] = []

  let lastday = ''
  let amount = 0
  let amountPrev = 0

  category?.historial.forEach(item => {
    const { category } = item
    lastday === item.date
      ? amount = amountPrev + item.amount
      : amount = item.amount
    data.push({ name: (item.date.split('-'))[2] + '- oct', gasto: amount })
    amountPrev = amount
    lastday = item.date
    if (groupCategories[category] === undefined) {
      groupCategories[category] = []
    }
    groupCategories[category].push(item)
  })

  if (category === undefined) return <p>No Results</p>
  return (
    <main className="flex font-frubik flex-col items-center justify-between p-10">
      <h1>{category?.name}</h1>
      <AreaChart
      width={328}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}>
        <Area type="monotone" dataKey="gasto" stroke="#8884d8" fill="#8884d8" />
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <Tooltip />
      </AreaChart>
      <section className='category__section'>
        <h3>Historial de pagos:</h3>
          <ul>
            {
              Object.entries(groupCategories).map(([key, value]) => {
                const total = value.reduce((acc, item) => acc + item.amount, 0)
                return (
                  <List key={key}
                    sx={{ width: '100%', bgcolor: 'background.paper' }}
                    disablePadding
                    className='category__item py-3'
                    onClick={() => { setSelect({ isActive: !select.isActive, idSlected: key }) }}
                  >
                    <ListItem>
                      <ListItemIcon>
                        <FastfoodIcon/>
                      </ListItemIcon>
                      <ListItemText primary={key} />
                      S/.{total}
                    </ListItem>
                    <Collapse in={select.isActive && select.idSlected === key} timeout="auto" unmountOnExit>
                      <ul className='historyItems'>
                        {
                          value.map(item => {
                            return (
                              <List key={item.id} component="div" disablePadding className='px-3'>
                                <ListItem disableGutters>
                                  <ListItemIcon>
                                    {/* <StarBorder /> */}
                                  </ListItemIcon>
                                  <ListItemText primary={item.name} />
                                  s/. {item.amount}
                                </ListItem>
                              </List>
                            )
                          })
                        }
                      </ul>
                    </Collapse>
                  </List>
                  // <li key={key} className='category__item p-5 ' onClick={() => { setSelect({ isActive: !select.isActive, idSlected: key }) }}>
                  //   <div className='flex justify-between'>
                  //     <h2>{key}</h2>
                  //     <h2>S/.{total}</h2>

                //   </div>
                //   <ul className={`historyItems m-3 ${select.isActive && select.idSlected === key ? 'active' : ''}`}>
                //     {
                //       value.map(item => {
                //         return (
                //           <li key={item.id} className='flex justify-between'>
                //             <p>{item.name}</p>
                //             <p>S/.{item.amount}</p>
                //           </li>
                //         )
                //       })
                //     }
                //   </ul>
                // </li>
                )
              })
            }
          </ul>
      </section>
    </main>
  )
}
