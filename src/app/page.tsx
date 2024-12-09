import Image from "next/image";
import Shop from "@/app/editorChoice/page";
import Cart from "@/app/cart/page";
import Product from "@/app/Product/page";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="container mx-auto px-4">
        <div className="bg-[#29b3d9] text-white flex flex-col lg:flex-row items-center">
          {/* Hero Content Section */}
          <div className="bg-[#29b3d9] w-full lg:w-[599px] h-[331px] px-4 py-12 flex flex-col justify-between">
            <div>
              {/* You can add any additional content here */}
            </div>
            <button className="bg-green-600 text-white w-full lg:w-[221px] h-[62px] px-0 py-3 rounded hover:bg-black">
              Shop Now
            </button>
          </div>
          
          {/* Hero Image */}
          <div className="w-full lg:w-[841px]">
            <Image
              src="/carousel 1.png"
              alt="Hero"
              width={1440}
              height={716}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Additional Sections */}
        <Shop />
        <Product />
        <Cart />
      </div>
    </div>
  );
}
