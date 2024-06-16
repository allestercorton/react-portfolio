import { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Nav = () => {
  const [navVisible, setNavVisible] = useState(true)
  const [nav, setNav] = useState(false)

  const handleScroll = () => {
    const currentScrollPos = window.scrollY
    const prevScrollPos = window.prevScrollPos || 0

    if (currentScrollPos > prevScrollPos) {
      setNavVisible(false)
    } else {
      setNavVisible(true)
    }

    window.prevScrollPos = currentScrollPos
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleNav = () => {
    setNav(!nav)
  }

  const navItems = [
    { id: 1, text: 'Home', itemId: '#home' },
    { id: 2, text: 'About', itemId: '#about' },
    { id: 3, text: 'Stack', itemId: '#stack' },
    { id: 4, text: 'Project', itemId: '#project' },
    { id: 5, text: 'Contact', itemId: '#contact' },
  ]

  return (
    <nav
      className={`h-20 bg-slate-950 text-white flex justify-between items-center px-4 z-10 transition-transform duration-300 ${
        navVisible ? 'translate-y-0' : '-translate-y-full'
      } fixed w-full top-0`}
    >
      <a
        href='/'
        className='text-indigo-500 text-xl font-medium cursor-pointer'
      >
        EverDev
      </a>

      <div className='hidden md:flex gap-8'>
        {navItems.map((item) => (
          <a
            className='relative text-slate-200 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-slate-200 after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-right hover:after:bg-indigo-500'
            href={item.itemId}
            key={item.id}
          >
            {item.text}
          </a>
        ))}
      </div>

      <div onClick={handleNav} className='block md:hidden cursor-pointer'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={`bg-slate-900 flex flex-col fixed md:hidden right-0 top-20 w-48 ease-in-out duration-300 transform ${
          nav ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navItems.map((item) => (
          <a
            className='relative text-slate-200 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-slate-200 after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-right hover:after:bg-indigo-500 p-3'
            href={item.itemId}
            key={item.id}
          >
            {item.text}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Nav
