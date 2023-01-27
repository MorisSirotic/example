import { AxiosResponse } from "axios";
import { MyAxios } from "../axios";
import { Cart, Product } from "../types";

type StandardParams = {
  sort?: "asc" | "desc";
  limit?: number;
  date?: DateParams;
};

type DateParams = {
  startDate?: string;
  endDate?: string;
};

type ProductsArray = {
  productId: number;
  quantity: number;
};
const getAll = async (
  params?: StandardParams
): Promise<AxiosResponse<Cart[]>> => {
  return MyAxios.get<Cart[]>("/carts", {
    params: {
      limit: params?.limit,
      sort: params?.sort,
      startDate: params?.date?.startDate,
      endDate: params?.date?.endDate,
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
const getOne = async (id: number): Promise<AxiosResponse<Cart>> => {
  return await MyAxios.get<Cart>(`/carts/${id}`).then((res) => res);
};
/**
 *
 *
 * @description TESTED <-&&-> WORKS
 *
 *
 */
const getAllByUser = async (id: number): Promise<AxiosResponse<Cart[]>> => {
  return await MyAxios.get<Cart[]>(`/carts/user/${id}`).then((res) => res);
};
/**
 *
 *
 * @description TESTED <-&&-> WORKS
 *
 * @returns Cart, but nothing is updated on the backend
 *
 *
 *
 */
const addProduct = async (info: {
  userId: number;
  date: string;
  products: ProductsArray[];
}): Promise<AxiosResponse> => {
  return await MyAxios.post(`/products/`, { info }).then((res) => res);
};
/**
 *
 *
 * @description TESTED <-&&-> WORKS
 *
 * @returns Cart, but nothing is updated on the backend
 *
 *
 *
 */
const updateProduct = async (
  cartId: number,
  info: {
    userId: number;
    date: Date;
    products: ProductsArray[];
  }
): Promise<AxiosResponse<Product>> => {
  return await MyAxios.put<Product>(`/carts/${cartId}`, info).then(
    (res) => res
  );
};

/**
 *
 *
 * @description TESTED <-&&-> WORKS
 *
 * @returns Cart, but nothing is updated on the backend
 *
 *
 *
 */
const deleteOne = async (id: string): Promise<AxiosResponse> => {
  return await MyAxios.delete(`/carts/${id}`).then((res) => res);
};

export const CartService = {
  getAll,
  getOne,
  deleteOne,
  addProduct,
  updateProduct,
  getAllByUser,
};
