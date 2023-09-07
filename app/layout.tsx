import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './header'
import Footer from './footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GOBCO ',
  description: 'GOBCO Company Limited is a general building and road construction company, with team of individuals that has been in the building and road construction industry since the year 2000 who have been working as seperate entities prior to being consolidated into one body known as GOBCO Company Limited.',
  keywords: ['GOBCO','GOBCO Ghana','Company Limited','Construction Company']
}

type rootChildren = {
  children: React.ReactNode
}

export default function RootLayout({
  children
}: rootChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
