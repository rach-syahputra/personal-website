interface HeaderProps {
  children: React.ReactNode
}

export default function Header({ children }: HeaderProps) {
  return (
    <h1 className='text-center text-4xl font-bold md:text-5xl lg:text-6xl'>
      {children}
    </h1>
  )
}
