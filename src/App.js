import Header from "./pages/Layouts/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./pages/Layouts/Footer";
import HomePage from "./pages/Home";
import CoffeePage from "./pages/Coffee";
import TeaPage from "./pages/Tea";
import DrinkPage from "./pages/Drinks";
import ProductPage from "./pages/Products";
import SalePage from "./pages/Sales";
import AboutPage from "./pages/About";
import CardPage from "./pages/Card";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="mt-[125px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coffee" element={<CoffeePage />} />
          <Route path="/tea" element={<TeaPage />} />
          <Route path="/drinks" element={<DrinkPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/sales" element={<SalePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/card" element={<CardPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
