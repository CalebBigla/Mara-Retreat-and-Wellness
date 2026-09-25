import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public Pages
import { Home } from "@/pages/public/Home";
import { About } from "@/pages/public/About";
import { Massages } from "@/pages/public/Massages";
import { MassageDetails } from "@/pages/public/MassageDetails";
import { ContactPage } from "@/pages/public/Contact";
import { Book } from "@/pages/public/Book";
import { GalleryPage } from "@/pages/public/Gallery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Massages />} />
        <Route path="/services/:slug" element={<MassageDetails />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/book" element={<Book />} />

        {/* Not found */}
        <Route path="*" element={<div>404 - Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
