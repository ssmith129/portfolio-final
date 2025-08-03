import { Link } from "react-router-dom";
import { useState } from "react";

export default function EzEMRxCaseStudy() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const openModal = (imageSrc: string) => {
    setCurrentImage(imageSrc);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Navigation - Consistent across all case studies */}
      <nav className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-4 sm:py-5 md:py-6 max-w-[1440px] mx-auto gap-4 md:gap-0 animate-in fade-in-0 slide-in-from-top-4 duration-700">
        <div className="flex flex-col">
          <h1 className="text-base sm:text-lg md:text-xl font-medium text-[#131417] leading-normal tracking-[-0.2px] transition-all duration-300 hover:tracking-[-0.1px]">
            Sean Smith
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-medium text-[#9FA0A3] leading-normal tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
            San Francisco, CA
          </p>
        </div>

        <div className="bg-white rounded-[25px] sm:rounded-[35px] md:rounded-[50px] p-[3px] sm:p-[4px] md:p-[5px] flex items-center flex-wrap gap-1 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] w-full sm:w-auto justify-center">
          <Link
            to="/"
            className="text-[#131417] px-3 sm:px-4 md:px-6 lg:px-[25px] py-2 sm:py-2.5 md:py-[13px] text-xs sm:text-sm md:text-base lg:text-[18px] font-medium tracking-[-0.18px] hover:bg-gray-50 rounded-[25px] sm:rounded-[35px] md:rounded-[50px] transition-all duration-300 hover:scale-105 hover:tracking-[-0.1px]"
          >
            Home
          </Link>
          <Link
            to="/case-studies"
            className="bg-[#131417] text-white px-3 sm:px-4 md:px-6 lg:px-[25px] py-2 sm:py-2.5 md:py-[13px] rounded-[25px] sm:rounded-[35px] md:rounded-[50px] text-xs sm:text-sm md:text-base lg:text-[18px] font-medium tracking-[-0.18px] transition-all duration-300 hover:bg-[#2a2a2a] hover:scale-105"
          >
            Case Studies
          </Link>
          <Link
            to="/about"
            className="text-[#131417] px-3 sm:px-4 md:px-6 lg:px-[25px] py-2 sm:py-2.5 md:py-[13px] text-xs sm:text-sm md:text-base lg:text-[18px] font-medium tracking-[-0.18px] hover:bg-gray-50 rounded-[25px] sm:rounded-[35px] md:rounded-[50px] transition-all duration-300 hover:scale-105 hover:tracking-[-0.1px]"
          >
            About
          </Link>
        </div>
      </nav>

      {/* Hero Section - Standardized case study header */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
        <div className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-300">
          {/* Case Study Meta Information */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-12">
            <span className="bg-[#131417] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-[15px] sm:rounded-[20px] text-xs sm:text-sm font-medium tracking-[-0.15px]">
              Healthcare
            </span>
            <span className="bg-white border border-[#131417] text-[#131417] px-3 sm:px-4 py-1.5 sm:py-2 rounded-[15px] sm:rounded-[20px] text-xs sm:text-sm font-medium tracking-[-0.15px]">
              Public Health EHR
            </span>
            <span className="bg-white border border-[#131417] text-[#131417] px-3 sm:px-4 py-1.5 sm:py-2 rounded-[15px] sm:rounded-[20px] text-xs sm:text-sm font-medium tracking-[-0.15px]">
              2021 - 2022
            </span>
          </div>
          
          {/* Main Title - H1 Typography Hierarchy */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-medium text-[#131417] leading-[110%] tracking-[-0.8px] sm:tracking-[-1.2px] md:tracking-[-1.5px] lg:tracking-[-1.8px] xl:tracking-[-2.16px] mb-6 sm:mb-8 md:mb-12 transition-all duration-500 hover:tracking-[-1.5px]">
            ezEMRx: Redesigning EHR
          </h1>
          
          {/* Subtitle - Consistent 24px spacing below H1 */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[150%] tracking-[-0.2px] sm:tracking-[-0.24px] md:tracking-[-0.28px] mb-8 sm:mb-12 md:mb-16 max-w-[800px] transition-all duration-300 hover:text-[#2a2a2a]">
            Redesigning electronic health records system to improve healthcare workflows and patient data management for public health organizations.
          </p>

          {/* Key Metrics - Visual prominence with consistent spacing */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-16 md:mb-24">
            <div className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#131417] leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] mb-2 transition-all duration-300 hover:scale-105">
                60%
              </div>
              <p className="text-sm sm:text-base text-[#9FA0A3] leading-[150%] tracking-[-0.16px] transition-all duration-300 hover:text-[#131417]">
                Faster Patient Data Entry
              </p>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#131417] leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] mb-2 transition-all duration-300 hover:scale-105">
                40%
              </div>
              <p className="text-sm sm:text-base text-[#9FA0A3] leading-[150%] tracking-[-0.16px] transition-all duration-300 hover:text-[#131417]">
                Reduced Training Time
              </p>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#131417] leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] mb-2 transition-all duration-300 hover:scale-105">
                95%
              </div>
              <p className="text-sm sm:text-base text-[#9FA0A3] leading-[150%] tracking-[-0.16px] transition-all duration-300 hover:text-[#131417]">
                Staff Satisfaction Rate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview Section - Structured content with optimal spacing */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-12 sm:py-16 md:py-20 lg:py-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-500">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 xl:gap-24">
          {/* Content Column - Responsive typography */}
          <div className="lg:col-span-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-medium text-[#131417] leading-[120%] tracking-[-0.4px] sm:tracking-[-0.6px] md:tracking-[-0.84px] mb-6 sm:mb-8 md:mb-12 transition-all duration-500 hover:tracking-[-0.6px]">
              Project Overview
            </h2>
            
            <div className="space-y-6 sm:space-y-8">
              <p className="text-base sm:text-lg md:text-[20px] font-normal text-[#131417] leading-[160%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] transition-all duration-300 hover:text-[#2a2a2a]">
                ezEMRx serves public health organizations with a comprehensive electronic health records system designed to streamline patient care, improve data accuracy, and enhance workflow efficiency.
              </p>
              
              <p className="text-base sm:text-lg md:text-[20px] font-normal text-[#131417] leading-[160%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] transition-all duration-300 hover:text-[#2a2a2a]">
                I led the complete UX redesign of the platform, focusing on reducing cognitive load for healthcare workers while ensuring compliance with healthcare data standards and accessibility requirements.
              </p>
            </div>
          </div>
          
          {/* Sidebar Information - Structured project details */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-[20px] sm:rounded-[25px] md:rounded-[30px] p-6 sm:p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] mb-6 sm:mb-8">
                Project Details
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h4 className="text-sm sm:text-base font-medium text-[#9FA0A3] leading-[150%] tracking-[-0.16px] mb-2">
                    Timeline
                  </h4>
                  <p className="text-base sm:text-lg font-normal text-[#131417] leading-[150%] tracking-[-0.18px]">
                    8 months (2021 - 2022)
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm sm:text-base font-medium text-[#9FA0A3] leading-[150%] tracking-[-0.16px] mb-2">
                    My Role
                  </h4>
                  <p className="text-base sm:text-lg font-normal text-[#131417] leading-[150%] tracking-[-0.18px]">
                    Lead UX Designer, Healthcare UX Specialist
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm sm:text-base font-medium text-[#9FA0A3] leading-[150%] tracking-[-0.16px] mb-2">
                    Team
                  </h4>
                  <p className="text-base sm:text-lg font-normal text-[#131417] leading-[150%] tracking-[-0.18px]">
                    3 Engineers, 1 Product Manager, Healthcare Consultants
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm sm:text-base font-medium text-[#9FA0A3] leading-[150%] tracking-[-0.16px] mb-2">
                    Tools Used
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-[#F5F5F5] text-[#131417] px-3 py-1 rounded-[12px] text-sm font-medium">
                      Sketch
                    </span>
                    <span className="bg-[#F5F5F5] text-[#131417] px-3 py-1 rounded-[12px] text-sm font-medium">
                      InVision
                    </span>
                    <span className="bg-[#F5F5F5] text-[#131417] px-3 py-1 rounded-[12px] text-sm font-medium">
                      Angular
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement - Clear visual separation */}
      <section className="bg-white/50 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-700">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-12 sm:py-16 md:py-20 lg:py-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-medium text-[#131417] leading-[120%] tracking-[-0.4px] sm:tracking-[-0.6px] md:tracking-[-0.84px] mb-8 sm:mb-12 md:mb-16 text-center transition-all duration-500 hover:tracking-[-0.6px]">
            The Challenge
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#131417] rounded-[20px] sm:rounded-[25px] flex items-center justify-center mx-auto mb-6 sm:mb-8 transition-all duration-300 hover:bg-[#2a2a2a] hover:scale-105">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] mb-4 sm:mb-6">
                Complex Interface
              </h3>
              <p className="text-sm sm:text-base md:text-[18px] font-normal text-[#9FA0A3] leading-[160%] tracking-[-0.16px] sm:tracking-[-0.18px] transition-all duration-300 hover:text-[#131417]">
                Legacy system with overwhelming navigation and dense information layout created usability challenges.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#131417] rounded-[20px] sm:rounded-[25px] flex items-center justify-center mx-auto mb-6 sm:mb-8 transition-all duration-300 hover:bg-[#2a2a2a] hover:scale-105">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] mb-4 sm:mb-6">
                Inefficient Workflows
              </h3>
              <p className="text-sm sm:text-base md:text-[18px] font-normal text-[#9FA0A3] leading-[160%] tracking-[-0.16px] sm:tracking-[-0.18px] transition-all duration-300 hover:text-[#131417]">
                Healthcare providers spent excessive time on data entry instead of patient care.
              </p>
            </div>
            
            <div className="text-center md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#131417] rounded-[20px] sm:rounded-[25px] flex items-center justify-center mx-auto mb-6 sm:mb-8 transition-all duration-300 hover:bg-[#2a2a2a] hover:scale-105">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] mb-4 sm:mb-6">
                Training Overhead
              </h3>
              <p className="text-sm sm:text-base md:text-[18px] font-normal text-[#9FA0A3] leading-[160%] tracking-[-0.16px] sm:tracking-[-0.18px] transition-all duration-300 hover:text-[#131417]">
                New staff required extensive training to navigate the complex system effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Comparison */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-12 sm:py-16 md:py-20 lg:py-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-900">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-medium text-[#131417] leading-[120%] tracking-[-0.4px] sm:tracking-[-0.6px] md:tracking-[-0.84px] mb-8 sm:mb-12 md:mb-16 text-center transition-all duration-500 hover:tracking-[-0.6px]">
          Before & After
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          {/* Before - Original Interface */}
          <div className="text-center">
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] mb-6 sm:mb-8">
              Original Interface
            </h3>
            
            {/* Screenshot Container */}
            <div className="relative group cursor-pointer" onClick={() => openModal("/old_2.png")}>
              <div className="w-full max-w-[350px] mx-auto rounded-[16px] sm:rounded-[20px] md:rounded-[25px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] border border-gray-200">
                <img
                  src="/old_2.png"
                  alt="Original EHR interface showing complex navigation, dense information layout, and multiple overlapping windows that created usability challenges for healthcare providers"
                  className="w-full h-auto object-cover transition-all duration-500 group-hover:brightness-110"
                />
                
                {/* Zoom Icon Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 sm:p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#131417]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <ul className="text-left text-sm sm:text-base text-[#9FA0A3] leading-[160%] tracking-[-0.16px] mt-6 sm:mt-8 space-y-2 sm:space-y-3 max-w-[350px] mx-auto">
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">×</span>
                Overwhelming interface with too many options
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">×</span>
                Complex navigation structure
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 mt-1">×</span>
                Poor information hierarchy
              </li>
            </ul>
          </div>
          
          {/* After - Redesigned Interface */}
          <div className="text-center">
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] mb-6 sm:mb-8">
              Redesigned Interface
            </h3>
            
            {/* Screenshot Container */}
            <div className="relative group cursor-pointer" onClick={() => openModal("https://api.builder.io/api/v1/image/assets/TEMP/37af1375fa98d83c59ef3e2518f99b22a76e895b?width=1900")}>
              <div className="w-full max-w-[350px] mx-auto rounded-[16px] sm:rounded-[20px] md:rounded-[25px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] border border-gray-200">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/37af1375fa98d83c59ef3e2518f99b22a76e895b?width=1900"
                  alt="Redesigned EHR interface featuring clean design, intuitive navigation, organized information hierarchy, and streamlined workflow that improved healthcare provider efficiency"
                  className="w-full h-auto object-cover transition-all duration-500 group-hover:brightness-110"
                />
                
                {/* Zoom Icon Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 sm:p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#131417]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <ul className="text-left text-sm sm:text-base text-[#9FA0A3] leading-[160%] tracking-[-0.16px] mt-6 sm:mt-8 space-y-2 sm:space-y-3 max-w-[350px] mx-auto">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                Clean, focused interface design
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                Intuitive navigation system
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 mt-1">✓</span>
                Clear information hierarchy
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Results & Impact - Quantified outcomes */}
      <section className="bg-[#131417] text-white animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-12 sm:py-16 md:py-20 lg:py-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-medium text-white leading-[120%] tracking-[-0.4px] sm:tracking-[-0.6px] md:tracking-[-0.84px] mb-8 sm:mb-12 md:mb-16 text-center transition-all duration-500 hover:tracking-[-0.6px]">
            Results & Impact
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16 mb-12 sm:mb-16 md:mb-20">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-[110%] tracking-[-0.8px] sm:tracking-[-1.2px] mb-4 sm:mb-6 transition-all duration-300 hover:scale-110">
                60%
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-white leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] mb-3 sm:mb-4">
                Faster Data Entry
              </h3>
              <p className="text-sm sm:text-base md:text-[18px] font-normal text-[#9FA0A3] leading-[160%] tracking-[-0.16px] sm:tracking-[-0.18px]">
                Streamlined workflows reduced patient data entry time significantly
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-[110%] tracking-[-0.8px] sm:tracking-[-1.2px] mb-4 sm:mb-6 transition-all duration-300 hover:scale-110">
                40%
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-white leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] mb-3 sm:mb-4">
                Less Training Time
              </h3>
              <p className="text-sm sm:text-base md:text-[18px] font-normal text-[#9FA0A3] leading-[160%] tracking-[-0.16px] sm:tracking-[-0.18px]">
                Intuitive design reduced onboarding time for new healthcare staff
              </p>
            </div>
            
            <div className="text-center sm:col-span-2 lg:col-span-1">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-[110%] tracking-[-0.8px] sm:tracking-[-1.2px] mb-4 sm:mb-6 transition-all duration-300 hover:scale-110">
                95%
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-white leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] mb-3 sm:mb-4">
                Staff Satisfaction
              </h3>
              <p className="text-sm sm:text-base md:text-[18px] font-normal text-[#9FA0A3] leading-[160%] tracking-[-0.16px] sm:tracking-[-0.18px]">
                Healthcare providers reported high satisfaction with the new system
              </p>
            </div>
          </div>
          
          {/* User Feedback Quote */}
          <div className="text-center max-w-[800px] mx-auto">
            <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-normal text-white leading-[150%] tracking-[-0.2px] sm:tracking-[-0.24px] md:tracking-[-0.28px] mb-6 sm:mb-8 italic">
              "The new ezEMRx interface is a game-changer. We can focus more on patient care instead of struggling with complicated software. It's intuitive and saves us hours each day."
            </blockquote>
            <cite className="text-sm sm:text-base md:text-[18px] font-medium text-[#9FA0A3] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px]">
              — Dr. Sarah Johnson, Public Health Director
            </cite>
          </div>
        </div>
      </section>

      {/* Next Steps - Clear call-to-action */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-12 sm:py-16 md:py-20 lg:py-24 text-center animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1300">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-medium text-[#131417] leading-[120%] tracking-[-0.4px] sm:tracking-[-0.6px] md:tracking-[-0.84px] mb-6 sm:mb-8 md:mb-12 transition-all duration-500 hover:tracking-[-0.6px]">
          Explore More Work
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <Link
            to="/case-studies"
            className="bg-[#131417] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-[25px] sm:rounded-[35px] md:rounded-[50px] text-sm sm:text-base md:text-lg font-medium tracking-[-0.18px] sm:tracking-[-0.2px] hover:bg-[#2a2a2a] transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            View All Case Studies
          </Link>
          <Link
            to="/about"
            className="border border-[#131417] text-[#131417] px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-[25px] sm:rounded-[35px] md:rounded-[50px] text-sm sm:text-base md:text-lg font-medium tracking-[-0.18px] sm:tracking-[-0.2px] hover:bg-[#131417] hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Learn About My Process
          </Link>
        </div>
      </section>

      {/* Modal for Image Enlargement */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-in fade-in-0 duration-300" onClick={() => setIsModalOpen(false)}>
          <div className="relative max-w-[90vw] max-h-[90vh] animate-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()}>
            <img
              src={currentImage}
              alt="Enlarged view"
              className="w-full h-full object-contain rounded-[12px] sm:rounded-[16px]"
            />
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#131417] w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-white transition-all duration-200 hover:scale-110"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}