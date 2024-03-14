import React, { useEffect } from "react";

const BannerPromo = () => {
  return (
    <div className="hidden md:block w-full py-2.5 bg-gray-100">
      <div className="flex justify-between md:px-2.5 lg:px-28">
        <div>
          <h1 className="font-semibold">Dapatkan Promo Menarik disini !!</h1>
        </div>
        <div>
          <div className="flex font-semibold gap-4">
            <h1 className="cursor-pointer">Bantuan</h1>
            <h1 className="cursor-pointer">Layanan</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerPromo;
