export const range = (start: number, end: number) => {
  const length = end + 1 - start;
  return Array.from({ length }, (_, i) => start + i);
};

export const ButtonClassName =
  "relative grid w-[80px] h-[80px] mx-2 text-white font-medium place-items-center cursor-pointer rounded-[10px] bg-gradient-to-b from-[#2f2f2f] to-[#3f3f3f] shadow-calculatorButton select-none before:content-[''] before:absolute before:top-[3px] before:left-[4px] before:bottom-[14px] before:right-[12px] before:bg-gradient-to-r before:from-[#2d2d2d] before:to-[#4d4d4d] before:rounded-[10px] before:shadow-calculatorButtonBefore before:border-l-[1px] before:border-l-[solid] before:border-l-[#444] before:border-b-[1px] before:border-b-[solid] before:border-b-[#444] before:border-t-solid before:border-t-[1px] before:border-t-[#0009] active:brightness-150";

export const GrayButtonClassName =
  "text-zinc-800 active:brightness-[130%] bg-gradient-to-b from-[#565656] to-[#787676] before:bg-gradient-to-r before:from-[#636363] before:to-[#858383] before:border-l-[1px] before:border-l-[#fff4] before:border-b-[1px] before:border-b-[#fff4] before:border-t-solid before:border-t-[1px] before:border-t-[#fff4]";

export const OrangeButtonClassName =
  "text-gray-100 active:brightness-[120%] bg-gradient-to-b from-[#ea5920f8] to-[#f37b26f7] before:bg-gradient-to-r before:from-[#eb6d13] before:to-[#eb991d] before:border-l-[1px] before:border-l-[#fff4] before:border-b-[1px] before:border-b-[#fff4] before:border-t-solid before:border-t-[1px] before:border-t-[#fff4]";
