import React, { useContext, useEffect } from "react";
import { CoinContext } from "../Contexts/CoinContextProvider";
import { containerVariants, minerOptions } from "../Constants";
import { motion, useAnimationControls } from "framer-motion";
import SideBar from "../Constants/SideBar";

const Miner = ({ setNavBar }) => {
    const { isOpen, setIsopen } = useContext(CoinContext);
    console.log(isOpen);

    useEffect(() => {
        
        setNavBar(0);

        return () => {
            setNavBar(1);
        };
    }, [setNavBar]);

    const containerControls = useAnimationControls();

    useEffect(() => {
        if (isOpen) {
            containerControls.start("open");
        } else {
            containerControls.start("close");
        }
    }, [isOpen]);

    return (
        <div className="flex gap-10 w-full">
            <SideBar />
            <motion.div
                variants={containerVariants}
                animate={containerControls}
                initial="close"
            ></motion.div>
            <div className="flex justify-center w-full">
                <div className="grid grid-cols-3 gap-5 py-5 px-20 glass rounded-xl">
                    {minerOptions.map(({ image, name, percent, style }, i) => (
                        <div
                            key={i}
                            className="flex flex-col gap-7 justify-start items-center glass p-5 rounded-xl"
                        >
                            <div className="flex h-fit w-fit gap-3">
                                <img
                                    src={image}
                                    alt=""
                                    className="h-[160px] w-[150px]"
                                />
                                <div
                                    className={style}
                                >
                                    <span className="text-[20px]">{name}</span>
                                    <span className="text-[25px]">
                                        {percent}
                                    </span>
                                </div>
                            </div>
                            <div className="opacity-50 text-center">
                                Lorem ipsum dolor sit amet,
                                <br /> consectetur adipiscing elit,
                                <br /> sed do eiusmod tempos
                            </div>
                            <div className="flex items-center w-fit justify-center py-[5px] rounded-md px-8 bg-gradient-to-tr from-[#933FFE] to-[#18C8FF]">
                                Buy Now
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Miner;
