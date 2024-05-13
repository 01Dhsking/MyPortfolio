import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"

export const Project = () => {
  return (
    <div>
      <div className='mb-5 flex flex-col justify-center items-center'>
        <div className='text-lg text-gray-700'>Browse My Recent</div>
        <div className='mb-10 text-5xl font-bold'>Projects</div>
      </div>

      <div className='space-x-8 mb-9 flex justify-center'>

        <div className="bg-gray-100 p-10 w-1/3 flex flex-col items-center
        border border-gray-500 rounded rounded-3xl">
          <div className="rounded rounded-3xl overflow-hidden">
          <img src={project1} alt="projet1" />
          </div>
          <div className='my-5 mb-7 font-semibold text-3xl'>Project One</div>
          <div className="space-x-4 flex justify-center items-center">
            <button className='bg-gray-100 text-black py-3 px-10 border border-black
            rounded-full font-medium cursor-pointer hover:bg-gray-800 hover:text-white'>
              Github
            </button>
            <button className='bg-gray-100 text-black py-3 px-6 border border-black
            rounded-full font-medium cursor-pointer hover:bg-gray-800 hover:text-white'>
              Live Demo
            </button>
          </div>
        </div>

        <div className="bg-gray-100 p-10 w-1/3 flex flex-col items-center
        border border-gray-500 rounded rounded-3xl">
          <div className="rounded rounded-3xl overflow-hidden">
          <img src={project2} alt="projet2" />
          </div>
          <div className='my-5 mb-7 font-semibold text-3xl'>Project Two</div>
          <div className="space-x-4 flex justify-center items-center">
            <button className='bg-gray-100 text-black py-3 px-10 border border-black
            rounded-full font-medium cursor-pointer hover:bg-gray-800 hover:text-white'>
              Github
            </button>
            <button className='bg-gray-100 text-black py-3 px-6 border border-black
            rounded-full font-medium cursor-pointer hover:bg-gray-800 hover:text-white'>
              Live Demo
            </button>
          </div>
        </div>

      </div>

      <div className="mb-14 flex justify-center items-center">
        <div className="bg-gray-100 p-10 w-8/12 flex flex-col items-center
        border border-gray-500 rounded rounded-3xl">
          <div className="w-full rounded rounded-3xl overflow-hidden">
          <img src={project3} alt="projet3" />
          </div>
          <div className='my-5 mb-7 font-semibold text-3xl'>Project Two</div>
          <div className="space-x-4 flex justify-center items-center">
            <button className='bg-gray-100 text-black py-3 px-10 border border-black
            rounded-full font-medium cursor-pointer hover:bg-gray-800 hover:text-white'>
              Github
            </button>
            <button className='bg-gray-100 text-black py-3 px-6 border border-black
            rounded-full font-medium cursor-pointer hover:bg-gray-800 hover:text-white'>
              Live Demo
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}
