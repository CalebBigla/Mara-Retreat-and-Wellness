import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { authService } from "@/services/authService";
import { useEffect, useState } from "react";

// Public Pages
import { Home } from "@/pages/public/Home";
import { About } from "@/pages/public/About";
import { Massages } from "@/pages/public/Massages";
import { MassageDetails } from "@/pages/public/MassageDetails";
import { ContactPage } from "@/pages/public/Contact";
import { Book } from "@/pages/public/Book";
import { GalleryPage } from "@/pages/public/Gallery";

// Admin Pages
import { Login } from "@/pages/admin/Login";
import { Dashboard } from "@/pages/admin/Dashboard";
import { MassagesAdmin } from "@/pages/admin/Massages";
import { GalleryAdmin } from "@/pages/admin/Gallery";
import { TestimonialsAdmin } from "@/pages/admin/Testimonials";
import { ContentAdmin } from "@/pages/admin/Content";
import { SettingsAdmin } from "@/pages/admin/Settings";

// Auth wrapper for admin routes
function AuthenticatedRoute({ children, ...rest }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = authService.getToken();
      setIsAuthenticated(!!token);
      setCheckingAuth(false);
    };
    checkAuth();
  }, []);

  if (checkingAuth) {
    return <div>Checking auth...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/admin/login" replace />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/massages" element={<Massages />} />
        <Route path="/massages/:slug" element={<MassageDetails />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/book" element={<Book />} />

        {/* Admin routes */}
        <Route path="/admin/login" element={<AdminLayout><Login /></AdminLayout>} />
        <Route
          path="/admin"
          element={
            <AuthenticatedRoute>
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/admin/massages"
          element={
            <AuthenticatedRoute>
              <AdminLayout>
                <MassagesAdmin />
              </AdminLayout>
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/admin/gallery"
          element={
            <AuthenticatedRoute>
              <AdminLayout>
                <GalleryAdmin />
              </AdminLayout>
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/admin/testimonials"
          element={
            <AuthenticatedRoute>
              <AdminLayout>
                <TestimonialsAdmin />
              </AdminLayout>
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/admin/content"
          element={
            <AuthenticatedRoute>
              <AdminLayout>
                <ContentAdmin />
              </AdminLayout>
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/admin/settings"
          element={
            <AuthenticatedRoute>
              <AdminLayout>
                <SettingsAdmin />
              </AdminLayout>
            </AuthenticatedRoute>
          }
        />

        {/* Not found */}
        <Route path="*" element={<div>404 - Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;