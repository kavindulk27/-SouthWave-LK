import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Hotels from './pages/Hotels';
import Food from './pages/Food';
import Experience from './pages/Experience';
import Plan from './pages/Plan';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="hotels" element={<Hotels />} />
          <Route path="food" element={<Food />} />
          <Route path="experience" element={<Experience />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="plan" element={<Plan />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
