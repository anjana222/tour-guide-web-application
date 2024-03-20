import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Navbar from '../components/Anjana/Navbar';
import SharedLayoutHome from '../pages/Anjana/Home';



function AppRoutes() {
  return (
    <Router>

<Navbar />

      <Routes>
        <Route path="/" element={<SharedLayoutHome />}>

        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
