const AppState = (state = initialState, action) => {
  switch (action.type) {
    case "DEVICE_ROTATE":
      return Object.assign(state, { orientation: action.orientation });
    default:
      return state;
  }
};

export default AppState;
