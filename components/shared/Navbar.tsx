import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex  items-center justify-center bg-slate-900 text-white py-4 gap-8">
      <Link href="/products" className="flex">
        <FaHome className="text-2xl" />
        <p className="ml-1 ">Home</p>
      </Link>
      <div className="flex items-end">
        <Link href="/cart" className="flex">
          <FaCartPlus className="text-2xl" />
          <p className="ml-1 ">Cart</p>
        </Link>
        {/* <span className="absolute -right-2 -top-2 text-base bg-black w-total text-sm rounded-full text-white	text-center	"></span> */}
      </div>
      {/* <Link href="#" className="flex">
        <FaUser className="text-xl" />
        <p className="ml-1 ">Account</p>
      </Link> */}
    </nav>
  );
};

export default Navbar;
