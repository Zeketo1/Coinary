const Button = ({ text }) => {
  return (
    <div className="flex items-center w-fit justify-center py-[15px] rounded-xl px-8 bg-gradient-to-r from-[#933FFE] to-[#18C8FF]">
      {text}
    </div>
  );
};

export default Button;
