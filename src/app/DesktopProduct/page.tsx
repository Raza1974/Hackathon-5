"use client";

import Link from "next/link";
import { ProductCard } from "@/app/components/Shop/ProductCard";
import { CategoryCard } from "@/app/components/Shop/CategoryCard";
import { BrandLogo } from "@/app/components/Shop/BrandLogo";
import Header from "@/app/components/header";

// Types for our data
type Product = {
  imageSrc: string;
  title: string;
  department: string;
  originalPrice: string;
  salePrice: string;
  colors: string[];
};

type Category = {
  imageSrc: string;
  title: string;
  itemCount: number;
};

type Brand = {
  imageSrc: string;
  width: string;
  height: string;
  aspectRatio: string;
};

// Data arrays
const products: Product[] = [
  {
    imageSrc: "/fixed-height (9).jpg",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    salePrice: "$6.48",
    colors: ["sky-500", "teal-700", "orange-400", "teal-700"],
  },
];

const categories: Category[] = [
  {
    imageSrc: "/card-item (3).jpg",
    title: "CLOTHS",
    itemCount: 1,
  },
];

const brands: Brand[] = [
  {
    imageSrc: "/fa-brands_hooli.jpg",
    width: "103px",
    height: "34px",
    aspectRatio: "3.03",
  },
];

export default function DesktopProduct() {
  return (
    <div className="bg-neutral-50">
      <Header />
      <main>
        <nav className="py-6 bg-neutral-50">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-800">Shop</h1>
            <div className="flex gap-4 text-sm">
              <Link href="/" className="text-slate-800 hover:text-slate-600">
                Home
              </Link>
              <span className="text-stone-300">/ Shop</span>
            </div>
          </div>
        </nav>

        <section className="py-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {categories.length > 0 ? (
                categories.map((category, index) => (
                  <CategoryCard key={index} {...category} />
                ))
              ) : (
                <p>No categories available</p>
              )}
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-8">
              {brands.length > 0 ? (
                brands.map((brand, index) => (
                  <BrandLogo key={index} {...brand} />
                ))
              ) : (
                <p>No brands available</p>
              )}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {products.length > 0 ? (
                products.map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))
              ) : (
                <p>No products available</p>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
