interface InitialState {
  readonly currentValue: number;
  readonly prevValue: number | null;
  readonly mathOperator: string | null;
  readonly decimalPoint: boolean;
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
  | { type: "calculator/decimalPoint"; payload: string };

const initialState: InitialState = {
  currentValue: 0,
  prevValue: null,
  mathOperator: null,
  decimalPoint: false,
};

export default function calculatorReducer(
  state = initialState,
  action: ActionType,
) {
  switch (action.type) {
    case "calculator/selectDigit":
      return {
        ...state,
        mathOperator:
          state.mathOperator === "equal" ? null : state.mathOperator,
        currentValue:
          state.currentValue === 0 || state.mathOperator === "equal"
            ? action.payload
            : Number(state.currentValue.toString() + action.payload),
      };

    case "calculator/add":
      return {
        ...state,
        mathOperator: action.payload,
        prevValue:
          state.prevValue === null
            ? state.currentValue
            : state.mathOperator === "add"
            ? state.prevValue + state.currentValue
            : state.mathOperator === "subtract"
            ? state.prevValue - state.currentValue
            : state.mathOperator === "multiply"
            ? state.prevValue * state.currentValue
            : state.prevValue / state.currentValue,
        currentValue: 0,
      };

    case "calculator/subtract":
      return {
        ...state,
        mathOperator: action.payload,
        prevValue:
          state.prevValue === null
            ? state.currentValue
            : state.mathOperator === "add"
            ? state.prevValue + state.currentValue
            : state.mathOperator === "subtract"
            ? state.prevValue - state.currentValue
            : state.mathOperator === "multiply"
            ? state.prevValue * state.currentValue
            : state.prevValue / state.currentValue,
        currentValue: 0,
      };

    case "calculator/multiply":
      return {
        ...state,
        mathOperator: action.payload,
        prevValue:
          state.prevValue === null
            ? state.currentValue
            : state.mathOperator === "add"
            ? state.prevValue + state.currentValue
            : state.mathOperator === "subtract"
            ? state.prevValue - state.currentValue
            : state.mathOperator === "multiply"
            ? state.prevValue * state.currentValue
            : state.prevValue / state.currentValue,
        currentValue: 0,
      };

    case "calculator/divide":
      return {
        ...state,
        mathOperator: action.payload,
        prevValue:
          state.prevValue === null
            ? state.currentValue
            : state.mathOperator === "add"
            ? state.prevValue + state.currentValue
            : state.mathOperator === "subtract"
            ? state.prevValue - state.currentValue
            : state.mathOperator === "multiply"
            ? state.prevValue * state.currentValue
            : state.prevValue / state.currentValue,
        currentValue: 0,
      };

    case "calculator/equal":
      return {
        ...state,
        mathOperator: action.payload,
        currentValue: !state.prevValue
          ? state.currentValue
          : state.mathOperator === "add"
          ? state.prevValue + state.currentValue
          : state.mathOperator === "subtract"
          ? state.prevValue - state.currentValue
          : state.mathOperator === "multiply"
          ? state.prevValue * state.currentValue
          : state.prevValue / state.currentValue,
        prevValue: null,
      };

    case "calculator/decimalPoint":
      return { ...state };

    case "calculator/percent":
      return {
        ...state,
        currentValue: state.currentValue / 100,
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
      };

    default:
      return state;
  }
}
