import { icons } from '@/assets/icons'
import { name } from '@/mocks/bills'
import React from 'react'

interface CardProps {
    name: name
    amount: number
}

export default function CardBill({ name, amount }: CardProps) {
    return (
        <div className='flex py-3'>
            <div className='w-1/2 mx-4 flex gap-8  items-center'>
                <div>
                    {icons[name]}
                </div>
                <div className='w-36'>
                    <p>{name}</p>
                </div>
            </div>
            <div className='w-1/2'>
                <span>S/ {amount}</span>
            </div>
        </div>
    )
}
