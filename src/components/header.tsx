interface HeaderProps {
  children: React.ReactNode
}

export default function Header({ children }: HeaderProps) {
  return (
    <h1 className='text-center text-4xl font-bold lg:text-5xl'>{children}</h1>
  )
}
