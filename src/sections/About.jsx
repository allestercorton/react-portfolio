import { about } from '../data'

const About = () => {
  return (
    <div className='min-h-screen w-full flex flex-col justify-center md:justify-between items-center md:flex-row gap-[3rem] px-6 py-[5rem] md:px-[12.5rem]'>
      <img
        className='rounded-xl w-full max-w-md h-auto'
        src={about.picture}
        alt='About Picture'
      />

      <div className='flex flex-col text-center md:text-left gap-5'>
        <h2 className='font-bold text-blue-700'>{about.section}</h2>
        <h1 className='font-bold text-2xl'>{about.title}</h1>
        <p className='text-lg text-gray-700'>{about.desc1}</p>
        <p className='text-lg text-gray-700'>{about.desc2}</p>
      </div>
    </div>
  )
}

export default About
