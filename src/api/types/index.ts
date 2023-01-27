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

export type Cart = {
  id: number;
  userId: number;
  date: Date;
  products: [
    {
      productId: number;
      quantity: number;
    }
  ];
};
