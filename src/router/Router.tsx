import { createBrowserRouter, Link } from "react-router-dom";
import { CartService } from "../api/service/CartService";
import { ProductService } from "../api/service/ProductService";
import { UserService } from "../api/service/UserService";
import { CartsTable } from "../components/CartsTable";
import { Product } from "../components/Product";
import { ProductList } from "../components/ProductList";
import { UsersTable } from "../components/UsersTable";
import { AppRoute } from "./routes/App";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <AppRoute />,
    loader: ({ params }) => {
      return null;
    },
    handle: {
      crumb: () => <Link to="/">Home</Link>,
    },
    children: [
      {
        path: "/products",
        element: <ProductList />,
        loader: async ({ params }) => {
          return ProductService.getAll().then((res) => res.data);
        },
        handle: {
          crumb: () => <Link to="/products">Products</Link>,
        },
      },
      {
        path: "/products/:id",
        element: <Product />,
        loader: async ({ params }: any) => {
          return await ProductService.getOne(params.id).then((res) => res.data);
        },
        handle: {
          crumb: () => <Link to="/products">Products</Link>,
        },
      },
      {
        path: "/carts",
        element: <CartsTable />,
        loader: async ({ params }) => {
          const res = await CartService.getAll();
          return res.data;
        },
        handle: {
          crumb: () => <Link to="/carts">Carts</Link>,
        },
      },

      {
        path: "/cart/:id",
        element: <ProductList />,
        loader: async ({ params }: any) => {
          const res = await CartService.getOne(params.id);
          return res.data;
        },
      },
      {
        path: "/users",
        element: <UsersTable />,
        loader: async () => {
          const res = await UserService.getAll();
          return res.data;
        },
        handle: {
          crumb: () => <Link to="/users">Users</Link>,
        },
      },
    ],
  },
]);
