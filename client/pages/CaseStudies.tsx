import { Link } from "react-router-dom";

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Navigation */}
      <nav className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-8 lg:px-[100px] py-6 max-w-[1920px] mx-auto gap-4 md:gap-0">
        <div className="flex flex-col">
          <h1 className="text-[20px] font-medium text-[#131417] leading-normal tracking-[-0.2px]">
            Sean Smith
          </h1>
          <p className="text-[16px] font-medium text-[#9FA0A3] leading-normal tracking-[-0.16px]">
            San Francisco, CA
          </p>
        </div>

        <div className="bg-white rounded-[50px] p-[5px] flex items-center flex-wrap gap-1">
          <Link
            to="/"
            className="text-[#131417] px-4 sm:px-[25px] py-[13px] text-sm sm:text-[18px] font-medium tracking-[-0.18px] hover:bg-gray-50 rounded-[50px] transition-colors"
          >
            Home
          </Link>
          <div className="bg-[#131417] text-white px-4 sm:px-[25px] py-[13px] rounded-[50px] text-sm sm:text-[18px] font-medium tracking-[-0.18px]">
            Case Studies
          </div>
          <Link
            to="/about"
            className="text-[#131417] px-4 sm:px-[25px] py-[13px] text-sm sm:text-[18px] font-medium tracking-[-0.18px] hover:bg-gray-50 rounded-[50px] transition-colors"
          >
            About
          </Link>
          <Link
            to="/contacts"
            className="text-[#131417] px-4 sm:px-[25px] py-[13px] text-sm sm:text-[18px] font-medium tracking-[-0.18px] hover:bg-gray-50 rounded-[50px] transition-colors"
          >
            Contacts
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-[100px] py-16">
        {/* Header */}
        <div className="text-center mb-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-300">
          <h1 className="text-4xl sm:text-6xl lg:text-[94px] font-medium text-[#131417] leading-[120%] tracking-[-1.88px] mb-8 transition-all duration-500 hover:tracking-[-1.5px]">
            Case Studies
          </h1>
          <p className="text-lg sm:text-[20px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.2px] max-w-[600px] mx-auto transition-all duration-300 hover:text-[#131417]">
            Explore detailed breakdowns of my design process, challenges, and solutions across various projects.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-500">
          {/* Computis Case Study */}
          <Link
            to="/case-studies/computis-crypto-tax-engine"
            className="group relative animate-in fade-in-0 slide-in-from-left-8 duration-1000 delay-700"
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/437ebf05fba1fe900a48cf92b7c64f206c1d4dd4?width=1900"
              alt="Computis - Crypto Tax Engine"
              className="w-full aspect-square object-cover rounded-[15px] sm:rounded-[20px] lg:rounded-[25px] transition-all duration-500 cursor-pointer group-hover:scale-105 group-hover:shadow-2xl group-hover:brightness-110"
            />
            {/* Title Overlay */}
            <div className="absolute inset-0 bg-black/40 rounded-[15px] sm:rounded-[20px] lg:rounded-[25px] flex items-center justify-center transition-all duration-500 cursor-pointer opacity-0 group-hover:opacity-100">
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
          </Link>

          {/* ezEMRx Case Study */}
          <Link
            to="/case-studies/ezemrx-redesigning-ehr"
            className="group relative animate-in fade-in-0 slide-in-from-right-8 duration-1000 delay-900"
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/37af1375fa98d83c59ef3e2518f99b22a76e895b?width=1900"
              alt="ezEMRx - EHR for Public Health"
              className="w-full aspect-square object-cover rounded-[15px] sm:rounded-[20px] lg:rounded-[25px] transition-all duration-500 cursor-pointer group-hover:scale-105 group-hover:shadow-2xl group-hover:brightness-110"
            />
            {/* Title Overlay */}
            <div className="absolute inset-0 bg-black/40 rounded-[15px] sm:rounded-[20px] lg:rounded-[25px] flex items-center justify-center transition-all duration-500 cursor-pointer opacity-0 group-hover:opacity-100">
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
          </Link>


          {/* Medico Case Study */}
          <Link
            to="/case-studies/medico-hospital-management-system"
            className="group relative animate-in fade-in-0 slide-in-from-right-8 duration-1000 delay-1300"
          >
            <img
              src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Medico - Hospital Management System"
              className="w-full aspect-square object-cover rounded-[15px] sm:rounded-[20px] lg:rounded-[25px] transition-all duration-500 cursor-pointer group-hover:scale-105 group-hover:shadow-2xl group-hover:brightness-110"
            />
            {/* Title Overlay */}
            <div className="absolute inset-0 bg-black/40 rounded-[15px] sm:rounded-[20px] lg:rounded-[25px] flex items-center justify-center transition-all duration-500 cursor-pointer opacity-0 group-hover:opacity-100">
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
          </Link>

          {/* MoneyFarm Case Study */}
          <Link
            to="/case-studies/moneyfarm-ai-powered-personal-finance"
            className="group relative animate-in fade-in-0 slide-in-from-left-8 duration-1000 delay-1500"
          >
            <img
              src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="MoneyFarm - AI-Powered Personal Finance Manager"
              className="w-full aspect-square object-cover rounded-[15px] sm:rounded-[20px] lg:rounded-[25px] transition-all duration-500 cursor-pointer group-hover:scale-105 group-hover:shadow-2xl group-hover:brightness-110"
            />
            {/* Title Overlay */}
            <div className="absolute inset-0 bg-black/40 rounded-[15px] sm:rounded-[20px] lg:rounded-[25px] flex items-center justify-center transition-all duration-500 cursor-pointer opacity-0 group-hover:opacity-100">
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
          </Link>
        </div>
      </div>
    </div>
  );
}