import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'
import { profile, heroContents } from '../data'

const Hero = () => {
  return (
    <section className='min-h-screen w-full bg-gray-50 flex flex-col items-center text-center gap-4 pt-[5rem] px-[2rem]'>
      <img
        className='rounded-full mt-6 mb-2'
        src={profile.picture}
        alt={profile.name}
        height={320}
        width={320}
      />
      <h1 className='font-black text-[2.8rem] text-slate-800'>
        {heroContents.heading}
      </h1>
      <p className='text-[1.1rem] text-gray-700'>{heroContents.text}</p>
      <div className='flex flex-row gap-4 text-gray-800'>
        <a
          href='https://github.com/allestercorton'
          target='_blank'
          title='GitHub'
        >
          <AiOutlineGithub size={35} />
        </a>
        <a
          href='www.linkedin.com/in/allester-corton-8a1706224'
          target='_blank'
          title='LinkedIn'
        >
          <AiOutlineLinkedin size={35} />
        </a>
      </div>
    </section>
  )
}

export default Hero
