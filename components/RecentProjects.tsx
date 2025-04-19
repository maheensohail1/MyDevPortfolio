import React from 'react'
import {projects} from '@/data/'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  return (
    <div className='py-20' id='projects'>
        <h1 className='text-center text-white text-[40px] md:text-5xl lg:text-5xl'>

            A small selection of {' '}
            <span className='text-purple'> recent projects</span>
        </h1>

        <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
            {projects.map(({id, title, des, img, iconLists, link}) => (
                <div key={id} className='sm:h-[25rem] h-[25rem] lg:min-h-[32.5rem]  flex items-center justify-center sm:w-[572px] w-[80vw]'> 
                    <PinContainer title={link} href={link} >
                        <div className='relative flex items-center justify-center sm:w-96 w-[50vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10'>
                            <div className='relative w-auto h-full overflow-hidden lg:rounded-3xl bg-[#13162d] '>
                                <img src="./bg.png" alt ="bg-img" />
                            </div>
                            <img src={img} alt={title} className='z-10 absolute bottom-0' />
                        </div>
                        <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1 '>
                            {title}
                        </h1>

                        <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                            {des}
                        </p>

                        <div className='flex items-center justify-between mt-7 mb-3 '>
                            <div className='flex items-center'>
                                {iconLists.map((icon, index)=> (
                                    <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' style={{ transform: `translateX(-${5 * index * 2})`}}> 
                                    <img src= {icon} alt = {icon} className='p-2' />
                                    </div>
                                ))}
                            </div>

                            <div className='flex justify-center items-center'>
                                <p className='flex lg:text-xl md:text-xs text-sm text-purple'> Check Live Site</p>
                                <FaLocationArrow className='ms-3' color='#CBACF9' ></FaLocationArrow>
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>

  )
}

export default RecentProjects