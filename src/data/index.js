import profilePicture from '../assets/allester-1.jpg'

import css_ from '../assets/css-3.svg'
import html_ from '../assets/html-5.svg'
import js_ from '../assets/js.svg'
import php_ from '../assets/php.svg'
import react_ from '../assets/react.svg'
import sql_ from '../assets/sql.svg'
import tailwind_ from '../assets/tailwind.svg'

export const profile = {
  name: 'Allester Corton',
  age: 22,
  address: 'Ormoc City, Philippines',
  email: 'cortonallester@gmail.com',
  phone: '09513666254',
  picture: profilePicture,
}

export const navItems = [
  { id: '#home', text: 'Home' },
  { id: '#about', text: 'About' },
  { id: '#projects', text: 'Projects' },
  { id: '#contacts', text: 'Contacts' },
]

export const heroContents = {
  heading: 'Full-Stack Web Developer',
  text: `Greetings! I'm ${profile.name}, a Full-Stack Web Developer from ${profile.address}.`,
}

export const stack = {
  css: css_,
  html: html_,
  js: js_,
  php: php_,
  react: react_,
  sql: sql_,
  tailwind: tailwind_,
}
