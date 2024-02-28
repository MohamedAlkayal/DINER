import { Link } from "react-router-dom";

function NavBar({ products }) {
  let cartItemsCount = products.filter((p) => p.inCart);

  return (
    <nav className="flex items-center justify-between px-8 py-3 bg-sky-900 text-orange-100">
      <div className="font-black text-3xl  ">
        <Link to={"/"}>DINER</Link>
      </div>
      <ul className="flex items-center gap-6">
        <li>
          <Link to={"/about"}>About</Link>
        </li>

        <Link to={"cart"}>
          <li className="flex gap-2 items-center border w-fit rounded px-3 p-1 ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ">
              <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
            </svg>
            <p className="w-fit mr-2">Cart</p>
            <p>{cartItemsCount.length}</p>
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
