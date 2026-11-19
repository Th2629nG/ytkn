import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import SpinWheelPage from './pages/SpinWheelPage';
import ItineraryPage from './pages/ItineraryPage';
import SpecialtiesPage from './pages/SpecialtiesPage';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kham-pha/:category" element={<ExplorePage />} />
          <Route path="/vong-quay" element={<SpinWheelPage />} />
          <Route path="/lich-trinh" element={<ItineraryPage />} />
          <Route path="/dac-san" element={<SpecialtiesPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
