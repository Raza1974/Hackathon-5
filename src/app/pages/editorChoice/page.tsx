import Image from "next/image";
export default function EditorChoice() {
  return (
    <div>
      {/* Centered Editor's Pick Section */}
      
      {/* Centered Text Section */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl font-bold w-187px h-32 px-210 mb-1">
          EDITOR’S PICK
        </h1>
        {/* Reduced space using `mb-2` */}
        <p className="text-lg">
          Problems trying to resolve the conflict between
        </p>

        <div className="w-1050px h-500px flex">
         <div className="editter">
          <Image src="/men.png" alt="Hero" width={510} height={500} px-0 py-0 />
          </div>
          <div className="editter">
          <Image src="/women.png" alt="Hero" width={240} height={500} />
          </div>
          <div className="editter1">
            <Image
              src="/accessories.png"
              alt="Hero"
              width={240}
              height={242}
              px-0
              py-0
            />
            
            <div className="editter2">
            <Image
              src="/kid.png"
              alt="Hero"
              width={240}
              height={242}
              px-0
              py-0
            />
          </div>
        </div>
      </div>
    </div>
   
    </div>
  );
}




