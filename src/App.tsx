import { useEffect, useState } from "react";
import { ProductService } from "./api/service/ProductService";
import { Product } from "./api/types";
import "./App.css";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  const [product, setProduct] = useState<Product>();

  const [categories, setCategories] = useState<any[]>([]);

  const [catProducts, setCatProducts] = useState<Product[]>([]);

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
      </div>

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
  );
}

export default App;
