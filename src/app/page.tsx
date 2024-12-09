
import EditorChoice from "@/app/pages/editorChoice/page";
import VitaClasic from "@/app/pages/Vita-Clasic/page";
import Product from "@/app/pages/Product/page";
import FeaturedPosts from "@/app/pages/Featured-Posts/page";
import HeroSection from  "@/app/pages/HeroSection/page";

export default function Home() {
  return (
    <div>
     <div>
        {/* Additional Sections */}
       <HeroSection  />
        <EditorChoice />
        <Product />
        <VitaClasic />
        <FeaturedPosts />

        
      </div>
    </div>
  );
}
