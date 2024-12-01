interface HeaderProps {
  children: React.ReactNode
}

export default function Header({ children }: HeaderProps) {
  return (
    <h1 className='text-center text-5xl font-bold lg:text-6xl'>{children}</h1>
  )
}
