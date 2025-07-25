import { useRef, useState } from "react";
const beHost = () => {
  const fileInputRef = useRef(null);
  const [images, setImages] = useState([]);

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...newImages]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    const newImages = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...newImages]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const removeImage = (url) => {
    setImages((prev) => prev.filter((img) => img.url !== url));
  };

  const resetAll = () => {
    setImages([]);
  };

  const openFileDialog = () => {
    fileInputRef.current.click();
  };
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
        <div className="flex flex-col absolute mt-16 ml-12">
          <h1 className="font-bold text-4xl text-blue-400 py-2">
            Turn your car into cash
          </h1>
          <h2 className="font-bold text-4xl text-blue-400">
            Rent you car today with Drivo
          </h2>
          <p className="w-[500px] mt-4 text-blue-400 font-semibold">
            List your car on Drivo and turn it into a passive income machine –
            start earning effortlessly today!
          </p>
        </div>
      </div>
      <div className=" flex justify-end items-end mr-12 mt-20">
        <img
          src="public/assets/ChatGPT Image Jul 16, 2025, 08_00_05 PM.png"
          className="w-[500px] rounded-2xl shadow-2xl"
          alt="guy with a car"
        />
      </div>

      {/* upload car */}

      <div className="absolute w-full bg-blue-400 mt-19">
        <div className="flex flex-col justify-center text-blue-50 text-center items-center">
          <h1 className="text-3xl mt-5 text-blue-50 font-bold">
            Become a drivo host
          </h1>
          <h1 className="text-2xl text-blue-50 font-bold">
            Upload Your Car to Start Earning
          </h1>
        </div>
        <div>
          <h1 className="text-2xl text-blue-50 font-bold">Upload you documents</h1>
        </div>
        <div className="w-[500px] ml-[45rem] mt-8">
          <h1 className="text-2xl text-blue-50 font-bold">Upload car details</h1>
          <form className="flex flex-col rounded-md p-5 bg-blue-50">
            {/* Upload box */}
            <div
              onClick={openFileDialog}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className="w-full h-48 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center bg-gray-50 cursor-pointer hover:bg-gray-100 transition"
            >
              <span className="text-gray-500 text-center px-4">
                Click or drag & drop images here
              </span>
              <input
                type="file"
                multiple
                accept="image/*"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileSelect}
              />
            </div>

            {/* Preview Grid */}
            {images.length > 0 && (
              <div className="grid grid-cols-3 gap-4">
                {images.map((img) => (
                  <div key={img.url} className="relative group">
                    <img
                      src={img.url}
                      alt="preview"
                      className="h-32 w-full object-cover rounded"
                    />
                    <button
                      onClick={() => removeImage(img.url)}
                      className="absolute top-1 right-1 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded hover:bg-opacity-80 transition"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Reset Button */}
            {images.length > 0 && (
              <button
                onClick={resetAll}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition w-full"
              >
                Reset All Images
              </button>
            )}
            <div className="flex">
              <input
              type="text"
              className="mt-2 border border-gray-300 p-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
              placeholder="Car Name (e.g. Honda City)"
              required
            />
            <input
              type="text"
              className="mt-2 border border-gray-300 p-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
              placeholder="Model Year (e.g. 2022)"
              required
            />
            </div>

            <div>

              <input
              type="number"
              className="mt-2 border border-gray-300 p-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
              placeholder="Rental Price per Day"
              required
            />
            <select
              className="mt-2 border border-gray-300 p-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
              required
            >
              <option value="">Select Fuel Type</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
            </select>

            </div>
             <select
              className="mt-2 border border-gray-300 p-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
              required
            >
              <option value="">Type</option>
              <option value="Petrol">Manual</option>
              <option value="Diesel">Auto</option>
              <option value="Electric">Hybrid</option>
            </select>
            <textarea
              rows="4"
              className="mt-2 border border-gray-300 p-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
              placeholder="Describe your car condition, comfort, mileage..."
              required
            ></textarea>
            <button
              type="submit"
              className="mt-2 p-2 rounded-sm bg-blue-400 text-white font-semibold"
            >
              Upload Car
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default beHost;
