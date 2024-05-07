export const ControlCenter = () => {
  return (
    <div className='my-20 flex flex-col justify-center items-center'>
      <div className="w-9/12 flex justify-between mt-10 mb-10">
          <div className="font-bold ">John Doe</div>
          <div className="flex justify-end items-center">
              <div className="mx-3 cursor-pointer">About</div>
              <div className="mx-3 cursor-pointer">Experience</div>
              <div className="mx-3 cursor-pointer">Projects</div>
              <div className="mx-3 cursor-pointer">Contact</div>
          </div>
      </div>
    </div>
  )
}
