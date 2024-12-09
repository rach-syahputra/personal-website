import MobileNavbar from '@/components/mobile-navbar'
import Navbar from '@/components/navbar'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar />
      <MobileNavbar />
      <div className='mx-auto w-full max-w-default'>{children}</div>
    </>
  )
}
