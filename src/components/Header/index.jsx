import React, { useEffect } from "react";
import "./Header.css";
import shopping from "../../assets/shopping.png";
import search from "../../assets/search.png";
import { useCategory } from "../../contexts/CategoryContext";

const Header = () => {
  const { setSelectedCategory, selectedCategory } = useCategory();
  const categories = [
    "all",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);
  return (
    <div className="flex justify-between h-auto p-4 bg-white">
      <div className="flex items-center relative">
        <input
          type="text"
          className="w-[200px] h-[40px] border-b focus:outline-none"
          placeholder="search items"
        />
        <img
          src={search}
          alt="search icon"
          className="w-[100%] max-w-4 absolute right-0 "
        />
      </div>
      <div className="w-auto flex flex-col items-center justify-center">
        <h1 className="text-5xl border-b !mt-3 ">DIGISTYLE</h1>
        <ul className="flex items-center gap-12 !my-4 text-[#626262] text-xl font-medium">
          {categories.map((cat) => (
            <li
              key={cat}
              className="cursor-pointer hover:underline"
              onClick={() => {
                if (cat === "all") {
                  setSelectedCategory(null);
                } else {
                  setSelectedCategory(cat);
                }
              }}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-4 ">
        <button>login</button>
        <img src={shopping} alt="shopping icon" className="w-[100%] max-w-7" />
      </div>
    </div>
  );
};
export default Header;
