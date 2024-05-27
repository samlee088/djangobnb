import Image from "next/image";
import React from "react";
const MyReservationsPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <h1 className="my-6 text-2xl">My Reservations</h1>

      <div className="space-y-4">
        <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300">
          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                src="/beach_1.jpg"
                fill
                className="hover:scale-110 object-cover transition h-full w-full"
                alt="beach house"
              />
            </div>
          </div>

          <div className="col-span-3 space-y-2">
            <h2 className="mb-4 text-xl">Property name</h2>
            <p>
              <strong>Check in date:</strong> 14/2/2024
            </p>
            <p>
              <strong>Check out date:</strong> 16/2/2024
            </p>
            <p>
              <strong>Number of nights:</strong> 2
            </p>
            <p>
              <strong>Total Price:</strong> $200
            </p>
          </div>
        </div>
        <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300">
          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                src="/beach_1.jpg"
                fill
                className="hover:scale-110 object-cover transition h-full w-full"
                alt="beach house"
              />
            </div>
          </div>

          <div className="col-span-3 space-y-2">
            <h2 className="mb-4 text-xl">Property name</h2>
            <p>
              <strong>Check in date:</strong> 14/2/2024
            </p>
            <p>
              <strong>Check out date:</strong> 16/2/2024
            </p>
            <p>
              <strong>Number of nights:</strong> 2
            </p>
            <p>
              <strong>Total Price:</strong> $200
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyReservationsPage;
