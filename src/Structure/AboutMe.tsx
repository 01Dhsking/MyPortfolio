import React from 'react'
import photo2 from "../assets/photo2.jpeg"

export const AboutMe = () => {
  return (
    <div >
        <div className='mb-5 flex flex-col justify-center items-center'>
            <div className='text-gray-700'>Get To Know More</div>
            <div className='font-medium text-5xl'>About Me</div>
        </div>
        <div className='mb-20 flex justify-center items-center'>
            <div className='px-28 w-9/12  flex justify-between'>
                <div className='flex justify-center items-center'>
                    <img src={photo2} alt="moi" className='w-96 h-80 rounded-3xl' />
                </div>
                <div className='max-w-xs flex flex-col'>
                    <div className='flex space-x-7 mb-8'>
                        <div className='flex flex-col justify-center items-center
                            border border-gray-500 rounded px-16 rounded-3xl'>
                            <div>Experience</div>
                            <div>2+ years</div>
                            <div>Frontend Development</div>
                        </div>
                        <div className='flex flex-col justify-center items-center 
                            border border-gray-500 rounded px-16 rounded-3xl'>
                            <div>Education</div>
                            <div>B.Sc. Bachelors Degree</div>
                            <div>M.Sc. Masters Degree</div>
                        </div>
                    </div>
                    <div className='w-full'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Veritatis consequatur nam numquam, totam similique a ad 
                        placeat modi, laboriosam molestiae excepturi corporis hic
                        vero delectus labore quis repellendus quas sequi!
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
