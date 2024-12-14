import EditorChoice from "@/app/pages/editorChoice/page";
import VitaClasic from "@/app/pages/VitaClasic/page";
import Product from "@/app/pages/Product/page";
import HeroSection from "@/app/pages/HeroSection/page";



import FeaturedPosts from "@/app/pages/Featured-Posts/page";
// import ProductList from "@/app/pages/ProductList";
// import DesktopProduct from "@/app/components/Shop/DesktopProduct";
// import Footer from "@/app/components/footer";

export default function Home() {
  return (
    <div>
      <div>
        {/* Additional Sections */}
        <HeroSection />
        <EditorChoice />
        <Product />
        <VitaClasic />
        <FeaturedPosts />
        {/* 
        <Footer />
        <ProductList />
        <Footer />
        <DesktopProduct /> */}
      </div>
    </div>
  );
}
