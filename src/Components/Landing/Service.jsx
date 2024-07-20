import { Shield, BgImg2 } from "./utils/imageImports";

const Service = () => {
  const backGroundStyle = {
    backgroundImage: `url(${BgImg2})`,
    backgroundSize: "contain",
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={backGroundStyle}>
      <div className="flex justify-between items-center -translate-y-[50px] h-[400px]">
        <img className="h-[400px]" src={Shield} alt="" />
        <div className="pr-[200px] flex flex-col gap-5">
          <div className="text-[35px] font-bold">
            24/7 access to full <br /> service customer <br /> support
          </div>
          <div className="opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br /> tempos Lorem ipsum dolor sit amet, consectetur
          </div>
          <div className="flex items-center justify-center py-[15px] rounded-xl px-8 border w-fit">
            Get Started
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
