import { ActionTypesFromStore, BaseThunkType } from "../store";
import { usersApi } from "./../../api/usersApi";

export type UsersType = {
  total: number,
	per_page: number,
	page: number,
	limit: number,
	offset: number,
	items: Array<UserItem>

}
export type UserItem = {
    id: number;
    name: string;
    role: string;
    ctime: any;

}

let initialState = {
  users: [] as Array<UserItem>,
  total:0,
  limit:5
};
type InitialStateType = typeof initialState;

export const usersReducer = (
  state = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        users: [...action.data],
      };
    case "SET_TOTAL_COUNT_USERS":
      return {
        ...state,
        total: action.data,
      };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter(item => item.id !== action.id),
        total: state.total-1
      };
    default:
      return state;
  }
};

type ActionType = ActionTypesFromStore<typeof actions>;

export const actions = {
  setUsers: (data: Array<UserItem>) => {
    return {
      type: "SET_USERS",
      data,
    } as const;
  },
  setTotalCountUsers: (data: number) => {
    return {
      type: "SET_TOTAL_COUNT_USERS",
      data,
    } as const;
  },
  onDeleteUserAC: (id: number) => {
    return {
      type: "DELETE_USER",
      id,
    } as const;
  },
};

type ThunkType = BaseThunkType<ActionType>;

export const getUsersThunk = (limit:number,page:number=1): ThunkType => {
  return (dispatch) => {
    usersApi.getUsers(limit,page=page*limit-limit).then((data) => {
      dispatch(actions.setUsers(data.items));
      dispatch(actions.setTotalCountUsers(data.total));
    });
  };
};
