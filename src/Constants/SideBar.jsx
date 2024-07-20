import { Link, useLocation } from "react-router-dom";
import { logo, sideBarLinks, containerVariants } from "./index";
import { BiArrowBack, BiArrowToLeft, BiUpArrowAlt } from "react-icons/bi";
import { motion, useAnimationControls } from "framer-motion";
import { CiLogout } from "react-icons/ci";
import { useContext, useEffect, useState } from "react";
import { CoinContext } from "../Contexts/CoinContextProvider";

const SideBar = () => {
    const { pathname } = useLocation();
    const containerControls = useAnimationControls();
    const { isOpen, setIsopen } = useContext(CoinContext);

    useEffect(() => {
        if (isOpen) {
            containerControls.start("open");
            svgControls.start("open");
        } else {
            containerControls.start("close");
            svgControls.start("close");
        }
    }, [isOpen]);

    const handleOpenClose = () => {
        setIsopen(!isOpen);
    };

    const svgVariants = {
        close: {
            rotate: 360,
        },
        open: {
            rotate: 180,
        },
    };

    const svgControls = useAnimationControls();

    return (
        <motion.div
            variants={containerVariants}
            animate={containerControls}
            initial="close"
            className="pr-12 p-[.6rem] px-5 flex flex-col gap-28 mt-12 backdrop-blur-lg  absolute top-0 w-20rem  h-[90dvh] overflow-hidden"
        >
            <div className="flex flex-col gap-6">
                <div className="flex items-center text-white gap-2">
                    <img src={logo} alt="" />
                    <h1 className=" text-[1.5rem] truncate whitespace-nowrap">
                        Coinary
                    </h1>
                    <button
                        className="p-1 rounded-full flex"
                        onClick={() => handleOpenClose()}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1}
                            stroke="currentColor"
                            className="w-8 h-8 stroke-neutral-200"
                        >
                            <motion.path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                variants={svgVariants}
                                animate={svgControls}
                                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                transition={{
                                    duration: 0.5,
                                    ease: "easeInOut",
                                }}
                            />
                        </svg>
                    </button>
                </div>
                <div>
                    {sideBarLinks.map(({ icon, title, path }) => (
                        <Link
                            to={path}
                            key={path}
                            className={`flex items-center gap-5 ${
                                path === pathname && "active"
                            } text-[13px] pr-12 p-[.6rem] px-5 rounded-[7px] mb-4 w-fit`}
                        >
                            <img src={icon} />
                            <div className="truncate whitespace-nowrap">
                                {title}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className=" flex items-center gap-3 ml-5 truncate whitespace-nowrap">
                <CiLogout />
                <span>Log Out</span>
            </div>
        </motion.div>
    );
};

export default SideBar;
