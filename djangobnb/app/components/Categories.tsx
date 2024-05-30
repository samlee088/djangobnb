import Image from "next/image";
import React from "react";

const categoryImages = [
  { reference: "/cabins_icons.jpg", name: "cabins" },
  { reference: "/amazing_views_icon.jpg", name: "amazing views" },
  { reference: "/lakefront_icon.jpg", name: "lakefront" },
  { reference: "/tropical_icon.jpg", name: "tropical" },
];
const Categories = () => {
  return (
    <div className="pt-2 cursor-pointer pb-6 flex items-center space-x-12">
      {/* <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-200 opacity-60 hover:opacity-100">
        <Image
          src="/cabins_icons.jpg"
          alt="cabins icon"
          width={20}
          height={20}
        />

        <span className="text-xs">Beach</span>
      </div> */}

      {categoryImages.map((category) => (
        <div
          className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white hover:border-gray-200 opacity-60 hover:opacity-100"
          key={category.name}
        >
          <Image
            src={category.reference}
            alt="cabins icon"
            width={20}
            height={20}
          />

          <span className="text-xs">{category.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Categories;
