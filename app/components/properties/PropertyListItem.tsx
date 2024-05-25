import Image from "next/image";
import React from "react";

const PropertyListItem = () => {
  return (
    <div className="cursor-pointer">
      <div className="relative overflow-hidden aspect-square rounded-xl">
        <Image
          fill
          src="/beach_1.jpg"
          sizes="(max-width: 768px): 768px, (max-width: 1200px): 768px, 768px"
          className="hover:scale-110 object-cover transition h-full w-full"
          alt="beach house"
        />
      </div>
    </div>
  );
};

export default PropertyListItem;
