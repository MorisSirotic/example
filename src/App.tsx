import { useEffect, useState } from "react";
import { CartService } from "./api/service/CartService";
import { ProductService } from "./api/service/ProductService";
import { UserService } from "./api/service/UserService";
import { Cart, Product, User } from "./api/types";
import "./App.css";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  const [product, setProduct] = useState<Product>();

  const [categories, setCategories] = useState<any[]>([]);

  const [catProducts, setCatProducts] = useState<Product[]>([]);

  //CART

  const [carts, setCarts] = useState<Cart[]>([]);

  const [cart, setCart] = useState<Cart>();

  const [userCart, setUserCart] = useState<Cart[]>([]);

  //USER

  const [users, setUsers] = useState<User[]>([]);

  const [user, setUser] = useState<User>();

  useEffect(() => {
    ProductService.getAll({ limit: 2 }).then((res) => {
      setProducts(res.data);
    });

    ProductService.getOne("1").then((res) => setProduct(res.data));

    ProductService.getAllCategories().then((res) => setCategories(res.data));

    ProductService.getAllByCategory("electronics", {
      limit: 20,
      sort: "desc",
    }).then((res) => setCatProducts(res.data));
  }, []);

  //CART USE EFFECT

  useEffect(() => {
    CartService.getAll({
      date: { startDate: "2020-03-10", endDate: "2020-10-10" },
    }).then((res) => {
      setCarts(res.data);
    });

    CartService.getAllByUser(2).then((res) => {
      setUserCart(res.data);
    });

    CartService.getOne(2).then((res) => {
      setCart(res.data);
    });
  }, []);

  //USER USE EFFECT

  useEffect(() => {
    UserService.getAll({ limit: 2 }).then((res) => {
      setUsers(res.data);
    });

    UserService.getOne(1).then((res) => {
      setUser(res.data);
    });
  });

  return (
    <div className="App">
      {products.map((prod, indx) => {
        return (
          <div key={indx}>
            <p>{prod.title}</p>
          </div>
        );
      })}

      {product && <p>{product.title} THIS ISN'T PART OF THE ABOVE LIST</p>}

      <button
        onClick={() => {
          ProductService.createOne({
            title: "test create product",
            price: 13.5,
            description: "lorem ipsum set",
            image: "https://i.pravatar.cc",
            category: "electronic",
          }).then((res) => console.log(res));
        }}
      >
        POST PRODUCT
      </button>

      <button
        onClick={() => {
          ProductService.updateOne({
            id: "1",
            product: {
              title: "test update product",
              price: 13.5,
              description: "lorem ipsum set",
              image: "https://i.pravatar.cc",
              category: "electronic",
            },
          }).then((res) => console.log(res));
        }}
      >
        PUT PRODUCT
      </button>

      <button
        onClick={() => {
          ProductService.deleteOne("1").then((res) => console.log(res));
        }}
      >
        DELETE PRODUCT
      </button>

      <div>
        -------------------------------CATEGORIES-----------------------------------------
        {categories.map((cat, indx) => {
          return <p key={indx}>{cat}</p>;
        })}
        <div>
          -------------------------------CATEGORY-PRODUCTS-----------------------------------------
          {catProducts.map((cat, indx) => {
            return (
              <div key={indx}>
                <p>{cat.title}</p>
                <p>{cat.price}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        --------------------------------------CART-----------------------------------------
        <div>
          <p>---------USER-CART(s)--------------</p>
          {userCart.map((cat, indx) => {
            return (
              <div key={indx}>
                <p>{cat.id}</p>
                <p>{cat.date.toString()}</p>
              </div>
            );
          })}

          <p>-----------------------</p>
        </div>
        <div>
          <p>---------ALL-CART(s)--------------</p>

          {carts.map((cat, indx) => {
            return (
              <div key={indx}>
                <p>{cat.id}</p>
                <p>{cat.date.toString()}</p>
              </div>
            );
          })}
          <p>-----------------------</p>
        </div>
        <div>
          <p>---------ONE-CART(s)--------------</p>
          {cart && (
            <p>
              {cart.id} {cart.date.toString()}
            </p>
          )}
          <p>-----------------------</p>
        </div>
        <button
          onClick={() => {
            CartService.addProduct({
              userId: 5,
              date: "2020-02-03",
              products: [{ productId: 5, quantity: 1 }],
            }).then((res) => console.log(res));
          }}
        >
          POST CART
        </button>
        <button
          onClick={() => {
            CartService.updateProduct(7, {
              userId: 5,
              date: new Date(),
              products: [
                { productId: 5, quantity: 1 },
                { productId: 2, quantity: 3 },
              ],
            }).then((res) => console.log(res));
          }}
        >
          PUT CART
        </button>
        <button
          onClick={() => {
            CartService.deleteOne("1").then((res) => console.log(res));
          }}
        >
          DELETE CART
        </button>
      </div>

      <div>
        --------------------------------------USER-----------------------------------------
        {users.map((user, indx) => {
            return (
              <div key={indx}>
                <p>{user.id}</p>
                <p>{user.email}</p>
              </div>
            );
          })}

        {user && (
            <p>
              {user.id} {user.email}
            </p>
          )}
        <button
          onClick={() => {
            UserService.createOne({
              email:'John@gmail.com',
              username:'johnd',
              password:'m38rmF$',
              name:{
                  firstName:'John',
                  lastName:'Doe'
              },
              address:{
                  city:'kilcoole',
                  street:'7835 new road',
                  number:3,
                  zipcode:'12926-3874',
                  geolocation:{
                      lat:'-37.3159',
                      long:'81.1496'
                  }
              },
              phone:'1-570-236-7033'
          }).then((res) => console.log(res));
          }}
        >
          POST USER
        </button>
        <button
          onClick={() => {
            UserService.updateOne({
              id: 1,
              user: {
                email: "John@gmail.com",
                username: "johnd",
                password: "m38rmF$",
                name: {
                  firstName: "John",
                  lastName: "Doe",
                },
                address: {
                  city: "kilcoole",
                  street: "7835 new road",
                  number: 3,
                  zipcode: "12926-3874",
                  geolocation: {
                    lat: "-37.3159",
                    long: "81.1496",
                  },
                },
                phone: "1-570-236-7033",
              },
            }).then((res) => console.log(res));
          }}
        >
          PUT USER
        </button>
        <button
          onClick={() => {
            UserService.deleteOne(1).then((res) => console.log(res));
          }}
        >
          DELETE USER
        </button>
      </div>
    </div>
  );
}

export default App;
