import { AxiosResponse } from "axios";
import { MyAxios } from "../axios";
import { IProduct } from "../types";

type StandardParams = {
  sort?: "asc" | "desc";
  limit?: number;
};

const getAll = async (
  params?: StandardParams
): Promise<AxiosResponse<IProduct[]>> => {
  return MyAxios.get<IProduct[]>("/products", {
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
const getOne = async (id: string): Promise<AxiosResponse<IProduct>> => {
  return await MyAxios.get<IProduct>(`/products/${id}`).then((res) => res);
};

/**
 *
 *
 * @description TESTED <-&&-> WORKS
 *
 * @returns Product, but nothing is updated on the backend
 *
 *
 *
 */
const createOne = async (
  product: IProduct
): Promise<AxiosResponse<IProduct>> => {
  return await MyAxios.post<IProduct>(`/products/`, product).then((res) => res);
};

/**
 *
 *
 * @description TESTED <-&&-> WORKS
 *
 * @returns Product, but nothing is updated on the backend
 *
 *
 *
 */
const updateOne = async (params: {
  product: IProduct;
  id: string;
}): Promise<AxiosResponse<IProduct>> => {
  const { id, product } = params;

  return await MyAxios.put<IProduct>(`/products/${id}`, product).then(
    (res) => res
  );
};
/**
 *
 *
 * @description TESTED <-&&-> WORKS
 *
 * @returns Product, but nothing is updated on the backend
 *
 *
 *
 */
const deleteOne = async (id: string): Promise<AxiosResponse<IProduct>> => {
  return await MyAxios.delete<IProduct>(`/products/${id}`).then((res) => res);
};

const getAllCategories = async (): Promise<AxiosResponse<unknown[]>> => {
  return MyAxios.get<IProduct[]>("/products/categories").then((res) => res);
};
/**
 *
 *
 * @description TESTED <-&&-> WORKS
 *
 *
 */
const getAllByCategory = async (
  slug: string,
  params?: StandardParams
): Promise<AxiosResponse<IProduct[]>> => {
  return await MyAxios.get<IProduct[]>(`/products/category/${slug}`, {
    params: {
      limit: params?.limit,
      sort: params?.sort,
    },
  }).then((res) => res);
};

/**
 *
 *
 * @description Fully tested and it's working
 */
export const ProductService = {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,

  getAllCategories,
  getAllByCategory,
};
