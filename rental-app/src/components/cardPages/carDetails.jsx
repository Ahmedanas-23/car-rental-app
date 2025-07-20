import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function CarDetails() {
  const { id } = useParams(); // get id from url
  const location = useLocation();
  const car = location.state;

  return (
    <div className="min-h-screen bg-blue-50">
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
      <div className="ml-10">
        <Link to={"/"} className="font-semibold mt-5 flex ml-5 text-blue-400">
          ⬅ back
        </Link>
        <div>
          {car?.img ? (
            <img
              src={car.img}
              alt={car.name}
              className="w-[650px] ml-5 mt-3 border-4 rounded-lg border-blue-200"
            />
          ) : (
            <p className="text-red-500">No image available</p>
          )}
          <div className="ml-5 mt-3 flex flex-col">
            {/* <div className="w-2 h-20 bg-blue-200"></div> */}
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl">{car.name}</h1>
              <p className="text-sm text-gray-600 font-semibold">
                {car.type} · {car.fuel} · {car.seat}
              </p>
            </div>
            <hr className="mt-5 border-dotted border-gray-300 w-[900px]" />
            <div className="mt-5">
              <h2 className="font-semibold text-[15px]">Car location</h2>
              <div className="flex items-start gap-4 border p-2 rounded mt-2 w-[900px] bg-white border-gray-300">
                <p className="w-[700px]">
                  ORIX Auto Infrastructure No 01, Bandappa colony, new
                  Byappanahali, Old Madras Rd, Krishnamurti Nagar, Old
                  Baiyyappanahalli, Maruthi Sevanagar, Bengaluru, Karnataka
                  560038, India
                  <div className="text-[13px] font-semibold w-25 text-center items-center flex justify-center rounded p-0.5 mt-1 bg-blue-200">
                4.8 km away
              </div>
                </p>
                <button className="border border-blue-400 rounded-3xl px-4 py-2">Get Direction</button>
              </div>
  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
