const initialState = { prenom: null };

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        prenom: action.payload,
      };

    case "LOGOUT":
      return initialState;

    default:
      return state;
  }
}
