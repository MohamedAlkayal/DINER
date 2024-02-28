import { useParams } from "react-router-dom";

function ProductDetails({ addToCart, categories, products }) {
  const { id } = useParams();
  const product = products.find((p) => (p.id = id));
  const category = categories.find((c) => c.id === product.category_id);

  return (
    <div className=" w-96 border rounded p-8 m-auto mt-12 bg-sky-50">
      <div className="flex items-center justify-between mb-1">
        <p className="text-xl text-slate-600 font-semibold">{product.name}</p>
        <p className="border rounded w-fit py-1 px-2 bg-slate-600 text-white text-sm">{category.name}</p>
      </div>
      <p className="mb-2">{product.price} $</p>
      <p className="text-sm mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sequi provident porro, quos mollitia molestias, explicabo laboriosam velit quo neque laudantium praesentium tenetur esse consequatur nihil veniam.</p>
      <button onClick={() => addToCart(product.id)} className={` w-40 flex justify-center items-center gap-2 border rounded  py-1 px-2 text-white ${product.inCart ? "bg-red-500" : "bg-green-600"}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
        </svg>
        {product.inCart ? "Remove" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductDetails;
