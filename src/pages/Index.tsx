import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import PopularProducts from "@/components/home/PopularProducts";
import AdvantagesSection from "@/components/home/AdvantagesSection";
import BrandsSection from "@/components/home/BrandsSection";
import PromoSection from "@/components/home/PromoSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>AutoParts.kz — Автозапчасти в Казахстане | Оригиналы и аналоги</title>
        <meta 
          name="description" 
          content="Интернет-магазин автозапчастей №1 в Казахстане. Более 500 000 запчастей в наличии. Подбор по VIN, быстрая доставка по Алматы, Астане и всему Казахстану." 
        />
        <meta name="keywords" content="автозапчасти, запчасти для авто, купить запчасти, Казахстан, Алматы, оригинальные запчасти" />
        <link rel="canonical" href="https://autoparts.kz" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <HeroSection />
          <CategoriesSection />
          <PopularProducts />
          <PromoSection />
          <AdvantagesSection />
          <BrandsSection />
          <ReviewsSection />
          <CTASection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
