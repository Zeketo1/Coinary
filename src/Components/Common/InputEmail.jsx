import { Arrow } from "../Landing/utils/imageImports";
const InputEmail = () => {
    return (
        <div className="flex gap-3 items-center input pr-[15px] rounded-[50px] w-fit">
        <input
            type="text"
            placeholder="Email Address"
            className="py-[10px] px-[15px] bg-transparent outline-none"
        />
        <Arrow />
        </div>
    );
};

export default InputEmail;
