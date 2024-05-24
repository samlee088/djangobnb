import React from "react";

const SearchFilters = () => {
  return (
    <div className="h-[64px] flex flex-row items-center justify-between border rounded-full">
      <div>
        <div className="flex flex-row items-center justify-between">
          <div className="w-[250px] h-[64px] px-8 flex flex-columns rounded-full hover:bg-gray-100">
            Where
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
