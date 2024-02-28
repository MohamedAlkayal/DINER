function CartItem({ product, handelMinus, handelPlus, addToCart }) {
  return (
    <div className=" flex items-center gap-3  w-fit p-8 mb-4 border rounded">
      <button onClick={() => addToCart(product.id)} className="text-red-500">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <span className="p-2 w-40">{product.name}</span>
      <button onClick={() => handelMinus(product.id)} className="block w-10 p-2 text-center bg-slate-200 rounded">
        -
      </button>
      <span className="p-2 w-12 text-center rounded border ">{product.countInCart}</span>
      <button onClick={() => handelPlus(product.id)} className="block w-10 p-2 text-center bg-slate-200 rounded">
        +
      </button>
    </div>
  );
}

export default CartItem;
