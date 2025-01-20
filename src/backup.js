import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Modal from "./Modal";
import data from "./data/productData";

function App() {
  let [menus, setMenus] = useState(["Home", "Shop", "About"]);

  let [prices, setPrices] = useState([50, 55, 70]);

  let [products, setProducts] = useState([
    "역삼동원룸",
    "천호동원룸",
    "마포구원룸",
  ]);

  let [content, setContent] = useState([
    "침실만 따로 있는 공용 셰어하우스입니다. 최대 2인 가능",
    "2층 원룸입니다. 비올 때 물 가끔 들어오는거 빼면 좋아요",
    "살기 좋아요. 주변에 편의점 10개 넘어요.",
  ]);

  let [like, setLike] = useState([0, 0, 0]);

  let [selectedTitleIndex, setSelectedTitleIndex] = useState(null);

  let [showModal, setShowModal] = useState(false);

  // 좋아요 추가하는 함수
  function addLike(num) {
    // 1. 좋아요 배열을 복사
    let copyLike = [...like];
    // 2. 사본에 해당 위치 + 1
    copyLike[num] = copyLike[num] + 1;
    // 3. setLike 함수로 수정
    setLike([...copyLike]);
  }

  return (
    <div className="App">
      <div className="nav">
        <h3>Home</h3>
        <h3>Shop</h3>
        <h3>About</h3>
      </div>

      {products.map((x, index) => {
        return (
          <div className="house-content">
            <div className="houseTitle">
              <h4
                onClick={() => {
                  setSelectedTitleIndex(index);
                  if (selectedTitleIndex != index) {
                    setShowModal(true);
                  } else if (
                    selectedTitleIndex == index &&
                    showModal == false
                  ) {
                    setShowModal(true);
                  } else {
                    setShowModal(false);
                  }
                }}
              >
                {products[index]}
              </h4>
              <a
                href="#"
                onClick={(e) => {
                  e.stopPropagation();
                  addLike(index);
                }}
              >
                ☎ 허위 매물 신고
              </a>
              {like[index]}
            </div>

            <span>{prices[index]}만원</span>
          </div>
        );
      })}

      {showModal == true ? (
        <Modal
          content={content[selectedTitleIndex]}
          prices={prices[selectedTitleIndex]}
        />
      ) : null}
    </div>
  );
}

export default App;
