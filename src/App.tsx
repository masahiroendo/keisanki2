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
import { AiOutlineClear, AiOutlinePercentage } from "react-icons/ai";
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
  EQUAL,
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
      // if (state.overwrite && state.currentOperand === "" && payload !== ".") {
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload === "." ? "0" + payload : payload,
          overwrite: false,
        };
      }

      if (
        // state.currentOperand === "" &&
        !!state.previousOperand &&
        payload === "."
      ) {
        return {
          ...state,
          currentOperand: "0" + payload,
          overwrite: false,
        };
      }

      if (state.currentOperand.includes(".") && payload === ".") {
        return state;
      }
      if (state.currentOperand === "0" && payload === "0") {
        return state;
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

    case REDUCER_ACTION.EQUAL:
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

    case REDUCER_ACTION.PERCENT:
      if (state.previousOperand === "") {
        return {
          ...state,
          currentOperand: String(
            percent(Number(state.previousOperand), Number(state.currentOperand))
          ),
          previousOperand: "",
          operation: payload as Operation,
        };
      }

      return {
        ...state,
        currentOperand: String(
          processPercentage(
            Number(state.previousOperand),
            Number(state.currentOperand),
            state.operation
          )
        ),
        previousOperand: "",
        operation: payload as Operation,
      };

    case REDUCER_ACTION.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...initState,
        };
      }
      if (state.currentOperand === "") {
        return state;
      }
      return {
        ...state,
        currentOperand: "0",
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

const percent = (previous: number, current: number) => {
  if (isNaN(previous) || isNaN(current)) {
    return 0;
  }
  const result = previous ? previous * (current / 100) : current / 100;
  return result;
};

const processPercentage = (
  prev: number,
  curr: number,
  operation: Omit<Operation, "clear" | "multiply" | "divide">
): number => {
  switch (operation) {
    case "subtract":
      return prev - percent(prev, curr);
    default:
      return prev + percent(prev, curr);
  }
};

const App: FC = () => {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    calculatorReducer,
    initState
  );

  const handleDigitClick = (input: number | string) => {
    dispatch({ type: REDUCER_ACTION.ADD_DIGIT, payload: String(input) });
  };

  const handleOperationClick = (operation: Operation) => {
    dispatch({ type: REDUCER_ACTION.OPERATE, payload: operation });
  };

  const equal = () => {
    dispatch({ type: REDUCER_ACTION.EQUAL, payload: "" });
  };

  const allClear = () => {
    dispatch({ type: REDUCER_ACTION.CLEAR, payload: "" });
  };

  const deleteDigit = () => {
    dispatch({ type: REDUCER_ACTION.DELETE_DIGIT, payload: "" });
  };

  const percent = () => {
    dispatch({ type: REDUCER_ACTION.PERCENT, payload: "" });
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
          className="relative w-[400px] min-h-[600px] bg-[#333] rounded-[20px] p-10 px-[30px] shadow-calculatorContainer "
        >
          <div
            id="calculator-screen"
            className="relative flex flex-col items-end justify-around bg-[#a7af7c] p-[0.75rem] mx-2 mb-[0.75rem] min-h-[120px] rounded-xl break-words break-all shadow-[0_0_0_2px_rgba(0,0,0,0.75)] select-none"
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
            <LightGrayButton onClick={deleteDigit}>C</LightGrayButton>
            <LightGrayButton onClick={percent}>
              <AiOutlinePercentage className="text-3xl" />
            </LightGrayButton>
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
