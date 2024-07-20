import React from "react";
import BgImg from "../assets/Login/Signup.png";
import { LoginLogo } from "../Components/Landing/utils/imageImports";

const Signup = () => {
    const bgImg = {
        backgroundImage: `url(${BgImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
    };

    return (
        <div style={bgImg} className="min-h-[693px] w-full grid grid-cols-2">
            <div></div>
            <div className="flex items-center">
                <div className="flex flex-col gap-10">
                    <div className="flex gap-1 items-center">
                        <img src={LoginLogo} alt="" />
                        <h1 className="text-[30px] font-semibold">Coinary</h1>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-2">
                            <div>Email</div>
                            <input
                                type="text"
                                className="outline-none p-3 w-[600px] input-glass rounded-lg"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <div>Password</div>
                            <input
                                type="text"
                                className="outline-none p-3 w-[600px] input-glass rounded-lg"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <div>Confirm Password</div>
                            <input
                                type="text"
                                className="outline-none p-3 w-[600px] input-glass rounded-lg"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <div>BTC Address (Optional)</div>
                            <input
                                type="text"
                                className="outline-none p-3 w-[600px] input-glass rounded-lg"
                            />
                        </div>
                    </div>

                    <div className="flex items-center w-fit justify-center py-[7px] rounded-lg px-4 bg-gradient-to-r from-[#933FFE] to-[#18C8FF]">
                        Sign up
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
