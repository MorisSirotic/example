import { AxiosResponse } from "axios";
import { MyAxios } from "../axios";
import { Product } from "../types";

type StandardParams = {
  sort?: "asc" | "desc";
  limit?: number;
};

const getAll = async (
  params: StandardParams
): Promise<AxiosResponse<Product[]>> => {
  return MyAxios.get<Product[]>("/products", {
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
const getOne = async (id: string): Promise<AxiosResponse<Product>> => {
  return await MyAxios.get<Product>(`/products/${id}`).then((res) => res);
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
const createOne = async (product: Product): Promise<AxiosResponse<Product>> => {
  return await MyAxios.post<Product>(`/products/`, product).then((res) => res);
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
  product: Product;
  id: string;
}): Promise<AxiosResponse<Product>> => {
  const { id, product } = params;

  return await MyAxios.put<Product>(`/products/${id}`, product).then(
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
const deleteOne = async (id: string): Promise<AxiosResponse<Product>> => {
  return await MyAxios.delete<Product>(`/products/${id}`).then((res) => res);
};

const getAllCategories = async (): Promise<AxiosResponse<unknown[]>> => {
  return MyAxios.get<Product[]>("/products/categories").then((res) => res);
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
): Promise<AxiosResponse<Product[]>> => {
  return await MyAxios.get<Product[]>(`/products/category/${slug}`, {
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
