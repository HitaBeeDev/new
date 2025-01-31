import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <div>
      <Link to="/">Home logo food</Link>

      <SearchOrder />

      <p>anahita</p>
    </div>
  );
}

export default Header;
