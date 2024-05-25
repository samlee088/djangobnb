import Image from "next/image";
import React from "react";

const Categories = () => {
  return (
    <div className="pt-2 cursor-pointer pb-6 flex items-center space-x-12">
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100">
        <Image
          src="/cabins_icons.jpg"
          alt="cabins icon"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default Categories;
