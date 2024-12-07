import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import Navbar from '@/components/navbar'
import '../globals.css'
import MobileNavbar from '@/components/mobile-navbar'

const geist = Geist({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  style: ['normal'],
  variable: '--font-geist'
})

export const metadata: Metadata = {
  title: 'Rachmat Syahputra',
  description: 'Rachmat Syahputra`s portfolio website',
  icons: '/r-icon.jpg'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${geist.variable} bg-dark text-light antialiased`}>
        <Navbar />
        <MobileNavbar />
        <div className='mx-auto w-full max-w-default'>{children}</div>
      </body>
    </html>
  )
}
