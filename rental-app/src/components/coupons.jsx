import React from "react";

const Coupons = () => {
  return (
    // Added padding for better spacing on mobile screens
    <div className="w-full mt-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl py-10 flex text-center items-center justify-center text-blue-400 font-bold">
        Trending Offers
      </h1>

      {/* On mobile (default): flex-col stacks the coupons vertically.
        On large screens (lg:): flex-row places them side-by-side as in your original design.
      */}
      <div className="flex flex-col lg:flex-row items-center justify-center mt-8 gap-8">
        
        {/* Coupon 1 */}
        {/*
          On mobile: w-full makes the card take up the available width.
          On medium screens (md:): w-96 sets a fixed width to match your original design.
        */}
        <div className="w-full md:w-96 h-40 bg-blue-50 rounded-md border border-dashed border-blue-200">
          <div className="flex justify-between">
            <span className="font-bold text-blue-400 mt-3 ml-3 underline decoration-dashed">
              FREEDRIVO
            </span>
            <div className="w-20 h-20 bg-blue-400 text-center items-center justify-center flex rounded-b-2xl mr-3">
              <span className="text-[10px] text-white font-semibold">
                Free home delivery!
              </span>
            </div>
          </div>

          <p className="w-60 mt-[-40px] flex ml-3 text-[14px] font-semibold text-black">
            Get Drivo delivered to your doorstep for free
          </p>

          <hr className="mx-3 mt-5 border border-dashed border-blue-200 " />

          <div className="flex justify-center items-center text-center mt-3">
            <button className="font-semibold text-blue-400 border border-blue-300 px-4 py-1 rounded hover:bg-blue-400 hover:text-white transition-colors">
              BOOK NOW
            </button>
          </div>
        </div>

        {/* Coupon 2 */}
        <div className="w-full md:w-96 h-40 border border-dashed border-blue-200 bg-blue-50 rounded-md">
          <div className="flex justify-between">
            <span className="font-bold text-blue-400 mt-3 ml-3 underline decoration-dashed">
              BLR100
            </span>
            <div className="w-20 h-20 bg-blue-400 text-center items-center justify-center flex rounded-b-2xl mr-3">
              <span className="text-[10px] mx-3 text-white font-semibold">
                10% Discount + 100% Cashback
              </span>
            </div>
          </div>

          <p className="w-60 mt-[-40px] flex ml-3 text-[14px] font-semibold text-black">
            Z Credits will be awarded after booking completion
          </p>

          <hr className="mx-3 mt-5 border border-dashed border-blue-200 " />

          <div className="flex justify-center items-center text-center mt-3">
            <button className="font-semibold text-blue-400 border border-blue-300 px-4 py-1 rounded hover:bg-blue-400 hover:text-white transition-colors">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coupons;
