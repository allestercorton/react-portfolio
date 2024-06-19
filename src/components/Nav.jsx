import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { navItems } from '../data'

const Nav = () => {
  // State to manage the visibility of the mobile menu
  const [nav, setNav] = useState(false)

  // Function to toggle the mobile menu
  const toggleNav = () => {
    setNav(!nav)
  }

  // Function to handle clicks on nav links
  const handleNavLinkClick = (id) => {
    // Close the mobile menu
    setNav(false)
    // Scroll smoothly to the target section
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className='bg-white fixed top-0 h-20 w-full flex justify-between items-center px-[2.5rem] md:px-[3rem] shadow-md z-40'>
      {/* Logo */}
      <a className='text-xl font-black' href='/'>
        Allester.dev
      </a>

      {/* Desktop navigation links */}
      <div className='hidden md:flex gap-6'>
        {navItems.map((item) => (
          <a className='font-bold text-base' href={item.id} key={item.id}>
            {item.text}
          </a>
        ))}
      </div>

      {/* Mobile menu icon */}
      <div
        className='block md:hidden cursor-pointer hover:text-blue-800'
        onClick={toggleNav}
      >
        <AiOutlineMenu size={24} />
      </div>

      {/* Mobile menu */}
      <div
        className={`bg-white h-screen w-full fixed md:hidden top-0 left-0 py-[1.8rem] px-[2.5rem] ease-in-out duration-300 z-50 transform ${
          nav ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Mobile menu close icon */}
        <div
          className='flex justify-end md:hidden cursor-pointer hover:text-blue-800'
          onClick={toggleNav}
        >
          <AiOutlineClose size={24} />
        </div>

        {/* Mobile navigation links */}
        <div className='h-full flex justify-center items-center flex-col gap-10 pb-7'>
          {navItems.map((item) => (
            <a
              className='text-2xl font-medium hover:text-blue-800'
              href={item.id}
              key={item.id}
              onClick={() => handleNavLinkClick(item.id)}
            >
              {item.text}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Nav
