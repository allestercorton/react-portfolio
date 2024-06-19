import { stack } from '../data/index'

const TechStack = () => {
  const stackStyle =
    'w-[3.2rem] transition-transform duration-700 ease-in-out hover:-translate-y-5 cursor-pointer'

  return (
    <div className='py-[5rem] flex flex-col justify-center items-center md:flex-row md:justify-start md:gap-[2rem]'>
      <p className='w-[7rem] text-lg font-medium text-center border-b-2 md:border-b-0 md:border-r-2 border-gray-500 mb-6 md:mb-0 p-2'>
        Tech Stack
      </p>
      <div className='flex justify-center items-center flex-wrap gap-4'>
        <img className={stackStyle} src={stack.html} alt='HTML' title='HTML' />
        <img className={stackStyle} src={stack.css} alt='CSS' title='CSS' />
        <img
          className={stackStyle}
          src={stack.js}
          alt='JavaScript'
          title='JavaScript'
        />
        <img className={stackStyle} src={stack.php} alt='PHP' title='PHP' />
        <img className={stackStyle} src={stack.sql} alt='SQL' title='SQL' />
        <img
          className={stackStyle}
          src={stack.react}
          alt='React'
          title='React'
        />
        <img
          className={stackStyle}
          src={stack.tailwind}
          alt='Tailwind'
          title='Tailwind'
        />
      </div>
    </div>
  )
}

export default TechStack
