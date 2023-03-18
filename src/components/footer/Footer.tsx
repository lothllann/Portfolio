import footerImg from '../../assets/darth-vader.png'
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer className='mt-[200px] flex flex-col items-center'>
      <img className='w-[50px]' src={footerImg} alt="separador do footer" />

      <div className='flex gap-[10px] mt-[10px] mb-[30px]'>
        <div className='cursor-pointer hover:scale-125 transition-all'> <a href="https://www.instagram.com/ruupp___/"><InstagramIcon sx={{ fontSize: 40, color: "#E4405F" }}/> </a>  </div>
        <div className='cursor-pointer hover:scale-125 transition-all'> <a href="https://github.com/lothllann"><GitHubIcon sx={{ fontSize: 40, color: "#BABBBD" }} /> </a>  </div>
        <div className='cursor-pointer hover:scale-125 transition-all'> <a href="https://www.linkedin.com/in/nickolas-ruppenthal-38b2ba167/"><LinkedInIcon sx={{ fontSize: 40, color: "#0A66C2" }}/> </a> </div>
      </div>

    </footer>
  )
}

export default Footer