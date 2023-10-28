import Link from 'next/link'
import React from 'react'

/* The `interface PropsCard` is defining the structure of the props that the `CardCategory` component
expects to receive. It specifies that the props should include three properties: `id` of type
`number`, `name` of type `string`, and `imageUrl` of type `string`. This allows the component to
receive these props and use them within its implementation. */
interface PropsCard {
    id: number
    name: string
    imageUrl: string
}

/* The `export default` keyword is used to export a single value from a module. In this case, it is
exporting a function named `CardCategory` as the default export of the module. */
export default function CardCategory({ id, name, imageUrl }: PropsCard) {
    return (
        <Link href={`/ahorro/personal/${id}`}>
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
