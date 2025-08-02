import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Navigation */}
      <nav className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-8 lg:px-[100px] py-6 max-w-[1920px] mx-auto gap-4 md:gap-0 animate-in fade-in-0 slide-in-from-top-4 duration-700">
        <div className="flex flex-col">
          <h1 className="text-[20px] font-medium text-[#131417] leading-normal tracking-[-0.2px] transition-all duration-300 hover:tracking-[-0.1px]">
            Sean Smith
          </h1>
          <p className="text-[16px] font-medium text-[#9FA0A3] leading-normal tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
            San Francisco, CA
          </p>
        </div>

        <div className="bg-white rounded-[50px] p-[5px] flex items-center flex-wrap gap-1 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
          <div className="bg-[#131417] text-white px-4 sm:px-[25px] py-[13px] rounded-[50px] text-sm sm:text-[18px] font-medium tracking-[-0.18px] transition-all duration-300 hover:bg-[#2a2a2a] hover:scale-105">
            Home
          </div>
          <Link
            to="/case-studies"
            className="text-[#131417] px-4 sm:px-[25px] py-[13px] text-sm sm:text-[18px] font-medium tracking-[-0.18px] hover:bg-gray-50 rounded-[50px] transition-all duration-300 hover:scale-105 hover:tracking-[-0.1px]"
          >
            Case Studies
          </Link>
          <Link
            to="/about"
            className="text-[#131417] px-4 sm:px-[25px] py-[13px] text-sm sm:text-[18px] font-medium tracking-[-0.18px] hover:bg-gray-50 rounded-[50px] transition-all duration-300 hover:scale-105 hover:tracking-[-0.1px]"
          >
            About
          </Link>
          <Link
            to="/contacts"
            className="text-[#131417] px-4 sm:px-[25px] py-[13px] text-sm sm:text-[18px] font-medium tracking-[-0.18px] hover:bg-gray-50 rounded-[50px] transition-all duration-300 hover:scale-105 hover:tracking-[-0.1px]"
          >
            Contacts
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-[100px] space-y-16 sm:space-y-32 lg:space-y-[246px] pb-16">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row justify-between items-start pt-5 gap-8 lg:gap-0 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-300">
          <div className="w-full lg:w-[290px] order-2 lg:order-1 animate-in fade-in-0 slide-in-from-left-8 duration-1000 delay-500">
            <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] mb-8 lg:mb-[141px] transition-all duration-300 hover:text-[#2a2a2a] hover:tracking-[-0.1px]">
              Over 18 awards and mentions from renowned industry players like
              Awwwards, FWA, and CSSDA. I can't wait to see what the future
              holds as I continue to innovate and create.
            </p>
            <p className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] transition-all duration-300 hover:text-[#9FA0A3]">
              Last updated 31 - 05 - 2023
            </p>
          </div>

          <div className="w-full lg:max-w-[934px] lg:flex-1 lg:ml-[362px] order-1 lg:order-2 animate-in fade-in-0 slide-in-from-right-8 duration-1000 delay-700">
            <h1 className="text-4xl sm:text-6xl lg:text-[94px] font-medium text-[#131417] leading-[120%] tracking-[-1.88px] transition-all duration-500 hover:tracking-[-1.5px]">
              UX/Product Designer currently based in San Francisco
            </h1>
          </div>
        </section>

        {/* Works Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-[50px] animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1000">
          <div className="space-y-8 sm:space-y-12 lg:space-y-[50px] animate-in fade-in-0 slide-in-from-left-8 duration-1000 delay-1200">
            <div 
              className="relative group"
              onMouseEnter={() => setHoveredImage(1)}
              onMouseLeave={() => setHoveredImage(null)}
              onClick={() => navigate('/case-studies/computis-crypto-tax-engine')}
            >
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/437ebf05fba1fe900a48cf92b7c64f206c1d4dd4?width=1900"
                alt="Computis - Crypto Tax Engine"
                className={`w-full h-[400px] sm:h-[500px] lg:h-[700px] object-cover rounded-[25px] sm:rounded-[35px] lg:rounded-[50px] transition-all duration-500 cursor-pointer ${
                  hoveredImage === 1 ? 'scale-105 shadow-2xl brightness-110' : 'hover:scale-[1.02] hover:shadow-xl'
                }`}
              />
              {/* Title Overlay */}
              <div className={`absolute inset-0 bg-black/40 rounded-[25px] sm:rounded-[35px] lg:rounded-[50px] flex items-center justify-center transition-all duration-500 ${
                hoveredImage === 1 ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="text-center text-white transform transition-all duration-500">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-2 tracking-[-0.5px]">
                    Computis
                  </h3>
                  <p className="text-lg sm:text-xl font-normal opacity-90 tracking-[-0.2px]">
                    Crypto Tax Engine
                  </p>
                  <div className="mt-4 text-sm font-medium opacity-75">
                    Click to view case study →
                  </div>
                </div>
              </div>
            </div>
            <img
              onMouseEnter={() => setHoveredImage(3)}
              onMouseLeave={() => setHoveredImage(null)}
              src="https://api.builder.io/api/v1/image/assets/TEMP/37af1375fa98d83c59ef3e2518f99b22a76e895b?width=1900"
              alt="Project showcase 3"
              className={`w-full h-[400px] sm:h-[500px] lg:h-[700px] object-cover rounded-[25px] sm:rounded-[35px] lg:rounded-[50px] transition-all duration-500 cursor-pointer ${
                hoveredImage === 3 ? 'scale-105 shadow-2xl brightness-110' : 'hover:scale-[1.02] hover:shadow-xl'
              }`}
            />
          </div>
          <div className="space-y-8 sm:space-y-12 lg:space-y-[50px] animate-in fade-in-0 slide-in-from-right-8 duration-1000 delay-1400">
            <img
              onMouseEnter={() => setHoveredImage(2)}
              onMouseLeave={() => setHoveredImage(null)}
              src="https://api.builder.io/api/v1/image/assets/TEMP/726a68012d94e5c06eb87fe03d7555c4a8b3fe84?width=1440"
              alt="Project showcase 2"
              className={`w-full h-[400px] sm:h-[500px] lg:h-[700px] object-cover rounded-[25px] sm:rounded-[35px] lg:rounded-[50px] transition-all duration-500 cursor-pointer ${
                hoveredImage === 2 ? 'scale-105 shadow-2xl brightness-110' : 'hover:scale-[1.02] hover:shadow-xl'
              }`}
            />
            <img
              onMouseEnter={() => setHoveredImage(4)}
              onMouseLeave={() => setHoveredImage(null)}
              src="https://api.builder.io/api/v1/image/assets/TEMP/3137aafb62fed94bbbffa6c0c0f8215cf67ddef8?width=1440"
              alt="Project showcase 4"
              className={`w-full h-[400px] sm:h-[500px] lg:h-[700px] object-cover rounded-[25px] sm:rounded-[35px] lg:rounded-[50px] transition-all duration-500 cursor-pointer ${
                hoveredImage === 4 ? 'scale-105 shadow-2xl brightness-110' : 'hover:scale-[1.02] hover:shadow-xl'
              }`}
            />
          </div>
        </section>

        {/* About Section */}
        <section className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1600">
          <div className="w-full lg:w-[162px] order-2 lg:order-1 animate-in fade-in-0 slide-in-from-left-8 duration-1000 delay-1800">
            <p className="text-[18px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.18px] mb-[20px] transition-all duration-300 hover:text-[#131417]">
              Some of the clients:
            </p>
            <div className="space-y-[5px] flex flex-wrap gap-4 lg:flex-col lg:gap-[5px]">
              <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] transition-all duration-300 hover:text-[#9FA0A3] hover:tracking-[-0.1px] cursor-pointer">
                Rag & Bone
              </p>
              <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] transition-all duration-300 hover:text-[#9FA0A3] hover:tracking-[-0.1px] cursor-pointer">
                Aimfox
              </p>
              <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] transition-all duration-300 hover:text-[#9FA0A3] hover:tracking-[-0.1px] cursor-pointer">
                Disney
              </p>
              <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] transition-all duration-300 hover:text-[#9FA0A3] hover:tracking-[-0.1px] cursor-pointer">
                Knight Frank
              </p>
              <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] transition-all duration-300 hover:text-[#9FA0A3] hover:tracking-[-0.1px] cursor-pointer">
                Volkswagen
              </p>
            </div>
          </div>

          <div className="w-full lg:max-w-[1118px] lg:flex-1 lg:ml-[440px] order-1 lg:order-2 animate-in fade-in-0 slide-in-from-right-8 duration-1000 delay-2000">
            <div className="relative mb-[30px]">
              <h2 className="text-2xl sm:text-3xl lg:text-[48px] font-normal text-[#131417] leading-[150%] tracking-[-0.48px] transition-all duration-500 hover:tracking-[-0.3px]">
                Studied Web Development at London App Brewery And have been
                working in the development industry for over a decade.
              </h2>
              <div className="hidden lg:block absolute top-[3px] left-[635px] w-[483px] h-[70px] border border-[#131417] rounded-[50px] transition-all duration-500 hover:scale-105 hover:border-[#9FA0A3]"></div>
            </div>

            <p className="text-lg sm:text-[20px] font-normal text-[#131417] leading-[150%] tracking-[-0.2px] max-w-[787px] mb-8 lg:mb-[68px] transition-all duration-300 hover:text-[#2a2a2a] hover:tracking-[-0.15px]">
              My passion for development & design started when I was young, and
              I have pursued this passion by working with a variety of clients
              and projects over the years. I have worked with startups, small
              businesses, and large corporations, creating user interfaces for
              websites, software applications, and mobile apps.
            </p>

            <button className="text-[18px] font-normal text-[#9FA0A3] leading-[100%] tracking-[-0.18px] hover:text-[#131417] transition-all duration-300 hover:tracking-[-0.1px] hover:scale-105 group">
              <span className="border-b border-transparent group-hover:border-[#131417] transition-all duration-300">
              Read More
              </span>
            </button>
          </div>
        </section>
      </div>

      {/* Awards Section */}
      <section className="bg-[#F5F5F5] rounded-b-[25px] sm:rounded-b-[35px] lg:rounded-b-[50px] pb-16 lg:pb-[100px] animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2200">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-[100px] pt-16 lg:pt-[150px] animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2400">
          <p className="text-[18px] font-normal text-[#9FA0A3] leading-[20px] tracking-[-0.18px] mb-8 lg:mb-[50px] transition-all duration-300 hover:text-[#131417]">
            Awards & Recognitions
          </p>

          <div className="max-w-[1118px] lg:ml-[602px] space-y-8 lg:space-y-[50px] animate-in fade-in-0 slide-in-from-right-8 duration-1000 delay-2600">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#9FA0A3] pb-4 lg:pb-[50px] gap-2 sm:gap-0 transition-all duration-300 hover:border-[#131417] group cursor-pointer">
              <span className="text-lg sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px] transition-all duration-300 group-hover:tracking-[-0.2px] group-hover:text-[#2a2a2a]">
                The Ultra Index® ⏤ For storytelling experience
              </span>
              <span className="text-lg sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px] transition-all duration-300 group-hover:text-[#9FA0A3]">
                2023
              </span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#9FA0A3] pb-4 lg:pb-[50px] gap-2 sm:gap-0 transition-all duration-300 hover:border-[#131417] group cursor-pointer">
              <span className="text-lg sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px] transition-all duration-300 group-hover:tracking-[-0.2px] group-hover:text-[#2a2a2a]">
                Awwwards ⏤ Site of the Day (x12)
              </span>
              <span className="text-lg sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px] transition-all duration-300 group-hover:text-[#9FA0A3]">
                2023
              </span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#9FA0A3] pb-4 lg:pb-[50px] gap-2 sm:gap-0 transition-all duration-300 hover:border-[#131417] group cursor-pointer">
              <span className="text-lg sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px] transition-all duration-300 group-hover:tracking-[-0.2px] group-hover:text-[#2a2a2a]">
                Designer of the Year ⏤ Nominee
              </span>
              <span className="text-lg sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px] transition-all duration-300 group-hover:text-[#9FA0A3]">
                2022
              </span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#9FA0A3] pb-4 lg:pb-[50px] gap-2 sm:gap-0 transition-all duration-300 hover:border-[#131417] group cursor-pointer">
              <span className="text-lg sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px] transition-all duration-300 group-hover:tracking-[-0.2px] group-hover:text-[#2a2a2a]">
                2021 Figma Community Award ⏤ Nominee
              </span>
              <span className="text-lg sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px] transition-all duration-300 group-hover:text-[#9FA0A3]">
                2021
              </span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#9FA0A3] pb-4 lg:pb-[50px] gap-2 sm:gap-0 transition-all duration-300 hover:border-[#131417] group cursor-pointer">
              <span className="text-lg sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px] transition-all duration-300 group-hover:tracking-[-0.2px] group-hover:text-[#2a2a2a]">
                CSSAwards ⏤ Featured of the Day (x20+)
              </span>
              <span className="text-lg sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px] transition-all duration-300 group-hover:text-[#9FA0A3]">
                2020
              </span>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#9FA0A3] pb-4 lg:pb-[50px] gap-2 sm:gap-0 transition-all duration-300 hover:border-[#131417] group cursor-pointer">
              <span className="text-lg sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px] transition-all duration-300 group-hover:tracking-[-0.2px] group-hover:text-[#2a2a2a]">
                Awwwards ⏤ Developer Award (x6)
              </span>
              <span className="text-lg sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px] transition-all duration-300 group-hover:text-[#9FA0A3]">
                2019
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#131417] text-white animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2800">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-[100px] py-16 lg:py-[134px] animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-3000">
          {/* Footer Header */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-16 lg:mb-[270px] gap-4 sm:gap-0 animate-in fade-in-0 slide-in-from-top-4 duration-1000 delay-3200">
            <span className="text-[18px] font-medium leading-[20px] tracking-[-0.18px] transition-all duration-300 hover:text-[#9FA0A3] hover:tracking-[-0.1px]">
              Portfolio 2023 - 2024
            </span>
            <span className="text-[20px] font-semibold leading-[20px] tracking-[-0.2px] transition-all duration-300 hover:tracking-[-0.1px] hover:scale-105">
              Henry James
            </span>
            <span className="text-[18px] font-medium leading-[20px] tracking-[-0.18px] text-center sm:text-right transition-all duration-300 hover:text-[#9FA0A3] hover:tracking-[-0.1px]">
              51.5074° N, 0.1278° W
            </span>
          </div>

          {/* Get in Touch */}
          <div className="text-center mb-16 lg:mb-[270px] animate-in fade-in-0 zoom-in-95 duration-1000 delay-3400">
            <p className="text-[18px] font-medium text-[#9FA0A3] leading-[20px] tracking-[-0.18px] mb-[20px] transition-all duration-300 hover:text-white">
              Have a nice project?
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-[72px] font-medium leading-[72px] tracking-[-0.72px] transition-all duration-500 hover:tracking-[-0.5px] hover:scale-105 cursor-pointer">
              Get in Touch
            </h2>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-3600">
            <span className="text-[18px] font-medium leading-[18px] tracking-[-0.18px] order-3 lg:order-1 transition-all duration-300 hover:text-[#9FA0A3]">
              © All rights reserved.
            </span>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-[44px] order-1 lg:order-2">
              <a
                href="#"
                className="text-lg sm:text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-110 hover:tracking-[-0.1px]"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-lg sm:text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-110 hover:tracking-[-0.1px]"
              >
                Behance
              </a>
              <a
                href="#"
                className="text-lg sm:text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-110 hover:tracking-[-0.1px]"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-lg sm:text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-110 hover:tracking-[-0.1px]"
              >
                Dribble
              </a>
            </div>

            <div className="flex gap-4 sm:gap-8 lg:gap-[40px] order-2 lg:order-3">
              <a
                href="#"
                className="text-[18px] font-medium leading-[18px] tracking-[-0.18px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-105"
              >
                License
              </a>
              <a
                href="#"
                className="text-[18px] font-medium leading-[18px] tracking-[-0.18px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-105"
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
