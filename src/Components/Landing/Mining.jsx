import { BgImg3, Table, Arrow } from "./utils/imageImports";

const Mining = () => {

    return (
        <>
        <div className="object-contain">
            <div className="w-full text-center flex flex-col gap-5 mb-[50px]">
            <div className="text-[35px] font-bold">
                Buy and sell with the lowest <br /> fees in the industry
            </div>
            <div className="mb-[10px] opacity-70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod <br /> tempos Lorem ipsum dolor
            </div>
            <div className="flex w-full justify-center items-center">
                <div className="flex gap-2 items-center">
                <div>Learn More </div>
                <Arrow />
                </div>
            </div>
            </div>
            <div className="flex w-full justify-center">
            <img className=" h-[400px] object-contain" src={Table} alt="" />
            </div>
        </div>
        </>
    );
};

export default Mining;
