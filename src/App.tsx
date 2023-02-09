import { FC } from "react";
import "./App.css";
import { range } from "./utils";
import Button from "./component/Button";
import LightGrayButton from "./component/GrayButton";
import OrangeButton from "./component/OrangeButton";
import {
  RiCloseLine,
  RiDivideLine,
  RiAddLine,
  RiSubtractLine,
} from "react-icons/ri";
import { TbEqual } from "react-icons/tb";

const App: FC = () => {
  const digitButton = (start: number, end: number) => {
    return range(start, end).map((num) => <Button key={num}>{num}</Button>);
  };

  return (
    <div className="p-0 m-0 box-border before:box-border after:box-border font-roboto">
      <div className="flex justify-center items-center min-h-screen bg-[#333]">
        <div
          id="calculator-container"
          className="relative min-w-[300px] min-h-[400px] bg-[#333] rounded-[20px] pt-10 px-[30px] shadow-calculatorContainer "
        >
          <div
            id="calculator-screen"
            className="relative flex flex-col items-end justify-around bg-[#a7af7c] p-[0.75rem] mx-2 mb-[0.75rem] rounded-xl break-words break-all shadow-[0_0_0_2px_rgba(0,0,0,0.75)]"
          >
            <div
              id="previous-operand"
              className="text-[#333] opacity-90 text-[1.5rem]"
            >
              789,789.12 x
            </div>
            <div id="current-operand" className="text-[#333] text-[2.5rem]">
              456,456.12
            </div>
          </div>
          <div
            id="button"
            className="relative grid grid-cols-calculator grid-rows-calculator"
          >
            <LightGrayButton>AC</LightGrayButton>
            <LightGrayButton>C</LightGrayButton>
            <LightGrayButton>%</LightGrayButton>
            <OrangeButton>
              <RiDivideLine className="text-4xl" />
            </OrangeButton>
            {digitButton(7, 9)}
            <OrangeButton>
              <RiCloseLine className="text-4xl" />
            </OrangeButton>
            {digitButton(4, 6)}
            <OrangeButton>
              <RiAddLine className="text-4xl" />
            </OrangeButton>
            {digitButton(1, 3)}
            <OrangeButton>
              <RiSubtractLine className="text-4xl" />
            </OrangeButton>
            <Button className="col-span-2 w-auto">0</Button>
            <Button>.</Button>
            <OrangeButton>
              <TbEqual className="text-4xl" />
            </OrangeButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
