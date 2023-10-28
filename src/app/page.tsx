'use client'
import Link from 'next/link'
/**
 * The above function is a React component for the Home page of an Innovathon application, which
 * includes a heading and a login button.
 * @returns a JSX element.
 */
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Innovathon</h1>
      <Link className="bg-orange-500 py-2 px-8 rounded-full text-white hover:bg-orange-400" href="/login" onClick={() => {
        sessionStorage.setItem('time', '300')
      }}>Login</Link>
    </main>
  )
}
