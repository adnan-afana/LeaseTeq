import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import FeaturedCars from '../components/FeaturedCars';
import Pricing from '../components/Pricing';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>LeaseTeq - Premium Car Leasing</title>
        <meta name="description" content="Drive your dream car without the burden. Flexible, affordable car leasing with transparent pricing and no hidden fees." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="bg-dark text-white">
        <Header />
        <Hero />
        <Features />
        <FeaturedCars />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
