import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kisan Connect',
  description: 'KisanConnect: Your direct link to farm-fresh goodness. Explore a world of locally sourced produce straight from the heart of Indian farms. Connecting farmers and consumers for a harvest of quality and authenticity.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
