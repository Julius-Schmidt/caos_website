import { Link } from 'react-router-dom'

const links = [
  { to: '/terms', label: 'Terms of Service' },
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/impressum', label: 'Impressum' },
]

export default function Footer() {

  return (
    <footer className="w-full bg-white py-6 px-[10vw]">
      <ul className="flex justify-between w-full text-sm text-gray-600">
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link to={to} className="hover:underline">
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-6 text-center text-sm text-gray-600">
        © 2025 CAOS Network UG (haftungsbeschränkt)
      </div>
    </footer>
  )
}
