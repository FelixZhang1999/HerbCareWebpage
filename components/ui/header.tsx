import Logo from '../common/logo'
import MobileMenu from './mobile-menu'

export default function Header() {
  return (
    <header className="absolute w-full z-30 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4 mt-10">
            {/* Logo */}
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <a
                  href="/"
                  className="font-medium text-gray-200 hover:text-gray-100 px-4 py-3 flex items-center transition duration-150 ease-in-out "
                  rel="noopener noreferrer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/posts"
                  className="font-medium text-gray-200 hover:text-gray-100 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                  rel="noopener noreferrer"
                >
                  Posts
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="font-medium text-gray-200 hover:text-gray-100 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                  rel="noopener noreferrer"
                >
                  Products
                </a>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
