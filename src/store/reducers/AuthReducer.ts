import { authApi } from "../../api/authApi";
import { ActionTypesFromStore, BaseThunkType } from "../store";



let initialState = {
email:null as null | string,
authLoader:false  
};
type InitialStateType = typeof initialState

export const authReducer = (state = initialState, action:ActionType): InitialStateType => {
  switch (action.type) {
    case "SET_USER_DATA":
      return {
        ...state,
        email:action.email
      };
    case "AUTH_LOADER":
      return {
        ...state,
        authLoader:action.data
      };
    default:
      return state;
  }
};

type ActionType = ActionTypesFromStore<typeof actions>;


 export const actions ={
  setAuthUserData : (
    email: string | null,
  ) => {
    return {
      type: "SET_USER_DATA",
      email
    }as const
  },
  authLoader : (data:boolean) => {
    return {
      type: "AUTH_LOADER",
      data
    }as const
  },
}

type ThunkType = BaseThunkType<ActionType>

export const loginThunk = (data:{email:string,password:string}):ThunkType => {
  return (dispatch) => {
    dispatch(actions.setAuthUserData(data.email))
     authApi.login(data.email,data.password).then(data => {
      setTimeout(() => {
        dispatch(actions.authLoader(true))
      }, 3000);
     })
  };
};
