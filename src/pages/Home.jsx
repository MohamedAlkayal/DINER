import { useEffect, useState } from "react";
import Filters from "../components/Filters";
import MenuItem from "../components/MenuItem";

function Home({ categories, products, addToCart }) {
  const [search, setSearch] = useState("");
  const [tempSearch, setTempSearch] = useState("");
  const [loadingSearch, setLoadingSearch] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState(0);
  const handelSelectedCategory = function (id) {
    setSelectedCategory(id);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setLoadingSearch(false);
      setSearch(tempSearch);
    }, 1000);

    return () => {
      setLoadingSearch(true);
      clearTimeout(handler);
    };
  }, [tempSearch]);

  // Set fitlered products
  const filteredProducts = selectedCategory === 0 ? [...products] : products.filter((p) => p.category_id === selectedCategory);
  // Searched products
  const searchedProducts = filteredProducts.filter((p) => p.name.toLowerCase().includes(search));

  const handelSearchChange = (e) => {
    e.preventDefault();
    setTempSearch(e.target.value);
  };

  return (
    <>
      <div className="m-8 mb-4 p-4 text-slate-700 bg-slate-100 border rounded flex items-center justify-between">
        <h1 className="text-xl flex font-black items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path
              fillRule="evenodd"
              d="M10.5 3A1.501 1.501 0 0 0 9 4.5h6A1.5 1.5 0 0 0 13.5 3h-3Zm-2.693.178A3 3 0 0 1 10.5 1.5h3a3 3 0 0 1 2.694 1.678c.497.042.992.092 1.486.15 1.497.173 2.57 1.46 2.57 2.929V19.5a3 3 0 0 1-3 3H6.75a3 3 0 0 1-3-3V6.257c0-1.47 1.073-2.756 2.57-2.93.493-.057.989-.107 1.487-.15Z"
              clipRule="evenodd"
            />
          </svg>
          Menu
        </h1>
        <div>
          <span className="text-sm">{loadingSearch ? "loading..." : ""}</span>
          <input onChange={(e) => handelSearchChange(e)} value={tempSearch} className="border rounded mr-2 p-2" type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="flex gap-4 mx-8">
        <Filters handelSelectedCategory={handelSelectedCategory} selectedCategory={selectedCategory} categories={categories} />
        <div className="w-full">
          {searchedProducts.map((p) => (
            <MenuItem key={p.id} product={p} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
