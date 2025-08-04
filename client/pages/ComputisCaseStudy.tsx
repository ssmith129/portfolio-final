import { Link } from "react-router-dom";
import ComputisPrototypeSection from "@/components/ComputisPrototypeSection";

export default function ComputisCaseStudy() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Navigation */}
      <nav className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-4 sm:py-5 md:py-6 gap-4 md:gap-0 animate-in fade-in-0 slide-in-from-top-4 duration-700">
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
            className="text-[#131417] px-3 sm:px-4 md:px-6 lg:px-[25px] py-2 sm:py-2.5 md:py-[13px] text-xs sm:text-sm md:text-base lg:text-[18px] font-medium tracking-[-0.18px] hover:bg-gray-50 rounded-[25px] sm:rounded-[35px] md:rounded-[50px] transition-all duration-300 hover:scale-105 hover:tracking-[-0.1px]"
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

      {/* Hero Section */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-24 xl:py-[120px]">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-300">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[94px] font-medium text-[#131417] leading-[110%] sm:leading-[115%] md:leading-[120%] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] lg:tracking-[-1.5px] xl:tracking-[-1.88px] mb-4 sm:mb-6 md:mb-8 transition-all duration-500 hover:tracking-[-1.5px]">
            Computis Crypto Tax Engine
          </h1>
          <p className="text-base sm:text-lg md:text-[20px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] max-w-[500px] sm:max-w-[600px] md:max-w-[700px] mx-auto transition-all duration-300 hover:text-[#131417]">
            Designing an enterprise-grade crypto tax automation platform for accountants, analysts, and legal teams working with blockchain data.
          </p>
        </div>

        {/* Project Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-500">
          <div className="text-center">
            <h3 className="text-sm sm:text-base md:text-lg font-medium text-[#9FA0A3] leading-[150%] tracking-[-0.18px] mb-2 sm:mb-3">
              Role
            </h3>
            <p className="text-base sm:text-lg md:text-xl font-normal text-[#131417] leading-[150%] tracking-[-0.2px]">
              Senior Product Designer
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-sm sm:text-base md:text-lg font-medium text-[#9FA0A3] leading-[150%] tracking-[-0.18px] mb-2 sm:mb-3">
              Timeline
            </h3>
            <p className="text-base sm:text-lg md:text-xl font-normal text-[#131417] leading-[150%] tracking-[-0.2px]">
              2023 - Present
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-sm sm:text-base md:text-lg font-medium text-[#9FA0A3] leading-[150%] tracking-[-0.18px] mb-2 sm:mb-3">
              Platform
            </h3>
            <p className="text-base sm:text-lg md:text-xl font-normal text-[#131417] leading-[150%] tracking-[-0.2px]">
              Web Application
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-sm sm:text-base md:text-lg font-medium text-[#9FA0A3] leading-[150%] tracking-[-0.18px] mb-2 sm:mb-3">
              Impact
            </h3>
            <p className="text-base sm:text-lg md:text-xl font-normal text-[#131417] leading-[150%] tracking-[-0.2px]">
              $1M+ Revenue
            </p>
          </div>
        </div>
      </div>

      {/* Challenge Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-700">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.5px] lg:tracking-[-0.6px] xl:tracking-[-0.8px] mb-4 sm:mb-6 transition-all duration-500 hover:tracking-[-0.5px]">
            Challenge
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[24px] font-normal text-[#9FA0A3] leading-[1.5em] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] lg:tracking-[-0.24px] max-w-[600px] sm:max-w-[700px] md:max-w-[800px] mx-auto transition-all duration-300 hover:text-[#131417]">
            Crypto tax compliance is incredibly complex, requiring specialized knowledge of blockchain technology, tax regulations, and accounting principles. Existing solutions were either too basic for enterprise use or too complex for non-technical users.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-900">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.5px] lg:tracking-[-0.6px] xl:tracking-[-0.8px] mb-4 sm:mb-6 transition-all duration-500 hover:tracking-[-0.5px]">
            Solution
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[24px] font-normal text-[#9FA0A3] leading-[1.5em] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] lg:tracking-[-0.24px] max-w-[600px] sm:max-w-[700px] md:max-w-[800px] mx-auto transition-all duration-300 hover:text-[#131417]">
            I designed a comprehensive crypto tax automation platform that bridges the gap between complex blockchain data and regulatory compliance requirements, making enterprise-grade tax calculations accessible to professionals across different skill levels.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1100">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.5px] lg:tracking-[-0.6px] xl:tracking-[-0.8px] mb-4 sm:mb-6 transition-all duration-500 hover:tracking-[-0.5px]">
            Design Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
          <div className="text-center p-6 sm:p-8 md:p-10 rounded-[16px] sm:rounded-[20px] md:rounded-[25px] bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#131417] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-all duration-300 hover:bg-[#2a2a2a]">
              <span className="text-white text-lg sm:text-xl md:text-2xl font-medium">1</span>
            </div>
            <h4 className="text-lg sm:text-xl md:text-2xl font-medium text-[#131417] leading-[120%] tracking-[-0.2px] sm:tracking-[-0.3px] mb-3 sm:mb-4 transition-all duration-300 hover:tracking-[-0.15px]">
              Research & Discovery
            </h4>
            <p className="text-sm sm:text-base md:text-lg font-normal text-[#9FA0A3] leading-[1.5em] tracking-[-0.14px] sm:tracking-[-0.16px] transition-all duration-300 hover:text-[#131417]">
              Conducted extensive interviews with CPAs, crypto analysts, and compliance professionals to understand pain points in crypto tax workflows.
            </p>
          </div>

          <div className="text-center p-6 sm:p-8 md:p-10 rounded-[16px] sm:rounded-[20px] md:rounded-[25px] bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#131417] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-all duration-300 hover:bg-[#2a2a2a]">
              <span className="text-white text-lg sm:text-xl md:text-2xl font-medium">2</span>
            </div>
            <h4 className="text-lg sm:text-xl md:text-2xl font-medium text-[#131417] leading-[120%] tracking-[-0.2px] sm:tracking-[-0.3px] mb-3 sm:mb-4 transition-all duration-300 hover:tracking-[-0.15px]">
              Information Architecture
            </h4>
            <p className="text-sm sm:text-base md:text-lg font-normal text-[#9FA0A3] leading-[1.5em] tracking-[-0.14px] sm:tracking-[-0.16px] transition-all duration-300 hover:text-[#131417]">
              Mapped complex crypto tax calculations into logical user flows, creating clear pathways from data import to final tax reports.
            </p>
          </div>

          <div className="text-center p-6 sm:p-8 md:p-10 rounded-[16px] sm:rounded-[20px] md:rounded-[25px] bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#131417] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-all duration-300 hover:bg-[#2a2a2a]">
              <span className="text-white text-lg sm:text-xl md:text-2xl font-medium">3</span>
            </div>
            <h4 className="text-lg sm:text-xl md:text-2xl font-medium text-[#131417] leading-[120%] tracking-[-0.2px] sm:tracking-[-0.3px] mb-3 sm:mb-4 transition-all duration-300 hover:tracking-[-0.15px]">
              Prototyping & Testing
            </h4>
            <p className="text-sm sm:text-base md:text-lg font-normal text-[#9FA0A3] leading-[1.5em] tracking-[-0.14px] sm:tracking-[-0.16px] transition-all duration-300 hover:text-[#131417]">
              Built interactive prototypes and conducted usability testing with target users to validate design decisions and iterate on key features.
            </p>
          </div>
        </div>
      </section>

      {/* Final Designs & Outcome Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1300">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.5px] lg:tracking-[-0.6px] xl:tracking-[-0.8px] mb-4 sm:mb-6 transition-all duration-500 hover:tracking-[-0.5px]">
            Final Designs & Outcome
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[24px] font-normal text-[#9FA0A3] leading-[1.5em] tracking-[-0.16px] sm:tracking-[-0.18px] md:tracking-[-0.2px] lg:tracking-[-0.24px] max-w-[600px] sm:max-w-[700px] md:max-w-[800px] mx-auto transition-all duration-300 hover:text-[#131417]">
            The final platform successfully bridges complex blockchain data with regulatory compliance, making crypto tax calculations accessible to professionals at all skill levels.
          </p>
        </div>

        {/* Design showcase images would go here */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
          <div className="bg-white rounded-[16px] sm:rounded-[20px] md:rounded-[25px] p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg sm:text-xl md:text-2xl font-medium text-[#131417] mb-4">
              Dashboard Overview
            </h4>
            <p className="text-sm sm:text-base md:text-lg text-[#9FA0A3] mb-4">
              Clean, data-driven interface providing at-a-glance insights into crypto tax calculations and compliance status.
            </p>
            <div className="bg-gray-100 rounded-lg h-40 sm:h-48 md:h-56 flex items-center justify-center">
              <span className="text-gray-400">Dashboard Screenshot</span>
            </div>
          </div>

          <div className="bg-white rounded-[16px] sm:rounded-[20px] md:rounded-[25px] p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="text-lg sm:text-xl md:text-2xl font-medium text-[#131417] mb-4">
              Transaction Processing
            </h4>
            <p className="text-sm sm:text-base md:text-lg text-[#9FA0A3] mb-4">
              Automated transaction categorization and tax calculation with manual override capabilities for complex cases.
            </p>
            <div className="bg-gray-100 rounded-lg h-40 sm:h-48 md:h-56 flex items-center justify-center">
              <span className="text-gray-400">Transaction View Screenshot</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Prototype Section - THIS IS WHERE THE IFRAME GOES */}
      <ComputisPrototypeSection />

      {/* Results, Learnings & Next Steps Section */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1500">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] sm:tracking-[-0.4px] md:tracking-[-0.5px] lg:tracking-[-0.6px] xl:tracking-[-0.8px] mb-4 sm:mb-6 transition-all duration-500 hover:tracking-[-0.5px]">
            Results, Learnings & Next Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24">
          
          {/* Results */}
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-6 sm:mb-8">
              Results
            </h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-2 h-2 bg-[#131417] rounded-full flex-shrink-0"></div>
                <p className="text-base sm:text-lg text-[#131417]">45% reduction in onboarding time</p>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-2 h-2 bg-[#131417] rounded-full flex-shrink-0"></div>
                <p className="text-base sm:text-lg text-[#131417]">32% increase in user conversion</p>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-2 h-2 bg-[#131417] rounded-full flex-shrink-0"></div>
                <p className="text-base sm:text-lg text-[#131417]">85% reduction in support tickets</p>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-2 h-2 bg-[#131417] rounded-full flex-shrink-0"></div>
                <p className="text-base sm:text-lg text-[#131417]">$1M+ in platform revenue generated</p>
              </div>
            </div>
          </div>

          {/* Learnings */}
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-6 sm:mb-8">
              Key Learnings
            </h3>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-[#9FA0A3] leading-[1.5em]">
                Complex financial workflows require progressive disclosure to prevent cognitive overload while maintaining access to detailed information.
              </p>
              <p className="text-base sm:text-lg text-[#9FA0A3] leading-[1.5em]">
                Trust is paramount in financial applications - transparent calculations and audit trails are essential for user confidence.
              </p>
              <p className="text-base sm:text-lg text-[#9FA0A3] leading-[1.5em]">
                AI-powered automation must be paired with manual override capabilities for edge cases and regulatory compliance.
              </p>
            </div>
          </div>

          {/* Next Steps */}
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#131417] leading-[120%] tracking-[-0.3px] mb-6 sm:mb-8">
              Next Steps
            </h3>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-[#9FA0A3] leading-[1.5em]">
                Expand international tax jurisdiction support beyond the current US-focused calculations.
              </p>
              <p className="text-base sm:text-lg text-[#9FA0A3] leading-[1.5em]">
                Develop advanced reporting features for institutional clients and regulatory filing automation.
              </p>
              <p className="text-base sm:text-lg text-[#9FA0A3] leading-[1.5em]">
                Integrate real-time blockchain monitoring for continuous compliance tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#131417] text-white animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1700">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-8 sm:py-12 md:py-16 lg:py-24 xl:py-[134px]">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6 md:gap-8 lg:gap-0">
            <span className="text-xs sm:text-sm md:text-base lg:text-[18px] font-medium leading-[18px] tracking-[-0.18px] order-3 lg:order-1 transition-all duration-300 hover:text-[#9FA0A3]">
              © All rights reserved.
            </span>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-[44px] order-1 lg:order-2">
              <a
                href="https://www.behance.net/ssmit129"
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-110 hover:tracking-[-0.1px]"
              >
                Behance
              </a>
              <a
                href="https://github.com/ssmith129"
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-110 hover:tracking-[-0.1px]"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sean-smith-sf/"
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-110 hover:tracking-[-0.1px]"
              >
                LinkedIn
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-[40px] order-2 lg:order-3">
              <a
                href="#"
                className="text-sm sm:text-base md:text-lg lg:text-[18px] font-medium leading-[18px] tracking-[-0.18px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-105"
              >
                License
              </a>
              <a
                href="#"
                className="text-sm sm:text-base md:text-lg lg:text-[18px] font-medium leading-[18px] tracking-[-0.18px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-105"
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