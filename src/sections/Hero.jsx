import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'
import { profile, heroContents } from '../data'
import TechStack from '../components/TechStack'

const Hero = () => {
  return (
    <section className='min-h-screen w-full bg-gray-50 pt-[5rem] md:pt-[11rem] px-6 md:px-[12.5rem] md:mt-[-3.1rem]'>
      <div className='flex flex-col md:flex-row-reverse items-center md:justify-center gap-8 md:gap-[11rem] text-center md:text-left'>
        {/* Profile picture */}
        <img
          className='rounded-full mt-6 mb-2 h-[16rem] w-[16rem] sm:h-[17rem] sm:w-[17rem] md:h-[18rem] md:w-[18rem] lg:h-[20.8rem] lg:w-[20.8rem]'
          src={profile.picture}
          alt={profile.name}
        />

        <div className='w-full md:w-[30rem]'>
          {/* Heading title */}
          <h1 className='font-bold text-4xl sm:text-5xl sm:font-bold md:text-6xl text-slate-800'>
            {heroContents.heading}
          </h1>

          {/* Description text */}
          <p className='text-lg sm:text-xl text-gray-700 mt-5'>
            {heroContents.text}
          </p>

          {/* Social Icons */}
          <div className='flex justify-center md:justify-start gap-4 text-gray-800 mt-6'>
            <a
              href='https://github.com/allestercorton'
              target='_blank'
              rel='noopener noreferrer'
              title='GitHub'
            >
              <AiOutlineGithub size={35} />
            </a>
            <a
              href='https://www.linkedin.com/in/allester-corton-8a1706224/'
              target='_blank'
              rel='noopener noreferrer'
              title='LinkedIn'
            >
              <AiOutlineLinkedin size={35} />
            </a>
          </div>
        </div>
      </div>

      {/* Tech stack Component */}
      <TechStack />
    </section>
  )
}

export default Hero
