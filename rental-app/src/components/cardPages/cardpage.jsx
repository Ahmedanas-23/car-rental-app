import Card from "./card";

function CardPage() {
  return (
    <div className="h-[100vh] bg-blue-50 w-full pt-15 px-10">
      <div className="bg-blue-400 w-full py-10 justify-center items-center rounded-2xl">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
        Best Cars in Bangalore
      </h2>
      <Card />
      </div>
      
    </div>
  );
}

export default CardPage;
