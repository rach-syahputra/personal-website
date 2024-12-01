interface TitleProps {
  children: React.ReactNode
}

export default function Title({ children }: TitleProps) {
  return <h2 className='text-xl font-bold md:text-2xl'>{children}</h2>
}
