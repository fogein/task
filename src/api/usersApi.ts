import { UsersType } from "../store/reducers/UsersReducer";
import { instance } from "./api";

export const usersApi = {
  async getUsers(limit?: number, page?: number) {
    const res = await instance.get<UsersType>(
      `users/list?limit=${limit}&offset=${page}`
    );
    return res.data;
  },
};
