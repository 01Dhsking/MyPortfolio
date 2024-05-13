
export const ControlCenter = () => {
    
  return (
    <div className='mt-8 mb-36 flex justify-center'>
      <div className="w-9/12 flex justify-between">
          <div className="text-4xl font-normal">John Doe</div>
          <div className="flex justify-end">
            <button className="text-2xl font-normal underline-offset-8 decoration-2
            mx-5 cursor-pointer hover:text-gray-500 hover:underline">About</button>
            <button className="text-2xl font-normal underline-offset-8 decoration-2
            mx-5 cursor-pointer hover:text-gray-500 hover:underline">Experience</button>
            <button className="text-2xl font-normal underline-offset-8 decoration-2
            mx-5 cursor-pointer hover:text-gray-500 hover:underline">Projects</button>
            <button className="text-2xl font-normal underline-offset-8 decoration-2
            mx-5 cursor-pointer hover:text-gray-500 hover:underline">Contact</button>
          </div>
      </div>
    </div>
  )
}
