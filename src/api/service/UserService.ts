import { AxiosResponse } from "axios";
import { MyAxios } from "../axios";
import { IUser } from "../types";

type StandardParams = {
  sort?: "asc" | "desc";
  limit?: number;
};

const getAll = async (
  params?: StandardParams
): Promise<AxiosResponse<IUser[]>> => {
  return MyAxios.get<IUser[]>("/users", {
    params: {
      limit: params?.limit,
      sort: params?.sort,
    },
  }).then((res) => res);
};
/**
 *
 *
 * @description TESTED <-&&-> WORKS
 *
 *
 */
const getOne = async (id: number): Promise<AxiosResponse<IUser>> => {
  return await MyAxios.get<IUser>(`/users/${id}`).then((res) => res);
};

/**
 *
 *
 * @description TESTED <-&&-> WORKS
 *
 * @returns User, but nothing is updated on the backend
 *
 *
 *
 */
const createOne = async (user: IUser): Promise<AxiosResponse<IUser>> => {
  return await MyAxios.post<IUser>(`/products/`, user).then((res) => res);
};

/**
 *
 *
 * @description TESTED <-&&-> WORKS
 *
 * @returns User, but nothing is updated on the backend
 *
 *
 *
 */
const updateOne = async (params: {
  user: IUser;
  id: number;
}): Promise<AxiosResponse<IUser>> => {
  const { id, user } = params;

  return await MyAxios.put<IUser>(`/users/${id}`, user).then((res) => res);
};
/**
 *
 *
 * @description TESTED <-&&-> WORKS
 *
 * @returns User, but nothing is updated on the backend
 *
 *
 *
 */
const deleteOne = async (id: number): Promise<AxiosResponse<IUser>> => {
  return await MyAxios.delete<IUser>(`/users/${id}`).then((res) => res);
};

export const UserService = { getAll, getOne, createOne, updateOne, deleteOne };
