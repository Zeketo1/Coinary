import { Link } from "react-router-dom";
import BgImg from "../assets/Login/Signup.png";
import { LoginLogo } from "../Components/Landing/utils/imageImports";

const Login = () => {
    const bgImg = {
        backgroundImage: `url(${BgImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
    };
    
    return (
        <div style={bgImg} className="min-h-[693px] w-full grid grid-cols-2">
            <div></div>
            <div className="flex items-center -translate-y-20">
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
                        <div className="flex justify-between opacity-50 my-[10px]">
                            <div>
                                <input type="checkbox" name="remember me" />{" "}
                                <span>Save Email and Password</span>
                            </div>
                            <Link to="/signup">Don't have an account?</Link>
                        </div>
                        <div className="flex items-center w-fit justify-center py-[7px] rounded-lg px-5 bg-gradient-to-r from-[#933FFE] to-[#18C8FF]">
                            Sign in
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
