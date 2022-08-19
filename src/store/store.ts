import { Action, AnyAction, applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware, { ThunkAction, ThunkDispatch } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./reducers/AuthReducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { usersReducer } from "./reducers/UsersReducer";


const reducers = combineReducers({
auth:authReducer,
users:usersReducer
});

type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>;

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type ActionTypesFromStore<
  T extends { [key: string]: (...args: any[]) => any }
> = ReturnType<PropertiesTypes<T>>;

export type BaseThunkType<A extends Action, R = void> = ThunkAction<
  R,
  AppStateType,
  unknown,
  A
>;
export type TypedDispatch = ThunkDispatch<AppStateType, any, AnyAction>;

export const useTypedDispatch = () => useDispatch<TypedDispatch>();
export const useTypedSelector: TypedUseSelectorHook<AppStateType> = useSelector;

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
