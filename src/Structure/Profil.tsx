import profile_pic from "../assets/WhatsApp Image 2025-02-17 at 11.08.54 PM.jpeg"
import { Linkedin } from 'lucide-react'
import { Github } from 'lucide-react';

export const Profil = () => {

  return (
    <div className='space-x-20 flex justify-center items-center mb-40'>
        <img src={profile_pic} alt="me" className='w-96 h-96 rounded-full' />
        <div className='flex flex-col justify-center items-center'>
            <div className='mb-3 text-gray-700 font-medium text-xl'>Bonjour, je suis</div>
            <div className='mb-3 font-semibold text-5xl'>Dahissiho Ulrich</div>
            <div className='mb-5 font-semibold text-3xl text-gray-700'>full-stack développeur</div>
            <div className='flex space-x-3 justify-center items-center'>
                {/* <button className='bg-white text-black p-3 border border-black
                rounded-full font-medium cursor-pointer hover:bg-gray-800 hover:text-white'>
                    Download CV
                </button> */}
                <button className='bg-gray-800 text-white p-3 border border-black
                rounded-full font-medium cursor-pointer hover:bg-black hover:text-white'>
                    Contact info
                </button>
            </div>
            <div className="mb-3"></div>
            <div className="flex space-x-4 justify-center ">
                <div className="rounded-full border-white bg-black overflow-hidden">
                <Linkedin size={35} color="white" className="w-12 cursor-pointer"/>
                </div>
                <div className="rounded-full border-white bg-black overflow-hidden">
                <Github size={35} color="white" className="w-12 cursor-pointer"/>
                </div>
            </div>
        </div>
    </div>
  )
}
