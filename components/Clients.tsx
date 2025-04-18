import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'

const Clients = () => {
    return (
        <div className='py-20' id='testimonials'>
            <h1 className='text-center text-white text-[40px] md:text-5xl lg:text-5xl'>

                Kind Words from {' '}
                <span className='text-purple'> Satisfied Clients</span>
            </h1>

            <div className='flex flex-col items-center '>
                <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />

                <div className='flex flex-wrap items-center justify-center gap-16 max-lg: mt-10'>
                    {companies.map(({ id, name, nameImg }) => (
                        <div key={id} className={`flex md:max-w-60 max-w-32 gap-4 h-13 w-35 ${id === 2 && '!h-5'} ${id === 4 && '!h-10 !w-30'}`}>
                            <img src={nameImg} alt={name} className={`md:w-39 w-25  ${id === 2 && "h-8"} ${id === 1 && "h-15"}`} />

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Clients