import { AxiosResponse } from "axios";
import { MyAxios } from "../axios";
import { User } from "../types";

type StandardParams = {
  sort?: "asc" | "desc";
  limit?: number;
};

const getAll = async (
  params: StandardParams
): Promise<AxiosResponse<User[]>> => {
  return MyAxios.get<User[]>("/users", {
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
const getOne = async (id: number): Promise<AxiosResponse<User>> => {
  return await MyAxios.get<User>(`/users/${id}`).then((res) => res);
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
const createOne = async (user: User): Promise<AxiosResponse<User>> => {
  return await MyAxios.post<User>(`/products/`, user).then((res) => res);
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
  user: User;
  id: number;
}): Promise<AxiosResponse<User>> => {
  const { id, user } = params;

  return await MyAxios.put<User>(`/users/${id}`, user).then((res) => res);
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
const deleteOne = async (id: number): Promise<AxiosResponse<User>> => {
  return await MyAxios.delete<User>(`/users/${id}`).then((res) => res);
};

export const UserService = { getAll, getOne, createOne, updateOne, deleteOne };
