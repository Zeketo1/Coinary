import React, { useContext, useEffect } from "react";
import SideBar from "../../Constants/SideBar";
import { CoinContext } from "../../Contexts/CoinContextProvider";
import { motion, useAnimationControls } from "framer-motion";
import { containerVariants } from "../../Constants";
import { BTC, Scan } from "../Landing/utils/imageImports";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoMdCopy } from "react-icons/io";
import Button from "../Common/Button";

const Withdraw = ({ setNavBar }) => {
    const { isOpen, setIsopen } = useContext(CoinContext);
    console.log(isOpen);

    useEffect(() => {
        // Set navBar state when component mounts
        setNavBar(0);

        return () => {
            // Reset navBar state when component unmounts
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
        <div className="flex gap-10">
            <SideBar />
            <motion.div
                variants={containerVariants}
                animate={containerControls}
                initial="close"
                // className=""
            ></motion.div>
            <div className="flex w-[100%] min-h-[773px] items-center justify-center">
                <div className="input-glass2 w-[60%] h-[670px] p-[50px] flex flex-col items-center gap-[40px]">
                    <div className="flex justify-between items-center input-glass p-3 rounded-[10px] w-full">
                        <div className="flex gap-3 items-center">
                            <img src={BTC} alt="" />
                            <span>BTC</span>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span>0.00000000</span>
                            <IoChevronDownOutline className="cursor-pointer" />
                        </div>
                    </div>
                    <img src={Scan} alt="" className="h-[200px] w-[200px]" />
                    <div className="w-full input-glass px-3 py-1 rounded-[10px] flex items-center justify-between">
                        <div>
                            <div className="opacity-40 text-[14px]">
                                Deposit Address
                            </div>
                            <input
                                type="text"
                                name="Deposit Address"
                                id=""
                                className="min-w-[500px] bg-transparent outline-none"
                            />
                        </div>
                        <IoMdCopy className="h-[30px] w-[30px] cursor-pointer" />
                    </div>
                    <div className="text-center text-[14px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do <br /> eiusmod temposLorem ipsum dolor sit amet,
                        consectetur <br /> adipiscing elit, sed do eiusmod tempo
                    </div>
                    <div className="flex items-center w-fit justify-center py-[10px] rounded-md px-8 bg-gradient-to-tr from-[#933FFE] to-[#18C8FF]">
                        PLACE WITHDRAWAL
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Withdraw;
