import type { Product } from "@/../types"; // Import the Product type from the correct location
import Image from "next/image";
import { FaCartPlus } from "react-icons/fa"; // Importing the shopping cart icon
// Mock product data
const products: Product[] = [
  { id: 1, name: "Product 1", price: 19.99, image: "/fixed-height.png" },
  { id: 2, name: "Product 2", price: 29.99, image: "/fixed-height (1).png" },
  { id: 3, name: "Product 3", price: 39.99, image: "/fixed-height (2).png" },
  { id: 4, name: "Product 4", price: 49.99, image: "/product-cover-5.png" },
  { id: 1, name: "Product 5", price: 19.99, image: "/product-cover-5 (1).png" },
  { id: 2, name: "Product 6", price: 29.99, image: "/product-cover-5 (2).png" },
  { id: 3, name: "Product 7", price: 39.99, image: "/product-cover-5 (3).png" },
  { id: 4, name: "Product 8", price: 49.99, image: "/fixed-height (3).png" },
];

export default function Product() {
  return (
    <div>
      {/* Featured Products Section */}
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold my-6">Featured Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={172}
                height={152}
                className="object-cover"
              />
              <div className="p-4">
                <p className="text-lg font-semibold">{product.name}</p>
                <p className="text-gray-500">${product.price.toFixed(2)}</p>
                <button className="bg-black text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 flex items-center justify-center space-x-2">
                  <FaCartPlus />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}

          
        </div>
      </div>
    </div>
  );
}
