import Image from 'next/image'
import Link from 'next/link'
import CmtiLogo from '../public/cmti.jpeg'
import { Nav_LINKS } from '@/constants/data'

function Header() {
  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
      <Link href='/' className=''>
      <Image src={CmtiLogo} alt='logo' width={100} height={35} />
      </Link>

      <ul className='hideen h-full gap-12 lg:flex'>
        {
          Nav_LINKS.map((link, index) => (
            <Link href={link.href} key={index} className='regular-20 text-gray-50 flexCenter cursor-pointer pb-1.5 font-semibold transition-all hover:font-bold'>
              {link.label}
            </Link>
          ))
        }
      </ul>
    </nav>
  )
}

export default Header
