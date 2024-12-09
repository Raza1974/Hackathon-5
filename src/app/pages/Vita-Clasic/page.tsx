// export default function VitaClasic (){
//     return(

   

// <div className="vita product bg-green-600 border border-black" >
// <div>
//    <div>
//        <h1 className="text-white w-151px h-30px x-0 y-60">SUMMER 2020</h1>
  

//    </div>
//    <div> 
//     <h1 className="text-white w-509px h-160px x-0 y-120 font-bold ">Vita Classic  Product</h1>

//    </div>

// <div>
// <p className="text-white w-341px h-40px x-0 y-310">We know how large objects will act, We know how are objects will act, We know</p>
// </div>
// <div>
//     <h1 className="text-white w-80px h-32px x-0 y-10 font-bold">$16.48</h1>
// </div>
// </div>

// </div>

// ) 
// }

import React from 'react'
import Image from 'next/image'

const VitaClassic = () => {
  return (
    <div>
      {/* First Hero Section */}
      <div className="relative w-full h-screen flex items-center">
        <div className="bg-green-900 absolute inset-0 z-[-1] ">
        <div className="flex flex-col justify-center items-end ">
          <Image 
            src="/shop-hero-2-png-picture-1.png" 
            alt="Hero Background" 
        width="443"
        height="665"
        objectFit="cover"
        quality={90}
          />
        </div>
        </div>
        
        <div className="absolute inset-0 flex flex-col justify-center items-center sm:items-start p-8 sm:p-12">
          <div className="w-full sm:w-[599px] h-auto space-y-4 text-center sm:text-left">
            <h5 className="font-montserrat font-bold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] tracking-[0.1px] text-white">
              SUMMER 2020
            </h5>
            <h1 className="font-montserrat font-bold text-[40px] sm:text-[58px] leading-[56px] sm:leading-[80px] tracking-[0.2px] text-white">
              Vita Classic Product
            </h1>
            <h4 className="font-montserrat font-normal text-[16px] sm:text-[20px] leading-[24px] sm:leading-[30px] tracking-[0.2px] text-white w-full sm:w-[376px]">
              We know how large objects will act, We know how are objects will act, We know
            </h4>
            
            <button className="mt-4 w-[184px] h-[52px] sm:w-auto bg-[#2DC071] py-[12px] sm:px-[40px] px-[30px] rounded-[5px] text-white font-montserrat">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      {/* Second Section */}
      <div className="relative bg-white">
        <div className="flex flex-col sm:flex-row items-center">
          {/* Image */}
          <div className="w-full sm:w-1/2 ">
            <Image 
              src="/hero-cover-1.png" 
              alt="Product Image" 
              layout="responsive"
              width={443} 
              height={685}
              objectFit="cover"
            />
          </div>

          {/* Text Overlay */}
          <div className="w-full sm:w-1/2 p-8">
            <div className="space-y-4 text-center sm:text-left">
              <h5 className="font-montserrat font-bold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] tracking-[0.1px] text-black">
                SUMMER 2020
              </h5>
              <h1 className="font-montserrat font-bold text-[40px] sm:text-[58px] leading-[56px] sm:leading-[80px] tracking-[0.2px] text-black">
                Part of the Neural Universe
              </h1>
              <h4 className="font-montserrat font-normal text-[16px] sm:text-[20px] leading-[24px] sm:leading-[30px] tracking-[0.2px] text-black w-full sm:w-[376px]">
                We know how large objects will act, We know how are objects will act, We know
              </h4>
              
              <button className="w-[156px] h-[52px] sm:w-auto bg-[#2DC071] py-[12px] sm:px-[40px] px-[30px] rounded-[5px] text-white font-montserrat">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VitaClassic