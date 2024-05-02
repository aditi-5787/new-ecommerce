// Home.js
import React from 'react';
// import Categories from '../components/Categories';
// import ProductSection from '../components/ProductSection';
// import BannerSection from './BannerSection';
import HeroSection from '../components/HeroSection';
import TrendSection from '../components/TrendSection';
import DiscountSection from '../components/DiscountSection';
import ServiceSection from '../components/ServiceSection';
import InstagramSection from '../components/InstagramSection';
import CategoryCards from '../components/CategoryCards';

const Home = () => {
  return (
    <div>
      <main>
        <HeroSection />
        {/* <Categories /> */}
        <CategoryCards />
        {/* <ProductSection /> */}
        {/* <BannerSection />*/}
        <TrendSection />
        <DiscountSection />
        <ServiceSection />
        <InstagramSection /> 
      </main>
    </div>
  );
};

export default Home;
