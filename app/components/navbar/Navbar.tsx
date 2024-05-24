import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchFilters from "./SearchFilters";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 py-6 border-b bg-white z-10">
      <div className="max-w-[1500px] mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/air_bnb_logo_text_icon.png"
              alt="alt django bnb logo"
              width={180}
              height={38}
            />
          </Link>

          <div>
            <SearchFilters />
          </div>
          <div className="flex items-center space-x-6">
            Add property - User Nav
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;