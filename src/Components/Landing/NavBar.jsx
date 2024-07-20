import { Link } from "react-router-dom";
import { Logo } from "./utils/imageImports";

const NavBar = () => {
  return (
      <>
          <div className="flex justify-between px-10 py-5 glass sticky top-0">
              <div className="flex items-center w-fit">
                  <img src={Logo} alt="Logo" />
                  <span className="text-[20px] font-serif ml-1">Coinary</span>
              </div>
              <div className="flex items-center justify-between w-[30%] font-semibold">
                  <Link to="/">Home</Link>
                  <div className="flex items-center gap-1">
                      <span>Buy</span>
                      <span>/</span>
                      <span>Sell</span>
                  </div>
                  <div>Markets</div>
                  <div>Business</div>
                  <div>Support</div>
              </div>
              <div className="flex items-center w-fit gap-3">
                  <Link
                      to="/login"
                      className="flex items-center justify-center py-[7px] rounded-xl px-5 border"
                  >
                      Sign In
                  </Link>
                  <Link
                      to="/signup"
                      className="flex items-center justify-center py-[7px] rounded-xl px-5 bg-gradient-to-r from-[#933FFE] to-[#18C8FF]"
                  >
                      Sign Up
                  </Link>
              </div>
          </div>
      </>
  );
};

export default NavBar;
