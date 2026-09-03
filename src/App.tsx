import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ChatWidget } from "./components/ChatWidget";
import { CustomCursor } from "./components/CustomCursor";
import { GridBackground } from "./components/ui/GridBackground";

import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import WorkPage from "./pages/WorkPage";
import AboutPage from "./pages/AboutPage";
import ProcessPage from "./pages/ProcessPage";
import ContactPage from "./pages/ContactPage";
import ServicesIndexPage from "./pages/ServicesIndexPage";

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);

const NotFound: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#35F2B0] mb-4">
        404 / NOT FOUND
      </div>
      <h1 className="text-4xl font-light text-[#F0F7F4] mb-4">Page not found.</h1>
      <a href="/" className="text-[#35F2B0] hover:text-[#50FFC2] transition-colors font-mono text-sm">
        Return home →
      </a>
    </div>
  </div>
);

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <HomePage />
            </PageWrapper>
          }
        />
        <Route
          path="/services/:slug"
          element={
            <PageWrapper>
              <ServicePage />
            </PageWrapper>
          }
        />
        <Route
          path="/work"
          element={
            <PageWrapper>
              <WorkPage />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <AboutPage />
            </PageWrapper>
          }
        />
        <Route
          path="/process"
          element={
            <PageWrapper>
              <ProcessPage />
            </PageWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <PageWrapper>
              <ContactPage />
            </PageWrapper>
          }
        />
        <Route
          path="/services"
          element={
            <PageWrapper>
              <ServicesIndexPage />
            </PageWrapper>
          }
        />
        <Route
          path="*"
          element={
            <PageWrapper>
              <NotFound />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div
        className="min-h-screen relative"
        style={{ backgroundColor: "#020807", color: "#F0F7F4" }}
      >
        {/* Global grid */}
        <GridBackground className="fixed" />

        {/* Custom cursor - desktop only */}
        <CustomCursor />

        {/* Navigation */}
        <Navbar />

        {/* Scroll to top */}
        <ScrollToTop />

        {/* Routes */}
        <AppRoutes />

        {/* Footer */}
        <Footer />

        {/* Chat widget */}
        <ChatWidget />
      </div>
    </Router>
  );
}

export default App;
