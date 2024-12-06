interface HeaderProps {
  children: React.ReactNode
}

export default function Header({ children }: HeaderProps) {
  return (
    <h1 className='text-center text-3xl font-bold xs:text-4xl md:text-5xl lg:text-6xl'>
      {children}
    </h1>
  )
}
