interface TitleProps {
  children: React.ReactNode
}

export default function Title({ children }: TitleProps) {
  return <h2 className='text-2xl font-bold md:text-3xl'>{children}</h2>
}
