import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// import { NavBar } from '@/layouts'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Innovathon',
  description: 'Generated by create next app'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {/* <NavBar/> */}
        {children}
      </body>
    </html>
  )
}
