// import type { Product } from "@/../types"; // Import the Product type from the correct location
// import Image from "next/image";
// // import { FaCartPlus } from "react-icons/fa"; // Importing the shopping cart icon
// // Mock product data
// const products: Product[] = [
//   { id: 1, name: "Product 1 ",  image: "/fixed-height.png" },
//   { id: 2, name: "Product 2",  image: "/fixed-height (1).png" },
//   { id: 3, name: "Product 3", image: "/fixed-height  (2).png" },
//   { id: 4, name: "Product 4",  image: "/product-cover-5.png" },
//   { id: 5, name: "Product 5",  image: "/product-cover-5 (1).png" },
//   { id: 6, name: "Product 6",  image: "/product-cover-5 (2).png" },
//   { id: 7, name: "Product 7",  image: "/product-cover-5 (3).png" },
//   { id: 8, name: "Product 8",  image: "/fixed-height (3).png" },
// ];

// export default function Product() {
//   return (
//     <div>
//       {/* Featured Products Section */}
//       <div className="container mx-auto px-4">
//         <h1 className="text-3xl font-bold my-6">Featured Products</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="border rounded-lg overflow-hidden shadow-lg"
//             >
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 width={172}
//                 height={152}
//                 className="object-cover"
//               />
//               <div className="p-4">
//                 <p className="text-lg font-semibold">{product.name}</p>

//               </div>
//             </div>
//           ))}

//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";

