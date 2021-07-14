const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITE":
      return { ...state, myList: [...state.myList, action.payload] };

    case "DELETE_FAVORITE":
      return {
        ...state,
        myList: state.myList.filter((items) => items.id !== action.payload),
      };
    case "LOGIN":
      return { ...state, user: action.payload };

    case "LOGOUT":
      return { ...state, user: action.payload };

    case "REGISTER":
      return { ...state, user: action.payload };

    case "VIDEO":
      return {
        ...state,
        playing:
          state.trends.find((item) => item.id === Number(action.payload)) ||
          state.myList.find((item) => item.id === Number(action.payload)) ||
          [],
      };

    default:
      return state;
  }
};

export default reducer;
