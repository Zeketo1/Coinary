import Transmission from "./Transmission";
import { Circles } from "./utils/imageImports";
import { InputEmail } from "./utils/exports";

const Footer = () => {


  return (
    <div className="flex flex-col gap-20">
      <div className="flex justify-around opacity-50 py-[130px] border-t">
        <div className="flex flex-col gap-10"> 
          <div>
            Coinary, the world’s leading bitcoin ATM operator, makes <br />
            it so flippin’ easy to buy and sell bitcoin via cash, card, <br />{" "}
            or bank transfer.
          </div>
          <div>
            Sign up to get the latest in Coinary news, discounts, and more.
          </div>
          <InputEmail />
          <div>&copy; 2021 GPD Holdings, LLC FinCEN MSB</div>
        </div>
        <div className="flex flex-col gap-7">
          <div>Company</div>
          <div>About</div>
          <div>Careers</div>
          <div>Press</div>
          <div>News</div>
          <div>Merch</div>
        </div>
        <div className="flex flex-col gap-7">
          <div>Privacy Policy and Terms of Service</div>
          <div>Coinary Privacy Policy</div>
          <div>Coinary Biometrics Privacy Policy</div>
          <div>Coinary Financial Privacy Notice</div>
          <div>Coinary Terms of Service</div>
          <div>Coinary Trade Desk Terms of Service</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
