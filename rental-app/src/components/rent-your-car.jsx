import { Link } from "react-router-dom";

function rentYourCar() {
  return (
    <div className="w-full bg-[#ffff]">
      <div className="flex flex-col mt-15 ml-12">
        <h1 className="font-bold text-4xl text-blue-400 py-2">
          Turn your car into cash💸
        </h1>
        <h2 className="font-bold text-4xl text-blue-400">
          Rent you car today with Drivo
        </h2>
        <p className="font text-[17px] text-gray-500-semibold text-gray-400 py-2 text-2xl w-200">
          Become a Drivo Host – Rent out your car and start earning rental
          income effortlessly!
        </p>
        <Link to={'/hostpage'} className=" flex w-40 pl-3 rounded py-4 mt-2 text-center items-center bg-blue-400 font-semibold text-white">Rent your car ➜</Link>
      </div>

      <div className="w-full flex justify-center items-start mt-10 gap-10 bg-blue-50 py-6">
        {/* Box 1 */}
        <div className="flex flex-col items-center bg-white p-7 rounded-2xl text-center h-75 w-60">
          <img
            src="public/assets/ok (2).png"
            className="w-20 py-2"
            alt="hassle free"
          />
          <h1 className="font-semibold text-black py-2">
            Zero Hassle, Total Control
          </h1>
          <p className="text-[17px] text-gray-500">
            You choose when to rent, to whom, and at what price.
          </p>
        </div>

        {/* Box 2 */}
        <div className="flex flex-col items-center bg-white p-7 rounded-2xl h-75 text-center w-60">
          <img src="public/assets/atm.png" className="w-20 py-2" alt="payout" />
          <h1 className="font-semibold text-black py-2">Instant Payouts</h1>
          <p className="text-[17px] text-gray-500">
            Get paid quickly after every successful trip.
          </p>
        </div>

        {/* Box 3 */}
        <div className="flex flex-col items-center bg-white p-7 rounded-2xl h-75  text-center w-60">
          <img
            src="public/assets/online-chat.png"
            className="w-20 py-2"
            alt="support"
          />
          <h1 className="font-semibold text-black py-2">
            24/7 Support for Hosts
          </h1>
          <p className="text-[17px] text-gray-500">
            We’re here for you anytime before, during, or after a rental.
          </p>
        </div>

        {/* Box 4 */}
        <div className="flex flex-col items-center bg-white p-7 rounded-2xl h-75 text-center w-60">
          <img
            src="public/assets/safety.png"
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
        </div>
      </div>
    </div>
  );
}

export default rentYourCar;
