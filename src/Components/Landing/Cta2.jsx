import { Bag } from "./utils/imageImports";
import { Button } from "./utils/exports";

const Cta = () => {
  return (
    <div className="my-[120px] px-[100px] flex justify-between items-center">
      <div className=" flex flex-col gap-5">
        <div className="text-[35px] font-bold">
          Take your first step <br /> into safe, secure <br /> crypto investing
        </div>
        <div className="mb-[10px] opacity-70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod <br /> tempos Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do <br /> eiusmod tempos Get Started
        </div>
        <Button text="Get Started" />
      </div>
      <div className="ml-[100px]">
        <img className=" h-[400px]" src={Bag} alt="" />
      </div>
    </div>
  );
};

export default Cta;
