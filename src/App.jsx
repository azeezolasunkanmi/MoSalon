import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import ServicesPage from "./pages/ServicesPage";
import PriceList from "./pages/PriceList";
import Training from "./pages/Training";
import Inspo from "./pages/Inspo";
import BookNow from "./pages/BookNow";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="price" element={<PriceList />} />
          <Route path="training" element={<Training />} />
          <Route path="inspo" element={<Inspo />} />
          <Route path="booknow" element={<BookNow />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
