import { FC, useReducer } from "react";
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
import { AiOutlineClear } from "react-icons/ai";
import { TbEqual } from "react-icons/tb";
import { IconType } from "react-icons";

const operationSymbols: Record<string, string> = {
  clear: "",
  add: "+",
  subtract: "-",
  multiply: "x",
  divide: "÷",
};

type Operation = "clear" | "add" | "subtract" | "multiply" | "divide";

const operatorToIcon: { [operation in Operation]: IconType } = {
  clear: AiOutlineClear,
  add: RiAddLine,
  subtract: RiSubtractLine,
  multiply: RiCloseLine,
  divide: RiDivideLine,
} as const;

type CalculatorState = {
  currentOperand: string;
  previousOperand: string;
  operation: Operation;
  overwrite: boolean;
};

const initState: CalculatorState = {
  currentOperand: "0",
  previousOperand: "",
  operation: "clear",
  overwrite: false,
};

const enum REDUCER_ACTION {
  ADD_DIGIT,
  OPERATE,
  CLEAR,
  DELETE_DIGIT,
  CALCULATE,
  PERCENT,
}

type ReducerActionType = {
  type: REDUCER_ACTION;
  payload: string;
};

const calculatorReducer = (
  state: CalculatorState,
  { type, payload }: ReducerActionType
): CalculatorState => {
  switch (type) {
    case REDUCER_ACTION.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload,
          overwrite: false,
        };
      }
      const num = Number(state.currentOperand + payload);
      if (Number.isNaN(num)) {
        // if (state.currentOperand.includes(".") && payload === ".") {
        //   return state;
        // }
        // if (state.currentOperand === "0" && payload === "0") {
        //   return state;
        // }
        return { ...state };
      }
      if (state.currentOperand === "0" && payload !== ".") {
        return {
          ...state,
          currentOperand: payload,
        };
      }

      return {
        ...state,
        currentOperand: `${state.currentOperand}${payload}`,
      };

    case REDUCER_ACTION.OPERATE:
      if (state.currentOperand === "0" && state.previousOperand === "") {
        return state;
      }
      if (state.previousOperand === "") {
        return {
          ...state,
          previousOperand: state.currentOperand,
          currentOperand: "",
          operation: payload as Operation,
        };
      }

      if (state.currentOperand === "") {
        return {
          ...state,
          operation: payload as Operation,
        };
      }

      return {
        ...state,
        previousOperand: calculate(state),
        currentOperand: "",
        operation: payload as Operation,
      };

    case REDUCER_ACTION.CALCULATE:
      if (
        state.currentOperand == "" ||
        state.previousOperand == "" ||
        state.operation == "clear"
      ) {
        return state;
      }
      return {
        ...state,
        currentOperand: calculate(state),
        previousOperand: "",
        operation: "clear",
        overwrite: true,
      };

    case REDUCER_ACTION.CLEAR:
      return { ...initState };

    default:
      throw new Error();
  }
};

const calculate = ({
  previousOperand,
  currentOperand,
  operation,
}: CalculatorState) => {
  const previous = Number(previousOperand);
  const current = Number(currentOperand);
  if (isNaN(previous) || isNaN(current)) {
    return "";
  }
  let result: number = 0;
  switch (operation) {
    case "add":
      result = previous + current;
      break;
    case "subtract":
      result = previous - current;
      break;
    case "multiply":
      result = previous * current;
      break;
    case "divide":
      result = previous / current;
      break;
  }
  return String(result);
};

const App: FC = () => {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    calculatorReducer,
    initState
  );

  const handleDigitClick = (input: number | string) => {
    dispatch({ type: REDUCER_ACTION.ADD_DIGIT, payload: String(input) });
    console.log(input);
  };

  const handleOperationClick = (operation: Operation) => {
    dispatch({ type: REDUCER_ACTION.OPERATE, payload: operation });
    console.log(operation);
  };

  const equal = () => {
    dispatch({ type: REDUCER_ACTION.CALCULATE, payload: "" });
  };

  const allClear = () => {
    dispatch({ type: REDUCER_ACTION.CLEAR, payload: "" });
  };

  const digitButton = (start: number, end: number) => {
    return range(start, end).map((num) => (
      <Button key={num} onClick={() => handleDigitClick(num)}>
        {num}
      </Button>
    ));
  };

  const operationButton = (operation: Operation) => {
    const Icon = operatorToIcon[operation];
    return (
      <OrangeButton onClick={() => handleOperationClick(operation)}>
        <Icon className="text-4xl" />
      </OrangeButton>
    );
  };

  return (
    <div className="p-0 m-0 box-border before:box-border after:box-border font-roboto">
      <div className="flex justify-center items-center min-h-screen bg-[#333]">
        <div
          id="calculator-container"
          className="relative min-w-[400px] min-h-[600px] bg-[#333] rounded-[20px] p-10 px-[30px] shadow-calculatorContainer "
        >
          <div
            id="calculator-screen"
            className="relative flex flex-col items-end justify-around bg-[#a7af7c] p-[0.75rem] mx-2 mb-[0.75rem] rounded-xl break-words break-all shadow-[0_0_0_2px_rgba(0,0,0,0.75)] select-none"
          >
            <div
              id="previous-operand"
              className="text-[#333] opacity-90 text-[1.5rem]"
            >
              {previousOperand} {operationSymbols[operation]}
            </div>
            <div id="current-operand" className="text-[#333] text-[2.5rem]">
              {currentOperand}
            </div>
          </div>
          <div
            id="button"
            className="relative grid grid-cols-calculator auto-rows-calculator"
          >
            <LightGrayButton onClick={allClear}>AC</LightGrayButton>
            <LightGrayButton>C</LightGrayButton>
            <LightGrayButton>%</LightGrayButton>
            {operationButton("divide")}
            {digitButton(7, 9)}
            {operationButton("multiply")}

            {digitButton(4, 6)}
            {operationButton("add")}

            {digitButton(1, 3)}
            {operationButton("subtract")}

            <Button
              className="col-span-2 w-full"
              onClick={() => handleDigitClick("0")}
            >
              0
            </Button>
            <Button onClick={() => handleDigitClick(".")}>.</Button>
            <OrangeButton onClick={equal}>
              <TbEqual className="text-4xl" />
            </OrangeButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
