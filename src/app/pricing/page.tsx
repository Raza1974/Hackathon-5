import Header2 from "@/app/components/header2";

export default function Pricing() {
  return (
    <div>
      <Header2 />
      <div className="py-12 sm:px-6">
        {/* First Hero Section */}
        <div className="relative w-full h-screen bg-white flex items-center">
          <div className="absolute inset-0 flex flex-col justify-center items-center sm:items-start p-8 sm:p-12">
            <div className="flex-col mt-90 text-center lg:text-left">
              <h4 className="font-montserrat font-bold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] tracking-[0.1px] text-gray-500">
                PRICING
              </h4>
              <h1 className="font-montserrat font-bold text-[40px] sm:text-[58px] leading-[56px] sm:leading-[80px] tracking-[0.2px] text-gray-900">
                Simple Pricing
              </h1>
              <p className="text-gray-600">
                Problems trying to resolve the conflict between <br></br>
                the two major realms of Classical physics: Newtonian mechanics
              </p>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition">
                Get Quote Now
              </button>
            </div>
          </div>
          <div className="w-[55px] ml-28 sm:block">
            <img src="/your-image-path.jpg" alt="About Us" />
          </div>
        </div>

        <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1440px] mx-auto space-y-12">
            <h2 className="text-xl font-semibold text-red-500">Problems trying</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <h1 className="text-2xl font-bold text-gray-900">
                Met minim Mollie non desert <br></br>Alamo est sit cliquey dolor do <br></br> met sent.
              </h1>
              <p className="text-gray-600">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">15K</h3>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">150K</h3>
                <p className="text-sm text-gray-600">Monthly Visitors</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">15</h3>
                <p className="text-sm text-gray-600">Countries Worldwide</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">100+</h3>
                <p className="text-sm text-gray-600">Top Partners</p>
              </div>
            </div>
            <div className="relative w-full h-[764px]">
              <img
                src="/desktop-video-3.jpg"
                alt="Video Thumbnail"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="bg-white py-3 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1440px] mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800">Meet Our Team</h2>
            <p className="text-gray-600 text-sm mt-2">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics.
            </p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center flex flex-col items-center">
                <div className="w-40 h-40 overflow-hidden mb-4">
                  <img
                    src="/team-1-user-3 (2).jpg"
                    alt="Username"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Username</h3>
                <p className="text-sm text-gray-500">Profession</p>
                <div className="flex gap-4 mt-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/Vector (2).jpg"
                      alt="Facebook"
                      className="w-5 h-5 bg-blue-900"
                    />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/ant-design_instagram-outlined.jpg"
                      alt="Instagram"
                      className="w-5 h-5 bg-blue-900"
                    />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/twitter.jpg"
                      alt="Twitter"
                      className="w-5 h-5 bg-blue-900"
                    />
                  </a>
                </div>
              </div>
              {/* Repeat for other team members */}
            </div>
          </div>
        </div>

        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1440px] mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-800">Big Companies Are Here</h2>
            <p className="text-gray-600 text-sm mt-2">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics.
            </p>
            <div className="bg-gray-50 py-8 mt-12">
              <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center gap-8">
                <img
                  src="/fa-brands_hooli.jpg"
                  alt="icon1"
                  className="w-20 h-20 object-contain"
                />
                <img
                  src="/col-md-2.jpg"
                  alt="icon2"
                  className="w-20 h-20 object-contain"
                />
                <img
                  src="/col-md-3.jpg"
                  alt="icon3"
                  className="w-20 h-20 object-contain"
                />
                <img
                  src="/col-md-4 (3).jpg"
                  alt="icon4"
                  className="w-20 h-20 object-contain"
                />
                <img
                  src="/col-md-3 (4).jpg"
                  alt="icon5"
                  className="w-20 h-20 object-contain"
                />
                <img
                  src="/col-md-6 (5).jpg"
                  alt="icon6"
                  className="w-20 h-20 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full lg:w-2/3 bg-blue-500 text-white p-8 flex-1">
            <h4 className="text-sm font-medium uppercase mt-20 ml-10">Work With Us</h4>
            <h2 className="text-3xl font-bold mb-4">Now Let’s grow Yours</h2>
            <p className="text-sm text-blue-200 mb-6">
              The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th century.
            </p>
            <button className="border border-white px-12 py-3 hover:bg-white hover:text-blue-500 transition">
              Button
            </button>
          </div>
          <div className="flex-1">
            <img
              src="/fixed-height (6).jpg"
              alt="Company"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
