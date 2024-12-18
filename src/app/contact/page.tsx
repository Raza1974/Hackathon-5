import Header2 from "@/app/components/header2";

export default function Contact() {
  return (
    <div>
      <Header2 />
      
      <div className="py-12 sm:px-6 ">
        {/* First Hero Section */}

        <div className=" ml-20 relative w-full h-screen bg-white flex items-center">
          <div className="absolute inset-0 flex flex-col w-[1352px] h-[729px] justify-center items-center sm:items-start p-8 sm:p-12">
            <div className=" flex-col mt-90 text-center lg:text-left">
              <h4 className="font-montserrat  font-bold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] tracking-[0.1px] text-gray-500">
                CONTACT US
              </h4>
              <br></br>
              <h1 className="font-montserrat font-bold text-[40px] sm:text-[58px] leading-[56px] sm:leading-[80px] tracking-[0.2px] text-gray-900">
              Get in touch <br></br>
              today!
              </h1>
              <br></br>
              <p className="text-gray-600 mb-4">
              We know how large objects will act, <br />
              but things on a small scale.
            </p>
            <p className="font-bold text-black text-sm">
              Phone: +451 215 215 <br /> Fax: +451 215 215
            </p>
          </div>

          {/* Social Media Icons */}

          <div className="contact-social flex gap-3">
            <img src="/logos_twitter.jpg" alt="Twitter"  />
            <img src="/logos_facebook.jpg" alt="Facebook"  />
            <img src="/ant-design_instagram-outlined (2).jpg" alt="Instagram" />
            <img src="/logos_linkedin-icon.jpg" alt="LinkedIn" />
          </div>
        </div>
<br></br>


            <div>
            
              </div>
          
          <div className="w-55px ml-28 mr-12 sm:block">
            <img src="/filter-contact.jpg" alt="About Us" />
          </div>
        </div>

  
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto text-center space-y-12">
          <div>
            <h4 className="uppercase text-sm text-black font-bold mb-2">
              Visit Our Office
            </h4>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              We help small businesses <br />
              with big ideas
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6">

            {/* Support Card 1 */}
            <div className="w-[328px] h-[343px] flex flex-col py-30 items-center bg-white shadow-lg  p-6 border border-gray-200 mt-8">
            <div  className=" phone ">
              <img
                src="/Vector (7).jpg"
                alt="Mail"
               
              />
              </div>
             <div className="text-sm font-bold">
              <p >
                georgia.young@example.com 
              </p>
              <p>
              georgia.young@ple.com
              </p>
              </div>
              <h3 className="get-support text-lg ">Get Support</h3>
              <button className="px-6 py-2 border submit-request " >
              <h1 className="submit-button">
                Submit Request
                </h1>
              </button>
            </div>

            {/* Support Card 2 */}
            <div className="w-[328px] h-[403px] flex flex-col px-327 items-center  bg-[#252B42] text-white shadow-lg  p-6 mt-3">
            <div  className=" map ">
              <img
                src="/icn settings .icn-xl (1).png"
                alt="Map"
               
              />
              </div>
          <div>
              <p className="text-sm font-bold">
                georgia.young@example.com 
              </p>
              <p>
              georgia.young@ple.com
              </p>
              </div>
              <h3 className="get-support2 text-lg ">Get Support</h3>
              <button className=" px-6 py-2 border submit-request ">
                <h1 className="submit-button">
                Submit Request
                </h1>
              </button>
            </div>

            {/* Support Card 3 */}
            <div className="w-[328px] h-[343px] flex flex-col px-656 py-30 items-center bg-white shadow-lg  p-6 border border-gray-200 mt-8">
             <div  className=" mail ">
              <img
                src="/Vector (5).jpg"
                alt="Mail"
               
              />
              </div>
           <div>
              <p className="text-sm font-bold">
                georgia.young@example.com 
              </p>
              <p>
              georgia.young@ple.com
              </p>
              </div>
              <h3 className="get-support text-lg  ">Get Support</h3>
              <button className="font-bold px-6 py-2 border submit-request ">
              <h1 className="submit-button">
                Submit Request
                </h1>
              </button>
            </div>
          </div>
          <div className="last-div1 justify-items-center">
            <div className="last-div2  justify-items-center">

          <div className=" arrow ">
            <img
              src="/Arrow 2.png"
              alt="Mail"
           
            />
          </div>
          <div className="last-div3  justify-items-center">
          <div className="last-div4  justify-items-center">
          <div>
            <h1 className=" meet-you font-bold ">
              WE Cant WAIT TO MEET YOU
            </h1>
  
            <div>
              <h1 className="talk font-bold  ">Let s Talk</h1>

              <div>
                <button className="free-now font-bold border ">
                 <h1 className="free-text">
                  Try it free now
                  </h1>
                </button>
              </div>
              </div>
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}
