import React from 'react';
import Image from 'next/image'
import { ProductCard } from "../components/Shop/ProductCard";
import { CategoryCard } from "../components/Shop/CategoryCard";
import { BrandLogo } from "../components/Shop/BrandLogo";
import Link from 'next/link';
const products = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/4cd71706e2994eb5a15222630d99911f/20450f20d513c3027c0d9a1b9759fdbdc1aeb0026a6eb5e5fa59514d53020f57?apiKey=4cd71706e2994eb5a15222630d99911f&",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["sky-500", "teal-700", "orange-400", "teal-700"],
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/4cd71706e2994eb5a15222630d99911f/20450f20d513c3027c0d9a1b9759fdbdc1aeb0026a6eb5e5fa59514d53020f57?apiKey=4cd71706e2994eb5a15222630d99911f&",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["sky-500", "teal-700", "orange-400", "teal-700"],
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/4cd71706e2994eb5a15222630d99911f/20450f20d513c3027c0d9a1b9759fdbdc1aeb0026a6eb5e5fa59514d53020f57?apiKey=4cd71706e2994eb5a15222630d99911f&",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["sky-500", "teal-700", "orange-400", "teal-700"],
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/4cd71706e2994eb5a15222630d99911f/20450f20d513c3027c0d9a1b9759fdbdc1aeb0026a6eb5e5fa59514d53020f57?apiKey=4cd71706e2994eb5a15222630d99911f&",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["sky-500", "teal-700", "orange-400", "teal-700"],
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/4cd71706e2994eb5a15222630d99911f/20450f20d513c3027c0d9a1b9759fdbdc1aeb0026a6eb5e5fa59514d53020f57?apiKey=4cd71706e2994eb5a15222630d99911f&",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["sky-500", "teal-700", "orange-400", "teal-700"],
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/4cd71706e2994eb5a15222630d99911f/20450f20d513c3027c0d9a1b9759fdbdc1aeb0026a6eb5e5fa59514d53020f57?apiKey=4cd71706e2994eb5a15222630d99911f&",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["sky-500", "teal-700", "orange-400", "teal-700"],
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/4cd71706e2994eb5a15222630d99911f/20450f20d513c3027c0d9a1b9759fdbdc1aeb0026a6eb5e5fa59514d53020f57?apiKey=4cd71706e2994eb5a15222630d99911f&",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["sky-500", "teal-700", "orange-400", "teal-700"],
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/4cd71706e2994eb5a15222630d99911f/20450f20d513c3027c0d9a1b9759fdbdc1aeb0026a6eb5e5fa59514d53020f57?apiKey=4cd71706e2994eb5a15222630d99911f&",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["sky-500", "teal-700", "orange-400", "teal-700"],
  },
  // Add the rest of the products here
];

const categories = [
  {
    imageSrc: "/card-item (3).png",
    title: "CLOTHS",
    
    itemCount: 1,
  },
  {
    imageSrc: "/card-item 1.png",
    title: "CLOTHS",
    itemCount: 2,
  },
  {
    imageSrc: "/card-item 3.png",
    title: "CLOTHS",
    itemCount: 3,
  },
  {
    imageSrc: "/col-md-4.png",
    title: "CLOTHS",
    itemCount: 4,
  },
  {
    imageSrc: "/card-item (4).png",
    title: "CLOTHS",
    itemCount: 5,
  },
  
  
  // Add the rest of the categories here
];

const brands = [
  {
    imageSrc: "/fa-brands_hooli.png",
    width: "103px",
    heigth:"34px",
    aspectRatio: "3.03",
  },
  {
    imageSrc: "/col-md-2.png",
    width: "83px",
    heigth:"59px",

    aspectRatio: "3.03",
  },
  {
    imageSrc: "/col-md-3 .png",
    width: "102px",
    heigth:"75px",
    aspectRatio: "3.03",
  },
  {
    imageSrc: "/col-md-4 (3).png",
    width: "103px",
    heigth:"42px",

    aspectRatio: "3.03",
  },
  {
    imageSrc: "/fa-brands-5 (1).png",
    width: "104px",
    heigth:"62px",
    aspectRatio: "3.03",
  },
  {
    imageSrc: "/col-md-6 (5).png",
    width: "76px",
    heigth:"72px",

    aspectRatio: "3.03",
  },
  
  // Add the rest of the brand logos here
];

const ShopPage: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <Image
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/4cd71706e2994eb5a15222630d99911f/ee30f465316d64a6d16d703cce566f6bace2d1a8c40a6b9b0d28f8fe3a1dac7b?apiKey=4cd71706e2994eb5a15222630d99911f&"
        alt="Shop banner"
        className="object-contain w-full aspect-[10.64] max-md:max-w-full"
      />

      <nav className="flex overflow-hidden flex-col justify-center items-center py-6 w-full font-bold text-center whitespace-nowrap bg-neutral-50 max-md:max-w-full">
        <div className="flex overflow-hidden flex-wrap gap-8 items-center max-md:max-w-full">
          <div className="overflow-hidden self-stretch my-auto text-2xl tracking-normal leading-none min-w-[240px] text-slate-800 w-[510px] max-md:max-w-full">
            Shop
          </div>
          <div className="flex overflow-hidden flex-col items-end self-stretch my-auto text-sm tracking-wide leading-6 min-w-[240px] w-[509px] max-md:max-w-full">
            <div className="flex overflow-hidden gap-4 items-center py-2.5">
            <Link href="/" className="self-stretch my-auto text-slate-800">
                Home
              </Link>

              <Image
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/4cd71706e2994eb5a15222630d99911f/da70505010d42a4738e25babc01960f30719d0ea4ae64a2fe1cde24a1a46f669?apiKey=4cd71706e2994eb5a15222630d99911f&"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto aspect-[0.56] w-[9px]"
              />
              <span className="self-stretch my-auto text-stone-300">Shop</span>
            </div>
          </div>
        </div>
      </nav>

      <section className="flex overflow-hidden flex-col justify-center items-center px-20 w-full text-white bg-neutral-50 max-md:px-5 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col items-center pb-12 max-md:max-w-full">
          <div className="flex overflow-hidden flex-wrap gap-4 items-start max-md:max-w-full">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      <section className="flex overflow-hidden flex-col justify-center items-center px-20 w-full bg-neutral-50 max-md:px-5 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col items-center w-full max-w-[1050px] max-md:max-w-full">
          <div className="flex overflow-hidden flex-wrap gap-8 justify-center items-center py-12 max-md:max-w-full">
            {brands.map((brand, index) => (
              <BrandLogo key={index} {...brand} />
            ))}
          </div>
        </div>
      </section>

      <section className="flex overflow-hidden flex-col items-center px-20 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col justify-center items-center py-12 w-full max-w-[1124px] max-md:max-w-full">
          <div className="flex flex-wrap gap-8 items-start max-md:max-w-full">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

  
    </div>
  );
};

export default ShopPage;

