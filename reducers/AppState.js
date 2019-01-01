import InitialState from "../store/InitialState";

export const AppState = (state = InitialState, action) => {
  switch (action.type) {
    case "DEVICE_ROTATE":
      return Object.assign(state, { orientation: action.orientation });
    default:
      return state;
  }
};
