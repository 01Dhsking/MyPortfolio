import { useState } from 'react';

export const ControlCenter = () => {

    const [isHovered1, setIsHovered1] = useState<boolean>(false);
    const [isHovered2, setIsHovered2] = useState<boolean>(false);
    const [isHovered3, setIsHovered3] = useState<boolean>(false);
    const [isHovered4, setIsHovered4] = useState<boolean>(false);
    
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
    function handleMouseEnter3() {
      setIsHovered3(true);
    }
    function handleMouseLeave3() {
      setIsHovered3(false);
    }
    function handleMouseEnter4() {
      setIsHovered4(true);
    }
    function handleMouseLeave4() {
      setIsHovered4(false);
    }


  return (
    <div className='mb-14 flex justify-center'>
      <div className="w-9/12 flex justify-between mt-10 mb-10">
          <div className="font-bold ">John Doe</div>
          <div className="flex justify-end">
            <button className="underline-offset-8 decoration-2 mx-3 cursor-pointer"
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
            style={{color: isHovered1 ? 'gray' : 'black',
            textDecorationLine: isHovered1 ? 'underline': ''}}>About</button>
            <button className="underline-offset-8 decoration-2 mx-3 cursor-pointer"
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
            style={{color: isHovered2 ? 'gray' : 'black',
            textDecorationLine: isHovered2 ? 'underline': ''}}>Experience</button>
            <button className="underline-offset-8 decoration-2 mx-3 cursor-pointer"
            onMouseEnter={handleMouseEnter3}
            onMouseLeave={handleMouseLeave3}
            style={{color: isHovered3 ? 'gray' : 'black',
            textDecorationLine: isHovered3 ? 'underline': ''}}>Projects</button>
            <button className="underline-offset-8 decoration-2 mx-3 cursor-pointer"
            onMouseEnter={handleMouseEnter4}
            onMouseLeave={handleMouseLeave4}
            style={{color: isHovered4 ? 'gray' : 'black',
            textDecorationLine: isHovered4 ? 'underline': ''}}>Contact</button>
          </div>
      </div>
    </div>
  )
}
