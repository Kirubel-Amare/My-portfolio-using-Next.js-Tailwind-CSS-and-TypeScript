import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Your Name - Portfolio',
  description: 'Full-stack developer specializing in modern web technologies',
  keywords: 'developer, portfolio, nextjs, react, typescript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <body className={inter.className}>
        <div className="min-h-screen bg-white flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}