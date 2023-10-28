import React from 'react'

/* The `interface PropsCard` defines the structure of the props that the `CardSaving` component expects
to receive. It specifies that the component requires four props: `name` (a string), `image` (a
string), `amount` (a number), and `description` (a string). These props are used within the
component to display the name, image, amount, and description of a savings card. */
interface PropsCard {
    name: string
    image: string
    amount: number
    description: string
}

/**
 * The CardSaving function is a React component that renders a card with an image, name, description,
 * and a "Read more" button.
 * @param {PropsCard}  - - `name`: The name of the card.
 * @returns a JSX element, which represents a card component for displaying savings information.
 */
export default function CardSaving({ name, image, amount, description }: PropsCard) {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={image} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>
    )
}
