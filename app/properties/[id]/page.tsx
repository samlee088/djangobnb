import ReservationSideBar from "@/app/components/properties/ReservationSideBar";
import Image from "next/image";
import React from "react";

const PropertyDetailPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
        <Image
          src="/beach_1.jpg"
          fill
          className="object-cover w-full h-full"
          alt="Beach house"
        />
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="py-6 pr-6 col-span-3">
          <h1 className="mb-4 text-4xl">Property name</h1>

          <span className="mb-6 block text-lg text-gray-600">
            4 guests - 2 bedrooms - 1 bathroom
          </span>

          <hr />

          <div className="py-6 flex items-center space-x-4">
            <Image
              src="/profile_pic_1.jpg"
              width={50}
              height={50}
              className="rounded-full"
              alt="the user image"
            />
          </div>

          <p>
            <strong>John Doe</strong> is your host
          </p>
          <hr />

          <p className="mt-6 text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
            minus sit praesentium porro consequuntur dolorem voluptatibus
            cupiditate, exercitationem doloribus suscipit veritatis consequatur,
            expedita dolore quae accusamus ullam deserunt omnis ipsam?
          </p>
        </div>
        <ReservationSideBar />
      </div>
    </main>
  );
};

export default PropertyDetailPage;
