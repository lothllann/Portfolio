import * as HoverCard from "@radix-ui/react-hover-card";
interface CardProps {
  name: string;
  srcImg: string;
  about: string;
  socialMedia: string;
  link: string;
}

const HoverCardElement = ({
  name,
  srcImg,
  about,
  socialMedia,
  link,
}: CardProps) => {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <a
          className="scale-0 animate-showUp bg-blackGlass border-greyGlass2 border-2 border-solid h-[100px] w-[100px] max-[1400px]:h-[75px] max-[1400px]:w-[75px] xl:p-2 rounded-lg p-3 flex justify-center align-middle cursor-pointer shadow-[0_5px_15px_rgba(0,0,0,0.2)] transition-all ease-out hover:bg-greyGlass3 "
          href={link}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img className="rounded-xl" src={srcImg} alt={`icone do ${name}`} />
        </a>
      </HoverCard.Trigger>

      <HoverCard.Portal>
        <HoverCard.Content
          className="relative z-50 w-[300px]  p-5 shadow-[0_5px_15px_rgba(0,0,0,0.2)]  bg-greyGlass1 backdrop-blur-lg  rounded-md animate-slideUpAndFade data-[state=open]:transition-all"
          sideOffset={5}
        >
          <div className="flex flex-col gap-[7px]">
            <img
              className="rounded-xl bolck h-[80px] w-[80px] mb-2"
              src={srcImg}
              alt={`icone do ${name}`}
            />
            <div className="flex flex-col gap-[15px]">
              <div>
                <div className="text-white m-0 text-[15px] font-medium leading-[1.5]">{name}</div>
                <div className="text-gray-400 m-0 text-[15px] leading-[1.5]">{socialMedia}</div>
              </div>
              <div className="text-white m-0 text-[13px] font-bold leading-[1.5]">{about}</div>
            </div>
          </div>
          <HoverCard.Arrow className="fill-greyGlass1 relative z-50 h-2 w-4 " height={5} />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
};

export default HoverCardElement;
