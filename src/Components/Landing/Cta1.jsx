import { Button } from "./utils/exports";

const Cta1 = () => {
    return (
        <div className="py-[150px] text-center flex flex-col gap-4">
        <div className="text-[35px] font-bold">
            A cryto mining platform that <br /> invest in you
        </div>
        <div className="mb-[10px] opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod{" "}
            <br /> tempos Lorem ipsum dolor
        </div>
        <div className="w-full flex justify-center">
            <Button text="Get Started" />
        </div>
        </div>
    );
};

export default Cta1;
