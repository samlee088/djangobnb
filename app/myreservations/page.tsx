import Image from "next/image";
import React from "react";
const MyReservationsPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <h1 className="mt-6 mb-2 text-2xl">My Reservations</h1>

      <div>
        <div className="p-5 mt-4 grid grid-cols-4 gap-4 shadow-md border border-gray-300">
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
        </div>
      </div>
    </main>
  );
};

export default MyReservationsPage;
