import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <header className="bg-white border-gray-200 dark:bg-gray-500">
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image
            src="/images/logo.jpg"
            className="w-10 h-10 text-white  rounded-full"
            alt="logo"
            width={50}
            height={50}
          />
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          <span className="ml-3 text-xl text-white">PORTFOLIO</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-blue-700">
            Home
          </Link>
          <Link href="/About" className="mr-5 hover:text-blue-900">
            About
          </Link>
          <Link href="/Services" className="mr-5 hover:text-blue-900">
            <div className="dropdown">
              <button>Services</button>
              <div className="dropdown-content">
                <a href="#">Service 1</a>
                <a href="#">Service 2</a>
              </div>
            </div>
          </Link>
          <Link href="/Projects" className="mr-5 hover:text-blue-900">
            Projects
          </Link>
          <Link href="/Contact" className="mr-5 hover:text-blue-900">
            Contact
          </Link>
        </nav>
        <button className="inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-purple-400 rounded text-lg">
          Hire Me!
        </button>
      </div>
    </header>
  );
}
