function Filters({ categories, handelSelectedCategory, selectedCategory }) {
  return (
    <ul className="h-fit rounded border w-60">
      {categories.map((p) => {
        return (
          <li onClick={() => handelSelectedCategory(p.id)} key={p.id} className={`flex gap-4 items-center p-4 border-b-2 transition-all cursor-pointer last:border-0 hover:bg-slate-200 ${selectedCategory === p.id ? "bg-slate-300 hover:bg-slate-300" : ""}`}>
            <p>{p.name}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default Filters;
