import profilePicture from '../assets/allester-1.jpg'

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
