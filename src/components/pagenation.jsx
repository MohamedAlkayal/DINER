import { range } from "../utilities/numbers";

function pagenation() {
  let pages = range(4);
  return <div>{pages.length}</div>;
}

export default pagenation;
