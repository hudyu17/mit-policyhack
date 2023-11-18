import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Eviction Prevention Calculator',
  description: 'Identify the ideal interventions for your city',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
              <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏠</text></svg>"
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
