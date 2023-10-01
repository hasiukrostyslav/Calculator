interface InitialState {
  readonly currentValue: number;
  readonly prevValue: number | null;
  readonly mathOperator: string | null;
  readonly decimalPoint: boolean;
  readonly percent: boolean;
}

type ActionType =
  | { type: "calculator/selectDigit"; payload: number }
  | { type: "calculator/add"; payload: string }
  | { type: "calculator/subtract"; payload: string }
  | { type: "calculator/multiply"; payload: string }
  | { type: "calculator/divide"; payload: string }
  | { type: "calculator/equal"; payload: string }
  | { type: "calculator/clear" }
  | { type: "calculator/percent" }
  | { type: "calculator/changeSign" }
  | { type: "calculator/decimalPoint" };

const initialState: InitialState = {
  currentValue: 0,
  prevValue: null,
  mathOperator: null,
  decimalPoint: false,
  percent: false,
};

export default function calculatorReducer(
  state = initialState,
  action: ActionType,
) {
  switch (action.type) {
    case "calculator/selectDigit":
      return {
        ...state,
        percent: false,
        mathOperator:
          state.mathOperator === "equal" ? null : state.mathOperator,

        currentValue:
          state.currentValue === 0 ||
          state.mathOperator === "equal" ||
          state.percent
            ? action.payload
            : Number(state.currentValue.toString() + action.payload),

        decimalPoint:
          (state.mathOperator ?? state.percent) &&
          !isDecimal(Number(state.currentValue.toString() + action.payload))
            ? false
            : state.decimalPoint,
      };

    case "calculator/add":
      return {
        ...state,
        mathOperator: action.payload,
        prevValue: mathOperations(
          state.currentValue,
          state.prevValue,
          state.mathOperator,
        ),
        currentValue: 0,
        percent: false,
      };

    case "calculator/subtract":
      return {
        ...state,
        mathOperator: action.payload,
        prevValue: mathOperations(
          state.currentValue,
          state.prevValue,
          state.mathOperator,
        ),
        currentValue: 0,
        percent: false,
      };

    case "calculator/multiply":
      return {
        ...state,
        mathOperator: action.payload,
        prevValue: mathOperations(
          state.currentValue,
          state.prevValue,
          state.mathOperator,
        ),
        currentValue: 0,
        percent: false,
      };

    case "calculator/divide":
      return {
        ...state,
        mathOperator: action.payload,
        prevValue: mathOperations(
          state.currentValue,
          state.prevValue,
          state.mathOperator,
        ),
        currentValue: 0,
        percent: false,
      };

    case "calculator/equal":
      return {
        ...state,
        mathOperator: action.payload,
        currentValue: mathOperations(
          state.currentValue,
          state.prevValue,
          state.mathOperator,
        ),
        prevValue: null,
        percent: false,
        decimalPoint: isDecimal(
          mathOperations(
            state.currentValue,
            state.prevValue,
            state.mathOperator,
          ),
        )
          ? true
          : false,
      };

    case "calculator/decimalPoint": {
      if (state.decimalPoint && state.mathOperator !== "equal") return state;
      if (state.mathOperator === "equal")
        return {
          ...state,
          decimalPoint: true,
          mathOperator: false,
          currentValue: (0).toFixed(1).slice(0, -1),
        };
      return {
        ...state,
        decimalPoint: true,
        currentValue: state.decimalPoint
          ? state.currentValue
          : state.currentValue.toFixed(1).slice(0, -1),
      };
    }

    case "calculator/percent":
      return {
        ...state,
        currentValue: state.currentValue / 100,
        percent: true,
        decimalPoint: isDecimal(state.currentValue, true) ? true : false,
      };

    case "calculator/changeSign":
      return {
        ...state,
        currentValue:
          state.currentValue === Math.abs(state.currentValue)
            ? -state.currentValue
            : Math.abs(state.currentValue),
      };

    case "calculator/clear":
      return {
        ...state,
        currentValue: 0,
        prevValue: null,
        mathOperator: null,
        decimalPoint: false,
        percent: false,
      };

    default:
      return state;
  }
}

function mathOperations(
  curValue: number,
  prevValue: number | null,
  operator: string | null,
) {
  if (operator === "add" && prevValue) return prevValue + curValue;
  if (operator === "subtract" && prevValue) return prevValue - curValue;
  if (operator === "multiply" && prevValue) return prevValue * curValue;
  if (operator === "divide" && prevValue) return prevValue / curValue;
  return curValue;
}

export function isDecimal(num: number, percent = false): boolean {
  if (percent)
    return Number.isFinite(num / 100) && !Number.isInteger(num / 100);

  return Number.isFinite(num) && !Number.isInteger(num);
}
