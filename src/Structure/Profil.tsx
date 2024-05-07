import photo from "../assets/photo.jpeg"
import { Linkedin } from 'lucide-react'
import { Github } from 'lucide-react';
import { useState } from 'react';

export const Profil = () => {

    const [isHovered1, setIsHovered1] = useState<boolean>(false);
    const [isHovered2, setIsHovered2] = useState<boolean>(false);

    
    function handleMouseEnter1() {
        setIsHovered1(true);
    }
    function handleMouseLeave1() {
        setIsHovered1(false);
    }
    function handleMouseEnter2() {
      setIsHovered2(true);
    }
    function handleMouseLeave2() {
      setIsHovered2(false);
    }

  return (
    <div className='space-x-20 flex justify-center items-center mb-40'>
        <img src={photo} alt="me" className='w-96 h-80 rounded-full' />
        <div className='flex flex-col justify-center items-center'>
            <div className='mb-3 text-gray-700 font-medium text-2xl'>Hello, I'm</div>
            <div className='mb-3 font-medium text-5xl'>John Doe</div>
            <div className='mb-5 font-medium text-3xl text-gray-700'>Frontend Developer</div>
            <div className='flex space-x-3 justify-center items-center'>
                <button className='p-3 border border-black
                rounded-full font-medium cursor-pointer'
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1}
                style={{backgroundColor: isHovered1 ? '#1f2937' :
                'white', color: isHovered1 ? 'white' : 'black'}}>
                    Download CV
                </button>
                <button className=' text-white p-3 border border-black
                rounded rounded-full font-medium cursor-pointer'
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
                style={{backgroundColor: isHovered2 ? 'black' : '#1f2937'}}>
                    Contact info
                </button>
            </div>
            <div className="mb-3"></div>
            <div className="flex space-x-3 justify-center ">
                <div className="rounded rounded-full border-white bg-black overflow-hidden">
                <Linkedin size={35} color="white" className="w-12 cursor-pointer"/>
                </div>
                <div className="rounded rounded-full border-white bg-black overflow-hidden">
                <Github size={35} color="white" className="w-12 cursor-pointer"/>
                </div>
            </div>
        </div>
    </div>
  )
}
