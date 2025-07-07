const beHost = () => {
  return (
    <div>
      <div className="w-full flex items-center justify-between px-6 py-4 bg-blue-400">
        {/* Logo */}
        <div className="text-xl ml-15 font-bold text-white">MyLogo</div>

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
    </div>
  );
};

export default beHost;
