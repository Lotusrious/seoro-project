import React from 'react';

const Keywords = () => {
  return (
    <div> {/* Wrapper div for this section */}
      <h2 className="text-[#121715] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">This Month’s Recommended Travel Keywords</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDdrb9vTOIqjTKj_NptOxTmdSIJ_-eLPX-KHfKK5BvM1HsKXey5Jw-sMKwd2GH1R5oDTVJCQuIrw86PH90yKrZcGOctWGzz1c5pHvArFZrKWUmxP-gcHevRpaLdiEglPGEc4z9pIOt5SG49XoARPCx8xvfBiOSHW90GuF_Mihi-0Re49N8SLGHU8rhA4bbkfv_gP_wQswuk_o9jJAU6CQqa__fDJ7giM2ke4sdX9D0-eiZqIt_aq9zmpfA-HhSiI-frAQW4wAPUAAxB")',
            }}
          ></div>
          <div>
            <p className="text-[#121715] text-base font-medium leading-normal">#HongdaeNightlife</p>
            <p className="text-[#65867a] text-sm font-normal leading-normal">Explore the vibrant nightlife in Hongdae.</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBWSqhuBZFDBLH8j3HVP13UTJNU35CxGd0oKr0FuFRl_NKvdd1wEtvLHZmjxykg5ahx76hXBFTEwkVxf95y8YcbmaUYYA41KOcJECqvE0dJXF4Nla9hmU7fIlF1XwZiHun4IR4gp21Q9ajWQcXCiyZybzOHJqJkbOPcFvno5696GjDbrizLqrEFLrOVZk16JlTq-Yt6tTPH-wdctNFV-u0SByWpHH_T51MFYh9KWZihYLkh4Ay10XUh1MV4UP6XUcGL9RVZQ5YlXj1D")',
            }}
          ></div>
          <div>
            <p className="text-[#121715] text-base font-medium leading-normal">#JejuAccommodations</p>
            <p className="text-[#65867a] text-sm font-normal leading-normal">Find the best places to stay in Jeju.</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAl5z3rCLprJzPc12hxu12NBWk1qCP4GqCkNRk9X2GdHQSSRBAL04paTK9upJ1PXnhQ7riIfDyWGX1E_OlJ81WayxOETFzoltOSMtergykWE27HHyUrUk-_ACzDlIXW4NUDkte48KzHcpoTStr36HAg_sxjEEikfk6YiF-0OnSSmEtJIi8SHkna7LCVUa5D3IVS1fCH_ani5vn8o5B5IqRkKK9zs8GjAzq7kAYHn3TYDwTwtNRnIPEYCCQK-y_6jMoRPPJivxH5_T5F")',
            }}
          ></div>
          <div>
            <p className="text-[#121715] text-base font-medium leading-normal">#BusanCafeTour</p>
            <p className="text-[#65867a] text-sm font-normal leading-normal">Enjoy a cafe-hopping experience in Busan.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keywords;
