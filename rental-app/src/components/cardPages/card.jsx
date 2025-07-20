import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Card() {


  // const NaviagateToCarDetails = (car) => {
  //   const navigate = useNavigate();
  //   navigate(`/car/${car.id}`, { state: car }); // sends car data to next page
  // };

  const navigate = useNavigate();

  function navigateToCarDetails (car){
    navigate(`/carDetails/${car.id}`, { state: car })
  }

  const carsInfo = [
    { id: 1, name: "Baleno", type: "Manual", fuel: "Petrol", seat: "5 seats", img : '/public/assets/baleno-exterior-right-front-three-quarter-71.avif' },
    { id: 2, name: "Be 6e", type: "Auto", fuel: "Ev", seat: "5 seats", img : '/public/assets/be-6e-exterior-right-front-three-quarter-5.avif' },
    { id: 7, name: "Grand Vitara", type: "Manual", fuel: "Petrol", seat: "5 seats", img : '/public/assets/grand-vitara-exterior-right-front-three-quarter-4.avif' },
    { id: 3, name: "Carnes", type: "Manual", fuel: "Diesel", seat: "7 seats", img :'/public/assets/carens-exterior-right-front-three-quarter-6.avif' },
    { id: 4, name: "Creta", type: "Auto", fuel: "Petrol", seat: "5 seats", img : '/public/assets/creta-exterior-right-front-three-quarter-5.avif' },
    { id: 5, name: "Dizre", type: "Manual", fuel: "Diesel", seat: "5 seats", img : '/public/assets/dzire-exterior-right-front-three-quarter-27.avif' },
    { id: 6, name: "fronex", type: "Manual", fuel: "Diesel", seat: "5 seats", img : '/public/assets/fronx-exterior-right-front-three-quarter-111.avif' },
    { id: 8, name: "Hyryder", type: "Auto", fuel: "Diesel", seat: "5 seats", img : '/public/assets/hyryder-exterior-right-front-three-quarter-73.avif' },
    { id: 9, name: "Kylaq", type: "Manual", fuel: "Petrol", seat: "5 seats", img : '/public/assets/kylaq-exterior-right-front-three-quarter-9.avif' },
    { id: 10, name: "Thar", type: "Auto", fuel: "Petrol", seat: "4 seats", img : '/public/assets/thar-exterior-right-front-three-quarter-37.avif' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="w-[90%] mx-auto mt-10">
      <Slider {...settings}>
        {carsInfo.map((car) => (
          <div key={car.id} className="px-2">
            <div
             className="bg-white rounded-xl shadow-md overflow-hidden"
             >
              <div className="relative">
                <img
                  src={car.img}
                  alt={car.name}
                  className="h-[150px] w-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
                  <Heart className="w-4 h-4 text-gray-500" />
                </div>
              </div>
              <div className="p-3">
                <h2 className="text-md font-semibold">{car.name}</h2>
                <p className="text-sm text-gray-600 mt-1">
                  {car.type} · {car.fuel} · {car.seat}
                </p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-1 bg-yellow-500 text-white px-2 py-0.5 rounded text-xs font-medium">
                    ★ 5.0 <span className="text-[10px] text-white/80">(25)</span>
                  </div>
                  <a className="text-xs text-yellow-700 hover:underline font-semibold"
                  onClick={() => navigateToCarDetails(car)} >View Details</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <button className="items-center text-center font-semibold justify-center flex m-auto mt-7 py-2 text-blue-400 bg-blue-50 rounded px-4 transition">View more Cars</button>
    </div>
  );
}

export default Card;
