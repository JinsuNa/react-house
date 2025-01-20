import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import data from "./data/house-data";
import Product from "./component/Product";

function App() {
  const [product, setProduct] = useState(data);
  const [detail, setDetail] = useState(data);
  const [selectedIndex, setSelectedIndex] = useState(0); // 클릭한 인덱스를 저장
  const like = (index) => {
    const updateProduct = [...product];
    updateProduct[index].like += 1;
    setProduct(updateProduct);
  };

  return (
    <div className="App">
      <div className="nav">
        <h3>Home</h3>
        <h3>Shop</h3>
        <h3>About</h3>
      </div>

      {product.map((p, index) => {
        return (
          <div key={index}>
            {/* title 클릭 시 setSelectedIndex 호출 */}
            <Product
              product={product}
              index={index}
              onClick={() => setSelectedIndex(index)} // 클릭한 인덱스 저장
              onLike={like}
            />
          </div>
        );
      })}
      <div className="modal">
        <img src={product[selectedIndex].image} alt="" />
        <h4>{product[selectedIndex].title}</h4>
        <p>집 소개: {product[selectedIndex].content}</p>
        <p>월세: {product[selectedIndex].price}</p>
      </div>
    </div>
  );
}

export default App;
