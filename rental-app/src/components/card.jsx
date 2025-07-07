import { Heart } from "lucide-react";
import Slider from "react-slick";

function card() {
  const carsInfo = [
    {
      id: 1,
      name: "jaquar",
      type: "Auto",
      fuel: "petrol",
      seat: "5 seats",
      fav: "Guest Favourite",
    },
    {
      id: 2,
      name: "Baleno",
      type: "Manual",
      fuel: "petrol",
      seat: "5 seats",
      fav: "Guest Favourite",
    },
    {
      id: 3,
      name: "Audi",
      type: "Auto",
      fuel: "Disel",
      seat: "5 seats",
      fav: "Guest Favourite",
    },
    {
      id: 4,
      name: "Swift",
      type: "Manual",
      fuel: "petrol",
      seat: "5 seats",
      fav: "Guest Favourite",
    },
    {
      id: 5,
      name: "Benz",
      type: "Auto",
      fuel: "Disel",
      seat: "5 seats",
      fav: "Guest Favourite",
    },
    {
      id: 6,
      name: "jaquar",
      type: "Auto",
      fuel: "petrol",
      seat: "5 seats",
      fav: "Guest Favourite",
    },
    {
      id: 7,
      name: "Baleno",
      type: "Manual",
      fuel: "petrol",
      seat: "5 seats",
      fav: "Guest Favourite",
    },
    {
      id: 8,
      name: "Audi",
      type: "Auto",
      fuel: "Disel",
      seat: "5 seats",
      fav: "Guest Favourite",
    },
    {
      id: 9,
      name: "Swift",
      type: "Manual",
      fuel: "petrol",
      seat: "5 seats",
      fav: "Guest Favourite",
    },
    {
      id: 10,
      name: "Benz",
      type: "Auto",
      fuel: "Disel",
      seat: "5 seats",
      fav: "Guest Favourite",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // number of cards visible
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
 <div className="w-[90%] mx-auto">
      <Slider {...settings}>
        {carsInfo.map((car) => (
          <div key={car.id} className="px-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src="src/assets/Untitled design (9).png"
                  alt={car.name}
                  className="h-[200px] w-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-white rounded-full p-1 shadow-md">
                  <Heart className="w-5 h-5 text-gray-600" />
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold">{car.name}</h2>
                <p className="text-sm text-gray-600 mt-1">
                  {car.type} · {car.fuel} · {car.seat}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-1 bg-yellow-500 text-white px-2 py-1 rounded-lg text-sm font-semibold">
                    <span>★</span>
                    <span>5.0</span>
                    <span className="text-xs text-white/80">(25)</span>
                  </div>
                  <p className="text-sm text-yellow-700 font-semibold">
                    {car.fav}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default card;
