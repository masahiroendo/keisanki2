export const range = (start: number, end: number) => {
  const length = end + 1 - start;
  return Array.from({ length }, (_, i) => start + i);
};

// export const ButtonClassName = `relative grid w-[80px] h-[80px] mx-2 text-white place-items-center cursor-pointer rounded-[10px] bg-gradient-to-b
// from-[#2f2f2f] to-[#3f3f3f] shadow-calculatorButton select-none before:content-[''] before:absolute before:top-[3px] before:left-[4px] before:bottom-[14px]
// before:right-[12px] before:bg-gradient-to-r before:from-[#2d2d2d] before:to-[#4d4d4d] before:rounded-[10px] before:shadow-calculatorButtonBefore
// before:border-l-[1px] before:border-l-[solid] before:border-l-[#444] before:border-b-[1px] before:border-b-[solid] before:border-b-[#444] before:border-t-[1px]
// before:border-t-[#0009] dark:text-[#333] dark:bg-gradient-to-b dark:from-[#fafafa] dark:to-[#cdcdcd] dark:shadow-calculatorButtonLight
// dark:before:bg-gradient-to-r dark:before:from-[#e6e6e6] dark:before:to-[#d8d7d7] dark:before:shadow-calculatorButtonBeforeLight dark:before:border-l-[1px]
// dark:before:border-l-[#fff4] dark:before:border-b-[1px] dark:before:border-b-[#fff4] dark:before:border-t-[1px] dark:before:border-t-[#fff9]
// active:brightness-90`;

export const ButtonClassName = `relative grid w-[80px] h-[80px] mx-2 text-white place-items-center cursor-pointer rounded-[10px] bg-gradient-to-b
from-[#2f2f2f] to-[#3f3f3f] shadow-calculatorButton select-none before:content-[''] before:absolute before:top-[3px] before:left-[4px] before:bottom-[14px]
before:right-[12px] before:bg-gradient-to-r before:from-[#2d2d2d] before:to-[#4d4d4d] before:rounded-[10px] before:shadow-calculatorButtonBefore
before:border-l-[1px] before:border-l-[solid] before:border-l-[#444] before:border-b-[1px] before:border-b-[solid] before:border-b-[#444] before:border-t-[1px]
before:border-t-[#0009] dark:text-[#333] dark:rounded-[10px] dark:bg-gradient-to-b dark:from-[#fafafa] dark:to-[#cdcdcd] dark:shadow-calculatorButtonLight 
dark:before:bg-gradient-to-r dark:before:from-[#e6e6e6] dark:before:to-[#d8d7d7] dark:before:shadow-calculatorButtonBeforeLight dark:before:border-l-[1px] 
dark:before:border-l-[#fff4] dark:before:border-b-[1px] dark:before:border-b-[#fff4] dark:before:border-t-[1px] dark:before:border-t-[#fff9] 
active:brightness-90`;

// GrayButtonClassName ne marchait pmus ainsi que le OrangeButton...
export const GrayButtonClassName = `text-zinc-800 active:brightness-[130%] bg-gradient-to-b from-[#565656] to-[#787676] before:bg-gradient-to-r 
before:from-[#636363] before:to-[#858383] before:border-l-[1px] before:border-l-[#fff4] before:border-b-[1px] before:border-b-[#fff4] before:border-t-solid 
before:border-t-[1px] before:border-t-[#fff4] dark:text-zinc-800 dark:active:brightness-90 dark:bg-gradient-to-b dark:from-[#565656] dark:to-[#787676] 
dark:before:bg-gradient-to-r dark:before:from-[#636363] dark:before:to-[#858383] dark:before:border-l-[1px] dark:before:border-l-[#fff4] dark:before:border-b-[1px] 
dark:before:border-b-[#fff4] dark:before:border-t-[1px] dark:before:border-t-[#fff4]`;

export const LightGrayButtonClassName = `text-zinc-800 active:brightness-[130%] bg-gradient-to-b from-[#565656] to-[#787676] before:bg-gradient-to-r 
before:from-[#636363] before:to-[#858383] before:border-l-[1px] before:border-l-[#fff4] before:border-b-[1px] before:border-b-[#fff4]
before:border-t-[1px] before:border-t-[#fff4] dark:text-zinc-800 dark:active:brightness-90 dark:bg-gradient-to-b dark:from-[#828181] dark:to-[#aeacac] 
dark:before:bg-gradient-to-r dark:before:from-[#969595] dark:before:to-[#cbc8c8] dark:before:border-l-[1px] dark:before:border-l-[#fff4] dark:before:border-b-[1px] 
dark:before:border-b-[#fff4] dark:before:border-t-[1px] dark:before:border-t-[#fff4]`;

export const OrangeButtonClassName = `text-gray-300 active:brightness-[120%] bg-gradient-to-b from-[#ea5920f8] to-[#f37b26f7] before:bg-gradient-to-r 
before:from-[#eb6d13] before:to-[#eb991d] before:border-l-[1px] before:border-l-[#fff4] before:border-b-[1px] before:border-b-[#fff4] before:border-t-solid 
before:border-t-[1px] before:border-t-[#fff4] dark:text-gray-300 dark:bg-gradient-to-b dark:from-[#ea5d26f8] dark:to-[#f37b26f7] dark:before:bg-gradient-to-r 
dark:before:from-[#eb6d13] dark:before:to-[#eb991d] dark:before:border-l-[1px] dark:before:border-l-[#fff4] dark:before:border-b-[1px] 
dark:before:border-b-[#fff4] dark:before:border-t-[1px] dark:before:border-t-[#fff4]`;
