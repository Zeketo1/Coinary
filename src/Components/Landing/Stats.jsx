import { stats } from "../../Constants/index";
import { Arrow } from "./utils/imageImports";
const Stats = () => {
  return (
    <div className="w-full flex justify-center gap-4">
      {stats.map(({ image, title, text, style }, i) => (
        <div
          key={i}
          className="flex flex-col items-center gap-4 bg-[#1b1b23] p-7 rounded-[20px]"
        >
          <div className={style}>
            <img src={image} alt="" />
          </div>
          <div className="text-[25px] font-semibold">{title}</div>
          <div className="w-[280px] text-center mb-[10px] text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempos Lorem ipsum dolor
          </div>
          <div className="flex items-center gap-2">
            <div>{text}</div>
            <Arrow />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
