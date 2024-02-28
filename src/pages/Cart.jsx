import CartItem from "../components/CartItem";

function Cart({ products, handelMinus, handelPlus, handelReset, addToCart }) {
  const inCartItems = products.filter((p) => p.inCart);

  if (!inCartItems.length) {
    return <div className="text-center mt-32 font-semibold text-slate-600">Your cart is empty</div>;
  }
  return (
    <div className="mt-20 flex flex-col items-center">
      {inCartItems.map((p) => (
        <CartItem product={p} key={p.id} addToCart={addToCart} handelMinus={handelMinus} handelPlus={handelPlus} />
      ))}
      <button onClick={handelReset} className="border rounded bg-slate-700 text-white w-40 p-3 ">
        Clear
      </button>
    </div>
  );
}

export default Cart;
