import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Divisions from './components/Divisions';
import Services from './components/Services';
import Properties from './components/Properties';
import Philosophy from './components/Philosophy';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ListingsPage from './components/ListingsPage';

function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Divisions />
        <Services />
        <Properties />
        <Philosophy />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

function ListingsLayout() {
  return (
    <>
      <ListingsPage />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listings/:category" element={<ListingsLayout />} />
    </Routes>
  );
}
