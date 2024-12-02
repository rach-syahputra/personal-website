interface HeaderProps {
  children: React.ReactNode
}

export default function Header({ children }: HeaderProps) {
  return (
    <h1 className='text-center text-6xl font-bold lg:text-7xl'>{children}</h1>
  )
}