export default function Product() {
  return (
    <div>
      {/* Featured Products Section */}
      <div>
        <div className="container mx-auto text-center   w-691 h-102 ">
          <div>
            <h1 className=" text-gray-400 x-250.5  w-190px h-30px text-center ">
              Featured Products
            </h1>
            <br></br>
            <div>
              <h1 className=" text-black  font-bold x-191 y-40 w-309px h-32px ">
                BESTSELLER PRODUCTS
              </h1>

              <br></br>

              <div>
                <h1 className="text-gray-400  font-bold x-174.5 y-82 w-342px h-20px ">
                  Problems trying to resolve the conflict between
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1050px h-500px flex justify-center items-center  ">
          <div className="editter">
            <Image
              src="/fixed-height.jpg"
              alt="Hero"
              width={239}
              height={427}
            />
            <br></br>
            <div className="justify-center text-center font-bold x-54 y-25 w-131px h-24px text-black">
              <h1>Graphic Design</h1>
            </div>
            <br></br>
            <div className="justify-center text-center font-bold  x-43 y-59 w-153px h-24px  text-gray-500">
              <h1>English Department</h1>
            </div>
            <br></br>
            <div className="justify-center text-center font-bold  x-64.5 y-93 w-110px h-34px gap-5   ">
              <div className="flex justify-center text-center gap-2">
                <h1 className="text-gray-400">$16.48</h1>

                <h1 className="text-green-800">$6.48</h1>
              </div>
              <div className="mt-2 flex justify-center gap-1">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              </div>
            </div>
          </div>
          <div className="editter">
            <Image
              src="/fixed-height (1).jpg"
              alt="Hero"
              width={239}
              height={427}
            />
            <br></br>
            <div className="justify-center text-center font-bold x-54 y-25 w-131px h-24px  text-black">
              <h1>Graphic Design</h1>
            </div>
            <br></br>
            <div className="justify-center text-center font-bold  x-43 y-59 w-153px h-24px  text-gray-500">
              <h1>English Department</h1>
            </div>
            <br></br>
            <div className="justify-center text-center font-bold  x-64.5 y-93 w-110px h-34px gap-5  ">
              <div className="flex justify-center text-center gap-2">
                <h1 className="text-gray-400">$16.48</h1>

                <h1 className="text-green-800">$6.48</h1>
              </div>
              <div className="mt-2 flex justify-center gap-1">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              </div>
            </div>
          </div>
          <div className="editter">
            <Image
              src="/fixed-height (2).jpg"
              alt="Hero"
              width={239}
              height={427}
            />
            <br></br>
            <div className="justify-center text-center font-bold x-54 y-25 w-131px h-24px  text-black">
              <h1>Graphic Design</h1>
            </div>
            <br></br>
            <div className="justify-center text-center font-bold  x-43 y-59 w-153px h-24px  text-gray-500">
              <h1>English Department</h1>
            </div>
            <br></br>
            <div className="justify-center text-center font-bold  x-64.5 y-93 w-110px h-34px gap-5  ">
              <div className="flex justify-center text-center gap-2">
                <h1 className="text-gray-400">$16.48</h1>

                <h1 className="text-green-800">$6.48</h1>
              </div>
              <div className="mt-2 flex justify-center gap-1">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              </div>
            </div>
          </div>
          <div className="editter">
            <Image
              src="/product-cover-5.jpg"
              alt="Hero"
              width={239}
              height={427}
            />
            <br></br>
            <div className="justify-center text-center font-bold x-54 y-25 w-131px h-24px  text-black">
              <h1>Graphic Design</h1>
            </div>
            <br></br>
            <div className="justify-center text-center font-bold  px-43 py-59 w-153px h-24px  text-gray-500">
              <h1>English Department</h1>
            </div>
            <br></br>
            <div className="justify-center text-center font-bold  px-64.5 py-93 w-110px h-34px gap-5  ">
              <div className="flex justify-center text-center gap-2">
                <h1 className="text-gray-400">$16.48</h1>

                <h1 className="text-green-800">$6.48</h1>
              </div>
              <div className="mt-2 flex justify-center gap-1">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div className="w-1050px h-500px flex justify-center items-center">
          <div className="editter">
            <Image
              src="/product-cover-5 (1).jpg"
              alt="Hero"
              width={239}
              height={427}
            />
            <br></br>
            <div className="justify-center text-center font-bold px-54 py-25 w-131px h-24px  text-black">
              <h1>Graphic Design</h1>
            </div>
            <br></br>
            <div className="justify-center text-center font-bold  px-43 py-59 w-153px h-24px  text-gray-500">
              <h1>English Department</h1>
            </div>
            <br></br>
            <div className="justify-center text-center font-bold  px-64.5 py-93 w-110px h-34px gap-5  ">
              <div className="flex justify-center text-center gap-2">
                <h1 className="text-gray-400">$16.48</h1>

                <h1 className="text-green-800">$6.48</h1>
              </div>
              <div className="mt-2 flex justify-center gap-1">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              </div>
            </div>
          </div>

          <div className="editter">
            <Image
              src="/product-cover-5 (2).jpg"
              alt="Hero"
              width={239}
              height={427}
            />
            <br></br>
            <div className="justify-center text-center font-bold px-54 py-25 w-131px h-24px  text-black">
              <h1>Graphic Design</h1>
            </div>
            <br></br>
            <div className="justify-center text-center font-bold  px-43 py-59 w-153px h-24px  text-gray-500">
              <h1>English Department</h1>
            </div>
            <br></br>
            <div className="justify-center text-center font-bold  px-64.5 py-93 w-110px h-34px gap-5  ">
              <div className="flex justify-center text-center gap-2">
                <h1 className="text-gray-400">$16.48</h1>

                <h1 className="text-green-800">$6.48</h1>
              </div>
              <div className="mt-2 flex justify-center gap-1">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              </div>
            </div>
          </div>

          <div className="editter">
            <Image
              src="/product-cover-5 (3).jpg"
              alt="Hero"
              width={239}
              height={427}
            />
            <br></br>
            <div className="justify-center text-center font-bold px-54 py-25 w-131px h-24px  text-black">
              <h1>Graphic Design</h1>
            </div>
            <br></br>
            <div className="justify-center text-center font-bold  px-43 py-59 w-153px h-24px  text-gray-500">
              <h1>English Department</h1>
            </div>
            <br></br>
            <div className="justify-center text-center font-bold  px-64.5 py-93 w-110px h-34px gap-5  ">
              <div className="flex justify-center text-center gap-2 ">
                <h1 className="text-gray-400">$16.48</h1>

                <h1 className="text-green-800">$6.48</h1>
              </div>
              <div className="mt-2 flex justify-center gap-1">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              </div>{" "}
            </div>
          </div>

          <div className="editter">
            <Image
              src="/fixed-height (3).jpg"
              alt="Hero"
              width={239}
              height={427}
            />
            <br></br>
            <div className="justify-center text-center font-bold px-54 py-25 w-131px h-24px  text-black">
              <h1>Graphic Design</h1>
            </div>
            <br></br>
            <div className="justify-center text-center font-bold  px-43 py-59 w-153px h-24px  text-gray-500">
              <h1>English Department</h1>
            </div>
            <br></br>
            <div className=" justify-center text-center font-bold   w-110px h-34px gap-5  ">
              <div className="flex justify-center text-center gap-2">
                <h1 className="text-gray-400 ">$16.48</h1>

                <h1 className="text-green-800 ">$6.48</h1>
              </div>
              <div className="mt-2 flex justify-center gap-1">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
