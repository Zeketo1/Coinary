import { BgImg } from "./utils/imageImports";
import { Button } from "./utils/exports";
const Banner = () => {
  const backGroundStyle = {
    backgroundImage: `url(${BgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className="w-full h-[780px] flex flex-col justify-center items-center tracking-[0.1rem] "
      style={backGroundStyle}
    >
      <div className="-translate-y-[85px] text-[80px] font-bold z-[-10]">
        We make crypo <br /> clear and simple
      </div>
      <Button text="Get Started" />
    </div>
  );
};

export default Banner;
