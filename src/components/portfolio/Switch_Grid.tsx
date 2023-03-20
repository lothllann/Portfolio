import React from 'react'
import * as Switch from '@radix-ui/react-switch';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import ViewDayRoundedIcon from '@mui/icons-material/ViewDayRounded';
import { grey } from '@mui/material/colors';

interface switchProps {
gridState: string,
setGrid: Function
}

const style = {
  fontSize: 30,
  color: grey
}

const Switch_Grid = ({gridState, setGrid}:switchProps) => {
  const [iconGrid, setIconGrid] = React.useState<boolean>()
  React.useEffect(() => {
    if(gridState === 'single')
    setIconGrid(true)
    else
    setIconGrid(false) 
  }, [gridState])
  
  const handle = () =>{
    if(gridState === 'mosaico')
    setGrid('single')
    else
    setGrid('mosaico')
  }
  return (
    <div className='mt-[75px] absolute left-[-25px] max-[1400px]:top-[0] top-[25px] flex'>
    {iconGrid ?
     <div className='absolute left-[-35px] top-[-3px]'>
      <ViewDayRoundedIcon style={style}/>
    </div> : null}
    <Switch.Root
    onCheckedChange={handle}
    className="w-[42px] h-[25px] shadow-[5px_10px_15px_rgba(0,0,0,0.2)]  bg-greyGlass1  rounded-full border-greyGlass2 border-[1px] border-solid   data-[state=checked]:bg-black outline-none cursor-pointer"
    id="airplane-mode">
    <Switch.Thumb className="block w-[20px] h-[20px] bg-gray-300 rounded-full  transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
    </Switch.Root>
    {!iconGrid ?
    <div className='absolute right-[-35px] top-[-3px]'>
      <GridViewRoundedIcon style={style}/>
    </div>  : null}
    </div>

  )
}

export default Switch_Grid