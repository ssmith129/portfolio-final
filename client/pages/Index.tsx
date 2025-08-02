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

          <div className="w-full order-1 animate-in fade-in-0 slide-in-from-right-8 duration-1000 delay-500">
            <h1 className="text-4xl sm:text-6xl lg:text-[94px] font-medium text-[#131417] leading-[120%] tracking-[-1.88px] transition-all duration-500 hover:tracking-[-1.5px] text-center">
              UX/Product Designer currently based in San Francisco
            </h1>
          </div>
        </section>

        {/* About Section */}
        <section className="flex justify-center animate-in fade-in-0 slide-in-from-bottom-6 duration-800 delay-700">
          <div className="max-w-3xl text-center">
            <p className="text-lg sm:text-xl font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.2px] transition-all duration-300 hover:text-[#131417]">
              Senior Product Designer with 6+ years of experience creating intuitive, scalable UX for complex SaaS and enterprise platforms. I specialize in AI-integrated systems that streamline workflows, simplify data, and drive decisions.
            </p>
          </div>
        </section>

        {/* Works Section */}
        <section className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-900">
            <div 
              className="relative group"
              onMouseEnter={() => setHoveredImage(1)}
              onMouseLeave={() => setHoveredImage(null)}
              onClick={() => navigate('/case-studies/computis-crypto-tax-engine')}
            >
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/437ebf05fba1fe900a48cf92b7c64f206c1d4dd4?width=1900"
                alt="Computis - Crypto Tax Engine"
                className={`w-full aspect-square object-cover rounded-[15px] sm:rounded-[20px] lg:rounded-[25px] transition-all duration-500 cursor-pointer ${
                  hoveredImage === 1 ? 'scale-105 shadow-2xl brightness-110' : 'hover:scale-[1.02] hover:shadow-xl'
                }`}
              />
              {/* Title Overlay */}
              <div 
                className={`absolute inset-0 bg-black/40 rounded-[15px] sm:rounded-[20px] lg:rounded-[25px] flex items-center justify-center transition-all duration-500 cursor-pointer ${
                hoveredImage === 1 ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="text-center text-white transform transition-all duration-500">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-medium mb-2 tracking-[-0.5px]">
                    Computis
                  </h3>
                  <p className="text-sm sm:text-base font-normal opacity-90 tracking-[-0.2px]">
                    Crypto Tax Engine
                  </p>
                  <div className="mt-2 text-xs font-medium opacity-75">
                    Click to view case study →
                  </div>
                </div>
              </div>
            </div>
            <div 
              className="relative group"
              onMouseEnter={() => setHoveredImage(3)}
              onMouseLeave={() => setHoveredImage(null)}
              onClick={() => navigate('/case-studies/ezemrx-redesigning-ehr')}
            >
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/37af1375fa98d83c59ef3e2518f99b22a76e895b?width=1900"
                alt="ezEMRx - EHR for Public Health"
                className={`w-full aspect-square object-cover rounded-[15px] sm:rounded-[20px] lg:rounded-[25px] transition-all duration-500 cursor-pointer ${
                hoveredImage === 3 ? 'scale-105 shadow-2xl brightness-110' : 'hover:scale-[1.02] hover:shadow-xl'
              }`}
              />
              {/* Title Overlay */}
              <div className={`absolute inset-0 bg-black/40 rounded-[15px] sm:rounded-[20px] lg:rounded-[25px] flex items-center justify-center transition-all duration-500 ${
                hoveredImage === 3 ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="text-center text-white transform transition-all duration-500">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-medium mb-2 tracking-[-0.5px]">
                    ezEMRx
                  </h3>
                  <p className="text-sm sm:text-base font-normal opacity-90 tracking-[-0.2px]">
                    EHR for Public Health
                  </p>
                  <div className="mt-2 text-xs font-medium opacity-75">
                    Click to view case study →
                  </div>
                </div>
              </div>
            </div>
            <div 
              className="relative group"
              onMouseEnter={() => setHoveredImage(5)}
              onMouseLeave={() => setHoveredImage(null)}
              onClick={() => navigate('/case-studies/medico-hospital-management-system')}
            >
              <img
                src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Medico - Hospital Management System"
                className={`w-full aspect-square object-cover rounded-[15px] sm:rounded-[20px] lg:rounded-[25px] transition-all duration-500 cursor-pointer ${
                  hoveredImage === 5 ? 'scale-105 shadow-2xl brightness-110' : 'hover:scale-[1.02] hover:shadow-xl'
                }`}
              />
              {/* Title Overlay */}
              <div className={`absolute inset-0 bg-black/40 rounded-[15px] sm:rounded-[20px] lg:rounded-[25px] flex items-center justify-center transition-all duration-500 ${
                hoveredImage === 5 ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="text-center text-white transform transition-all duration-500">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-medium mb-2 tracking-[-0.5px]">
                    Medico
                  </h3>
                  <p className="text-sm sm:text-base font-normal opacity-90 tracking-[-0.2px]">
                    Hospital Management System
                  </p>
                  <div className="mt-2 text-xs font-medium opacity-75">
                    Click to view case study →
                  </div>
                </div>
              </div>
            </div>
            <div 
              className="relative group"
              onMouseEnter={() => setHoveredImage(7)}
              onMouseLeave={() => setHoveredImage(null)}
              onClick={() => navigate('/case-studies/moneyfarm-ai-powered-personal-finance')}
            >
              <img
                src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="MoneyFarm - AI-Powered Personal Finance Manager"
                className={`w-full aspect-square object-cover rounded-[15px] sm:rounded-[20px] lg:rounded-[25px] transition-all duration-500 cursor-pointer ${
                  hoveredImage === 7 ? 'scale-105 shadow-2xl brightness-110' : 'hover:scale-[1.02] hover:shadow-xl'
                }`}
              />
              {/* Title Overlay */}
              <div className={`absolute inset-0 bg-black/40 rounded-[15px] sm:rounded-[20px] lg:rounded-[25px] flex items-center justify-center transition-all duration-500 ${
                hoveredImage === 7 ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="text-center text-white transform transition-all duration-500">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-medium mb-2 tracking-[-0.5px]">
                    MoneyFarm
                  </h3>
                  <p className="text-sm sm:text-base font-normal opacity-90 tracking-[-0.2px]">
                    AI-Powered Personal Finance Manager
                  </p>
                  <div className="mt-2 text-xs font-medium opacity-75">
                    Click to view case study →
                  </div>
                </div>
              </div>
            </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="bg-[#131417] text-white animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2800">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-[100px] py-16 lg:py-[134px] animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-3000">
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