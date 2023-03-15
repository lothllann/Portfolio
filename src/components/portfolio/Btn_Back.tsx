import { Link } from 'react-router-dom'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import grey from '@mui/material/colors/grey';



const Btn_Back = () => {
  return (
    <Link to='/port'>
        <button className="absolute left-0 top-0 w-[75px] h-[75px] shadow-[0_5px_15px_rgba(0,0,0,0.2)]  bg-greyGlass1 backdrop-blur-lg  rounded-[50%] border-greyGlass2 border-[1px] border-solid animate-slideUpAndFade transition-all ease-out hover:bg-ligth_green"> 
        <ArrowBackRoundedIcon sx={{color: grey, fontSize:50 }}/>
        </button>
    </Link>

  )
}

export default Btn_Back