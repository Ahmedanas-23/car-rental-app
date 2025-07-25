import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function RentYourCar() {
  return (
    <div className="w-full bg-[#ffff] pt-20 pb-20">
      {/* --- Hero Section --- */}
      {/* On mobile (default): text is centered, padding on sides. */}
      {/* On medium screens and up (md:): reverts to your original ml-12 and left-align. */}
      <div className="px-6 md:px-0 md:ml-12">
        <div className="text-center md:text-left">
          <h1 className="font-bold text-3xl md:text-4xl text-blue-400 py-2">
            Turn your car into cash💸
          </h1>
          <h2 className="font-bold text-3xl md:text-4xl text-blue-400">
            Rent you car today with Drivo
          </h2>
          {/* On mobile: text is smaller. On md and up: reverts to your original size. The w-200 class was non-standard, so I'm using max-w-lg for better control. */}
          <p className="text-lg md:text-2xl text-gray-400 py-2 max-w-lg mx-auto md:mx-0">
            Become a Drivo Host – Rent out your car and start earning rental
            income effortlessly!
          </p>
          {/* On mobile: button is centered. On md and up: reverts to being aligned with the text. */}
          <Link
            to={"/hostpage"}
            className="flex w-44 justify-center py-3 mt-2 rounded bg-blue-400 font-semibold text-white mx-auto md:mx-0"
          >
            Rent your car ➜
          </Link>
        </div>
      </div>

      {/* --- Features Section --- */}
      {/* On mobile: flex-col stacks the boxes. */}
      {/* On large screens and up (lg:): reverts to your original flex-row. */}
      {/* The container is centered and has padding. */}
      <div className="w-full flex flex-col lg:flex-row lg:justify-center items-center mt-10 gap-10 bg-blue-50 py-12 px-6">
        {/* Box 1 - Your original code is unchanged */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center bg-white p-7 rounded-2xl text-center h-75 w-60"
        >
          <img
            src="/public/assets/ok (2).png"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/80x80/cccccc/FFFFFF?text=Error";
            }}
            className="w-20 py-2"
            alt="hassle free"
          />
          <h1 className="font-semibold text-black py-2">
            Zero Hassle, Total Control
          </h1>
          <p className="text-[17px] text-gray-500">
            You choose when to rent, to whom, and at what price.
          </p>
        </motion.div>

        {/* Box 2 - Your original code is unchanged */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center bg-white p-7 rounded-2xl h-75 text-center w-60"
        >
          <img
            src="public/assets/atm.png"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/80x80/cccccc/FFFFFF?text=Error";
            }}
            className="w-20 py-2"
            alt="payout"
          />
          <h1 className="font-semibold text-black py-2">Instant Payouts</h1>
          <p className="text-[17px] text-gray-500">
            Get paid quickly after every successful trip.
          </p>
        </motion.div>
        {/* Box 3 - Your original code is unchanged */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center bg-white p-7 rounded-2xl h-75 text-center w-60"
        >
          <img
            src="public/assets/online-chat.png"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/80x80/cccccc/FFFFFF?text=Error";
            }}
            className="w-20 py-2"
            alt="support"
          />
          <h1 className="font-semibold text-black py-2">
            24/7 Support for Hosts
          </h1>
          <p className="text-[17px] text-gray-500">
            We’re here for you anytime before, during, or after a rental.
          </p>
        </motion.div>

        {/* Box 4 - Your original code is unchanged */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center bg-white p-7 rounded-2xl h-75 text-center w-60"
        >
          <img
            src="public/assets/safety.png"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/80x80/cccccc/FFFFFF?text=Error";
            }}
            className="w-20 py-2"
            alt="protected"
          />
          <h1 className="font-semibold text-black py-2">
            Drivo Protection Plan
          </h1>
          <p className="text-[17px] text-gray-500">
            Full damage protection and roadside assistance for your peace of
            mind.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default RentYourCar;
