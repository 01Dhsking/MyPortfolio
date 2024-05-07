import photo2 from "../assets/photo2.jpeg"

export const AboutMe = () => {
  return (
    <div>
        <div className='mb-5 flex flex-col justify-center items-center'>
            <div className='text-gray-700'>Get To Know More</div>
            <div className='text-5xl font-bold'>About Me</div>
        </div>
        <div className='text-lg w-full px-40 mb-20 flex justify-center items-center'>
            <div className='w-full flex justify-between'>
                <div className='w-1/3 flex justify-center items-center'>
                    <img src={photo2} alt="moi" className='w-96 h-80 rounded-3xl' />
                </div>
                <div className='w-2/3 flex flex-col p-12'>
                    <div className='flex justify-between mb-8'>
                        <div className='h-40 w-64 flex  justify-center items-center
                            border border-gray-500 rounded rounded-3xl'>
                            <ul>   
                                <li className='text-center font-bold'>Experience</li>
                                <li className='text-center'>2+ years</li>
                                <li className='text-center'>Frontend Development</li>
                            </ul>
                        </div>
                        <div className=' h-40 w-64 flex flex-col justify-center items-center 
                            border border-gray-500 rounded  rounded-3xl'>
                            <ul>
                                <li  className='text-center font-bold'>Education</li>
                                <li className='text-center'>B.Sc. Bachelors Degree</li>
                                <li className='text-center'>M.Sc. Masters Degree</li>
                            </ul>
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
