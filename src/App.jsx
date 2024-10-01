import logo from "./logo.svg";
import "./App.css";
import Category from "./Category";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  let [finalCategory, setFinalCategory] = useState([]);
  let [finalPro, setFinalProduct] = useState([]);
  let [catName, setCatName] = useState("");

  let getCategory = () => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => res.data)
      .then((finalRes) => {
        setFinalCategory(finalRes);
      });
  };

  let getProducts = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((proRes) => proRes.data)
      .then((finalRes) => {
        setFinalProduct(finalRes.products);
        // console.log(finalRes);
      });
  };

  useEffect(() => {
    getCategory();
    getProducts();
    // console.log(finalCategory);
  }, []);

  useEffect(() => {
    if (catName !== "") {
      axios
        .get(`https://dummyjson.com/products/category/${catName}`)
        .then((proRes) => proRes.data)
        .then((finalRes) => {
          setFinalProduct(finalRes.products);
        });
    }
  }, [catName]);

  let PItems = finalPro.map((products, index) => {
    return <ProductItems key={index} pData={products} />;
  });

  return (
    <>
      <div className="py-[40px]">
        <div className="max-w-[1320] mx-auto">
          <h1 className="text-center text-[40px] font-bold mb-[30px]">
            Our Products
          </h1>
          <div className="grid grid-cols-[30%_auto] gap-[20px]">
            <div>
              <Category finalCategory={finalCategory} setCatName={setCatName} />
            </div>
            <div>
              <div className="grid grid-cols-3 gap-5">
                {finalPro.length >= 1 ? PItems : "No Product Found"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
function ProductItems({ pData }) {
  return (
    <div className="shadow-lg text-center pb-4">
      <img src={pData.thumbnail} className="w-[100%] h-[220px]" />
      <h4>{pData.title}</h4>
      <b>${pData.price}</b>
    </div>
  );
}
