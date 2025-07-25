import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingPage";
import HostPage from "./components/navlinkPages/beHost";
import GetApp from "./components/navlinkPages/getApp";
import Auth from "./components/navlinkPages/login";
import SignUp from "./components/navlinkPages/signup";
import CardPage from "./components/cardPages/cardpage";
import CarDetails from "./components/cardPages/carDetails";
import RentYourCar from "./components/rent-your-car";
import Category from "./components/category";
import Coupons from "./components/coupons";
import AboutDrivo from "./components/aboutDrivo";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LandingPage />
              <CardPage />
              <RentYourCar />
              <Category />
              <Coupons />
              <AboutDrivo />
              <Footer />
            </>
          }
        />
        <Route path="/hostpage" element={<HostPage />} />
        <Route path="/getapp" element={<GetApp />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/carDetails/:id" element={<CarDetails />}/>
        {/* <Route path="/car/:id" element={<CardDetails />} /> */}
      </Routes>
    </div>
  );
}

export default App;
