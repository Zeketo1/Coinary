import { InputEmail, Button } from "./utils/exports";

const Transmission = () => {
  return (
    <div className="flex flex-col items-center gap-5 mb-28">
      <div className="text-[35px] font-bold">Receive transmissions</div>
      <div>
        <span className="mb-[10px] opacity-60">Unsubscribe at any time.</span>{" "}
        <span>Privacy policy↗</span>
      </div>
      <div className="opacity-50">
        <InputEmail />
      </div>
    </div>
  );
};

export default Transmission;
