import React from 'react'
import * as Switch from '@radix-ui/react-switch';

interface switchProps {
gridState: string,
setGrid: Function
}

const Switch_Grid = ({gridState, setGrid}:switchProps) => {
  const handle = () =>{
    if(gridState === 'mosaico')
    setGrid('single')
    else
    setGrid('mosaico')
  }
  return (
    <Switch.Root
    onCheckedChange={handle}
    className="absolute left-[-25px] max-[1400px]:top-[50px] top-[95px] w-[42px] h-[25px] shadow-[5px_10px_15px_rgba(0,0,0,0.2)]  bg-greyGlass1  rounded-full border-greyGlass2 border-[1px] border-solid   data-[state=checked]:bg-black outline-none cursor-pointer"
    id="airplane-mode" 
  >
    <Switch.Thumb className="block w-[20px] h-[20px] bg-gray-300 rounded-full  transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
  </Switch.Root>
  )
}

export default Switch_Grid