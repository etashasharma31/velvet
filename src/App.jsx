import { useEffect, useState, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';

const Collections = lazy(() => import('./pages/Collections'));
const Story = lazy(() => import('./pages/Story'));
const Experience = lazy(() => import('./pages/Experience'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const Privacy = lazy(() => import('./pages/Legal/Privacy'));
const Terms = lazy(() => import('./pages/Legal/Terms'));
const Shipping = lazy(() => import('./pages/Legal/Shipping'));

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Loading Screen Timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-surface font-body overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <Navbar />
      
      <div className="grow">
        <AnimatePresence mode="wait">
          <Suspense fallback={<LoadingScreen key="suspense-loader" />}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/story" element={<Story />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/shipping" element={<Shipping />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
