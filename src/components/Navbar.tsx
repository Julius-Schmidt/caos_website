import Logo from '../assets/caos_logo.svg'
import { HashLink } from 'react-router-hash-link'

const links = [
   { to: '/', label: 'Download' },
   { to: '/#idea',     label: 'Idea'     },
   { to: '/#support',  label: 'Support'  },
]

export default function Navbar() {
  return (
    <header  className="w-full bg-white">
      <div className="relative w-full py-4">
        {/* logo */}
        <img
          src={Logo}
          alt="CAOS Logo"
          className="absolute left-[10%] top-1/2 transform -translate-y-1/2 h-20"
        />

        {/* nav */}
        <nav className="absolute inset-0 flex items-center justify-center">
          <ul className="flex space-x-24 text-[28px] font-medium">
            {links.map((link) => (
              <li key={link.to}>
                 <HashLink
                   to={link.to}
                   smooth
                   className="hover:opacity-75 transition-opacity"
                 >
                   {link.label}
                 </HashLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
