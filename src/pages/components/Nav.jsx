

import { motion } from 'framer-motion'
import { useState } from 'react'
import  * as React from 'react';
import { useMediaQuery } from '@chakra-ui/react'


export default function Nav(){
    const [toggled, setToggled] = useState(false)
    const matches = useMediaQuery('(min-width: 800px)');
console.log(matches)
    return (
        <nav className='relative mx-8 mb-24 flex justify-between items-center pt-12 pb-6 font-medium'>
           {matches[0]&&
            <svg
            className='absolute bottom-0 left-1/2 -translate-x-2/3 ml-2' 
                width='600' 
                height={4} 
                viewBox='0 0 250 4' 
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
            <path d='M2 2L428 2' stroke='#282828' strokeWidth={2} strokeLinecap='round'/>
            </svg>
}
            <div>
                <h1 className='text-2xl font-bold'>
                    <a href="/">MatFurgalski.</a>
                </h1>
            </div>
{matches[0]&&
            <div className='flex gap-12 mr-40'>
                <a href="/">Home</a>
                <a href="/projects">Projects</a>
                <a href="/about">About</a>
                <a href="/about/#expirience">Expirience</a>
                <a href="/about/#contact">Contact</a>
            </div>
}
<div>

</div>
{!matches[0] &&
            <div 
                onClick={()=>setToggled((prevToggle) => !prevToggle)}
                className='space-y-1.5 cursor-pointer z-50'
            >
                <motion.span
                 animate={{rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0}}
                 className='block h-0.5 w-8 bg-black'
                 ></motion.span>
                <motion.span
                animate={{width: toggled ? 0 : 32}}
                 className='block h-0.5 w-8 bg-black'
                 ></motion.span>
                <motion.span
                animate={{rotateZ: toggled ? -45 : 0, y: toggled ? -8 : 0}}
                 className='block h-0.5 w-8 bg-black'
                 ></motion.span>
            </div>
}
{toggled&& !matches[0]&&
            <motion.div 
            animate={{opacity:1, x:0}}
            initial={{opacity:0, x:25}}
            className='fixed flex bg-white bottom-0 left-0 w-full h-screen items-center justify-center z-40'>
            <div className='flex flex-col gap-24 text-lg'>
                <a href="/">Home</a>
                <a href="/projects">Projects</a>
                <a href="/about">About</a>
            </div>

            </motion.div>
}

        </nav>
    )
}