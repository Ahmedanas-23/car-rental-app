import React from 'react'

const Category = () => {
  const categories = [
  {
    name: "Hatchback",
    price: "From ₹999/day",
    image: "public/assets/baleno-exterior-right-front-three-quarter-71.avif",
  },
  {
    name: "SUV",
    price: "From ₹1499/day",
    image: "public/assets/xuv700-exterior-right-front-three-quarter-4.avif",
  },
  {
    name: "Sedan",
    price: "From ₹1299/day",
    image: "public/assets/virtus-exterior-right-front-three-quarter-10.avif",
  },
  {
    name: "Luxury",
    price: "From ₹3999/day",
    image: "public/assets/new-2-series-gran-coupe-exterior-right-front-three-quarter-3.avif",
  },
  {
    name: "Electric Vehicles",
    price: "From ₹1199/day",
    image: "public/assets/carens-clavis-ev-exterior-right-front-three-quarter-4.avif",
  },
];

  return (
    <section className="py-12 mt-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-15 text-blue-400">
          Browse by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mx-10 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-700">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  {category.price}
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-full">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
   
  )
}

export default Category