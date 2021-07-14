export const setFavorite = (payload) => ({
  type: "SET_FAVORITE",
  payload,
});

export const deleteFavorite = (payload) => ({
  type: "DELETE_FAVORITE",
  payload,
});

export const loginRequest = (payload) => ({
  type: "LOGIN",
  payload,
});

export const logoutRequest = (payload) => ({
  type: "LOGOUT",
  payload,
});

export const registerRequest = (payload) => ({
  type: "REGISTER",
  payload,
});

export const getVideoSource = (payload) => ({
  type: "VIDEO",
  payload,
});
