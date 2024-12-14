import Header2 from "@/app/components/header2";

export default function Contact() {
  return (
    <div>
      <Header2 />
      <div className="relative w-full h-screen bg-white flex items-center">
        {/* Text Section */}
        <div className="p-8 sm:p-12">
          <div className="text-center lg:text-left">
            <h4 className="font-bold text-gray-500 text-sm sm:text-base">CONTACT US</h4>
            <h1 className="font-bold text-gray-900 text-3xl sm:text-5xl my-4">
              Get in touch <br /> today!
            </h1>
            <p className="text-gray-600 mb-4">
              We know how large objects will act, <br />
              but things on a small scale.
            </p>
            <p className="font-bold text-black text-sm">
              Phone: +451 215 215 <br /> Fax: +451 215 215
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-3 mt-4">
            <img src="/logos_twitter.jpg" alt="Twitter" className="w-8 h-8" />
            <img src="/logos_facebook.jpg" alt="Facebook" className="w-8 h-8" />
            <img
              src="/ant-design_instagram-outlined (2).jpg"
              alt="Instagram"
              className="w-8 h-8"
            />
            <img src="/logos_linkedin-icon.jpg" alt="LinkedIn" className="w-8 h-8" />
          </div>
        </div>

        {/* Contact Image */}
        <div className=" w-[1040px]  h-[682px] flex-1 flex justify-end">
          <img src="/filter-contact.jpg" alt="Contact Us" className=" " />
        </div>
      </div>
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-[1440px] mx-auto text-center space-y-12">
    <div>
      <h4 className="uppercase text-sm text-blue-500 font-medium mb-2">
        Visit Our Office
      </h4>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
        We help small businesses <br />
        with big ideas
      </h2>
    </div>
    <div className="flex flex-wrap justify-center gap-6">
      {/* Support Card 1 */}
      <div className="w-[328px] h-[403px] flex flex-col space-y-5 items-center bg-white shadow-lg rounded-lg p-6 border border-gray-200 mt-8">
        <img
          src="/Vector (7).jpg"
          alt="contact"
          className="w-10 h-10 mb-4 mt-20"
        />
        <p className="text-sm text-gray-600">
          georgia.young@example.com <br />
          georgia.young@ple.com
        </p>
        <h3 className="text-lg font-semibold text-gray-800">Get Support</h3>
        <button className="mt-4 px-6 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition">
          Submit Request
        </button>
      </div>

      {/* Support Card 2 */}
      <div className="w-[328px] h-[403px] flex flex-col space-y-5 items-center bg-[#252B42] text-white shadow-lg rounded-lg p-6 mt-8">
        <img
          src="/Vector (6).jpg"
          alt="Map"
          className="w-10 h-10 mb-4 mt-20"
        />
        <p className="text-sm">georgia.young@example.com <br /> georgia.young@ple.com</p>
        <h3 className="text-lg font-semibold">Get Support</h3>
        <button className="mt-4 px-6 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-blue-500 transition">
          Submit Request
        </button>
      </div>

      {/* Support Card 3 */}
      <div className="w-[328px] h-[403px] flex flex-col space-y-5 items-center bg-white shadow-lg rounded-lg p-6 border border-gray-200 mt-8">
        <img
          src="/Vector (5).jpg"
          alt="Mail"
          className="w-10 h-10 mb-4 mt-20"
        />
        <p className="text-sm text-gray-600">
          georgia.young@example.com <br />
          georgia.young@ple.com
        </p>
        <h3 className="text-lg font-semibold text-gray-800">Get Support</h3>
        <button className="mt-4 px-6 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition">
          Submit Request
        </button>
      </div>
    </div>
  </div>
</section>


          </div>
  );
}
