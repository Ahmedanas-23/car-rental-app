const beHost = () => {
  return (
    <div className="bg-blue-50 w-full h-[100vh]">
      <div className="w-full flex items-center justify-between px-6 py-4 bg-blue-400">
        {/* Logo */}
         <div className="mt-[-10px] p-0 scale-90 md:scale-100 md:ml-5">
                <span className="font-bold text-5xl text-white">D</span>
                <div className="w-[90px] mt-[-12px] ml-1 h-[8px] bg-white"></div>
                <div className="font-bold text-2xl mt-[-33px] ml-10">rivo</div>
          </div>

        {/* Navbar Items */}
        <div className="flex gap-6 font-medium">
          <a className="border border-gray-300 px-6 py-2 rounded-full text-gray-700 hover:bg-blue-400 hover:text-white transition">
            FAQ
          </a>
          <a className="border border-gray-300 px-6 py-2 rounded-full text-gray-700  hover:bg-blue-400 hover:text-white transition">
            Policies
          </a>
    
        </div>
      </div>
      <div>
        <div className="flex flex-col mt-10 ml-12">
            <h1 className="font-bold text-4xl text-blue-400 py-2">
          Turn your car into cash
        </h1>
        <h2 className="font-bold text-4xl text-blue-400">
          Rent you car today with Drivo
        </h2>
        <p className="w-[500px] mt-4 text-blue-400 font-semibold">List your car on Drivo and turn it into a passive income machine – start earning effortlessly today!</p>
        </div>
      </div>
      <div className=" flex justify-end items-end mr-12 mt-[-120px]">
        <img src="public/assets/ChatGPT Image Jul 16, 2025, 08_00_05 PM.png" className="w-[500px] rounded-2xl shadow-2xl" alt="guy with a car" />
      </div>
    </div>
  );
};

export default beHost;
