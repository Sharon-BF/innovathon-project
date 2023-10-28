import CardBIll from '@/Components/Card/CardBIll';
import CardCategory from '@/Components/Card/CardCategory';
import CardSaving from '@/Components/Card/CardSaving';
import { bills } from '@/mocks/bills';
import { categories } from '@/mocks/categories';
import { savings } from '@/mocks/savings'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'



export default function Savings() {
    return (
        <div className='px-5 flex flex-col gap-6 items-center'>
            <div className='flex flex-col gap-1 '>
                <h4 className='font-bold'>¿Qué te motiva a ahorrar?</h4>
                <p>Logra eso que tanto deseas</p>
            </div>
            <section className='flex gap-4 flex-wrap justify-center'>
                {
                    categories.map((category) => {
                        const { id, name, imageUrl } = category;
                        return (
                            <CardCategory key={id} id={id} name={name} imageUrl={imageUrl} />
                        )
                    })
                }
            </section>
        </div>
    )
}
