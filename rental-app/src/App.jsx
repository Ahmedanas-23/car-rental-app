import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./components/landingPage";
import HostPage from "./components/navlinkPages/beHost";
import GetApp from "./components/navlinkPages/getApp";
import Auth from "./components/navlinkPages/login-signup"
import SignUp from "./components/navlinkPages/signup"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/hostpage" element={<HostPage />} />
        <Route path="/getapp" element={<GetApp />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/signup" element={< SignUp />} />
      </Routes>
     
    </div>
  );
}

export default App;
