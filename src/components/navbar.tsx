import NavLink from './elements/nav-link'

export default function Navbar() {
  return (
    <nav className='max-w-default fixed top-6 flex w-full items-center justify-center lg:top-8'>
      <ul className='shadow-default flex gap-4 rounded-md p-4'>
        <li>
          <NavLink href='#' active>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink href='#'>Projects</NavLink>
        </li>
      </ul>
    </nav>
  )
}
