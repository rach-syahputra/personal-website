export default function ProjectDetailLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='mx-auto w-full max-w-screen-lg p-4 lg:px-0 lg:py-8'>
      {children}
    </div>
  )
}
