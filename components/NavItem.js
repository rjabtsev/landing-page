import Link from 'next/link'

const NavItem = (props) => {
  return (
    <li>
      <Link href={props.href}>
        <a className='transition-colors duration-300 hover:text-purple-500'>
          {props.text}
        </a>
      </Link>
    </li>
  )
}

export default NavItem
