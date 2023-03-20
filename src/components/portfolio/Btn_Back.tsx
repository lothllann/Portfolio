import { Link } from 'react-router-dom'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import grey from '@mui/material/colors/grey';

const style = {
  color: grey,
  fontSize: 30
}

const Btn_Back = () => {
  return (
    <Link to='/port'>
        <button className="absolute left-[-25px] max-[1400px]:top-[0] top-[25px] w-[45px] h-[45px] shadow-[5px_10px_15px_rgba(0,0,0,0.2)]  bg-greyGlass1 backdrop-blur-lg  rounded-[50%] border-greyGlass2 border-[1px] border-solid animate-slideUpAndFade transition-all ease-out hover:bg-ligth_green"> 
        <ArrowBackRoundedIcon sx={style}/>
        </button>
    </Link>

  )
}

export default Btn_Back