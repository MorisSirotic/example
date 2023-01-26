/**
 *
 *
 * @description https://fakestoreapi.com/docs
 */
export type Product = {
  id?: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate: 0;
    count: 0;
  };
};
