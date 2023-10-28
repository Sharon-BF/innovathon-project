import Link from 'next/link';
import React from 'react'

interface PropsCard {
    id: number;
    name: string;
    imageUrl: string;
}

export default function CardCategory({ id, name, imageUrl }: PropsCard) {
    return (
        <Link href={`/savings/${id}`}>
            <div className="w-fit bg-white border border-gray-200 rounded-lg shadow ">
                <div className='w-32 h-24 rounded-lg shadow'>
                    {
                        name === 'otros' ? <></> : <img className="rounded-t-lg w-full h-full object-cover " src={imageUrl} alt="" />
                    }
                </div>
                <div className="px-5 py-2.5 w-32">
                    <h5 className="mb-2 text-sm tracking-tight  capitalize ">{name}</h5>
                </div>
            </div>
        </Link>


    )
}
