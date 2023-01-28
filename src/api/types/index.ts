/**
 *
 *
 * @description https://fakestoreapi.com/docs
 */
export type IProduct = {
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

export type ICart = {
  id: number;
  userId: number;
  date: string;
  products: [
    {
      productId: number;
      quantity: number;
    }
  ];
};

export type IUser = {
  id?: number;
  address: Address;

  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
};
type Address = {
  geolocation: {
    long: string;
    lat: string;
  };
  city: string;
  street: string;
  number: number;
  zipcode: string;
};
