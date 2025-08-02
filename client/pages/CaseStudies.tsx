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
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-[50px] animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-500">
          {/* Computis Case Study */}
          <Link
            to="/case-studies/computis-crypto-tax-engine"
            className="group block bg-white rounded-[25px] lg:rounded-[50px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02] animate-in fade-in-0 slide-in-from-left-8 duration-1000 delay-700"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-purple-50 p-8 lg:p-12 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50 group-hover:from-blue-200/50 group-hover:to-purple-200/50 transition-all duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[#131417] rounded-[20px] mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-medium text-[#131417] mb-2 group-hover:tracking-[-0.5px] transition-all duration-300">
                  Computis
                </h3>
                <p className="text-[16px] font-medium text-[#9FA0A3] group-hover:text-[#131417] transition-colors duration-300">
                  Crypto Tax Engine
                </p>
              </div>
            </div>
            <div className="p-6 lg:p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-[#131417] text-white px-3 py-1 rounded-[15px] text-[12px] font-medium">
                  UX Case Study
                </span>
                <span className="text-[14px] font-medium text-[#9FA0A3]">
                  10 months
                </span>
              </div>
              <h4 className="text-[20px] lg:text-[24px] font-medium text-[#131417] leading-[130%] tracking-[-0.24px] mb-3 group-hover:tracking-[-0.2px] transition-all duration-300">
                From backend scripts to trusted enterprise SaaS
              </h4>
              <p className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] mb-6 group-hover:text-[#131417] transition-colors duration-300">
                Designed explainable AI features and self-serve workflows for CPAs, DAOs, and crypto hedge funds.
              </p>
              <div className="flex items-center gap-4 text-[14px] font-medium text-[#131417]">
                <div className="flex items-center gap-1">
                  <span className="text-green-600">↓ 45%</span>
                  <span>Onboarding</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-blue-600">↑ 32%</span>
                  <span>Conversion</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-purple-600">↓ 85%</span>
                  <span>Dev Reliance</span>
                </div>
              </div>
            </div>
          </Link>

          {/* ezEMRx Case Study */}
          <Link
            to="/case-studies/ezemrx-redesigning-ehr"
            className="group block bg-white rounded-[25px] lg:rounded-[50px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02] animate-in fade-in-0 slide-in-from-right-8 duration-1000 delay-900"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-green-50 to-teal-50 p-8 lg:p-12 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-100/50 to-teal-100/50 group-hover:from-green-200/50 group-hover:to-teal-200/50 transition-all duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[#131417] rounded-[20px] mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-medium text-[#131417] mb-2 group-hover:tracking-[-0.5px] transition-all duration-300">
                  ezEMRx
                </h3>
                <p className="text-[16px] font-medium text-[#9FA0A3] group-hover:text-[#131417] transition-colors duration-300">
                  EHR for Public Health
                </p>
              </div>
            </div>
            <div className="p-6 lg:p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-[#131417] text-white px-3 py-1 rounded-[15px] text-[12px] font-medium">
                  UX Case Study
                </span>
                <span className="text-[14px] font-medium text-[#9FA0A3]">
                  Healthcare
                </span>
              </div>
              <h4 className="text-[20px] lg:text-[24px] font-medium text-[#131417] leading-[130%] tracking-[-0.24px] mb-3 group-hover:tracking-[-0.2px] transition-all duration-300">
                Redesigning EHR for Real-World Public Health
              </h4>
              <p className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] mb-6 group-hover:text-[#131417] transition-colors duration-300">
                Transforming a legacy EHR system into an AI-augmented platform for public health agencies.
              </p>
              <div className="flex items-center gap-4 text-[14px] font-medium text-[#131417]">
                <div className="flex items-center gap-1">
                  <span className="text-green-600">↓ 20%</span>
                  <span>Doc Time</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-blue-600">↑ 70%</span>
                  <span>Compliance</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-purple-600">↑ 2.3×</span>
                  <span>Collaboration</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Data Direct Case Study */}
          <Link
            to="/case-studies/data-direct-ai-enhanced-platform"
            className="group block bg-white rounded-[25px] lg:rounded-[50px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02] animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1100"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-indigo-50 to-cyan-50 p-8 lg:p-12 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/50 to-cyan-100/50 group-hover:from-indigo-200/50 group-hover:to-cyan-200/50 transition-all duration-500"></div>
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[#131417] rounded-[20px] mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-medium text-[#131417] mb-2 group-hover:tracking-[-0.5px] transition-all duration-300">
                  Data Direct
                </h3>
                <p className="text-[16px] font-medium text-[#9FA0A3] group-hover:text-[#131417] transition-colors duration-300">
                  AI-Enhanced Data Platform
                </p>
              </div>
            </div>
            <div className="p-6 lg:p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-[#131417] text-white px-3 py-1 rounded-[15px] text-[12px] font-medium">
                  UX Case Study
                </span>
                <span className="text-[14px] font-medium text-[#9FA0A3]">
                  Public Health
                </span>
              </div>
              <h4 className="text-[20px] lg:text-[24px] font-medium text-[#131417] leading-[130%] tracking-[-0.24px] mb-3 group-hover:tracking-[-0.2px] transition-all duration-300">
                AI-Enhanced Public Health Data Platform
              </h4>
              <p className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] mb-6 group-hover:text-[#131417] transition-colors duration-300">
                Transforming a backend ingestion script into an enterprise-grade platform with AI-driven validation.
              </p>
              <div className="flex items-center gap-4 text-[14px] font-medium text-[#131417]">
                <div className="flex items-center gap-1">
                  <span className="text-green-600">↓ 70%</span>
                  <span>Turnaround</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-blue-600">↑ 2.6×</span>
                  <span>Throughput</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-purple-600">↑ 90%</span>
                  <span>Adoption</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
