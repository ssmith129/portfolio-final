import { Link } from "react-router-dom";
import { useState } from "react";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    budget: "",
    deadline: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] relative animate-in fade-in-0 duration-1000">
      {/* Navigation */}
      <nav className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-4 sm:py-5 md:py-6 max-w-[1920px] mx-auto gap-4 md:gap-0 relative z-10 animate-in fade-in-0 slide-in-from-top-4 duration-700">
        <div className="flex flex-col">
          <h1 className="text-base sm:text-lg md:text-xl font-medium text-[#131417] leading-normal tracking-[-0.2px] transition-all duration-300 hover:tracking-[-0.1px]">
            Henry James
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-medium text-[#9FA0A3] leading-normal tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
            London, England
          </p>
        </div>

        <div className="bg-white rounded-[25px] sm:rounded-[35px] md:rounded-[50px] p-[3px] sm:p-[4px] md:p-[5px] flex items-center flex-wrap gap-1 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] w-full sm:w-auto justify-center">
          <div className="bg-[#131417] text-white px-3 sm:px-4 md:px-6 lg:px-[25px] py-2 sm:py-2.5 md:py-[13px] rounded-[25px] sm:rounded-[35px] md:rounded-[50px] text-xs sm:text-sm md:text-base lg:text-[18px] font-medium tracking-[-0.18px] transition-all duration-300 hover:bg-[#2a2a2a] hover:scale-105">
            Home
          </div>
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
          <Link
            to="/contacts"
            className="text-[#131417] px-3 sm:px-4 md:px-6 lg:px-[25px] py-2 sm:py-2.5 md:py-[13px] text-xs sm:text-sm md:text-base lg:text-[18px] font-medium tracking-[-0.18px] hover:bg-gray-50 rounded-[25px] sm:rounded-[35px] md:rounded-[50px] transition-all duration-300 hover:scale-105 hover:tracking-[-0.1px]"
          >
            Contacts
          </Link>
        </div>

        {/* Social Links - Desktop */}
        <div className="hidden xl:flex flex-col items-end animate-in fade-in-0 slide-in-from-right-4 duration-700 delay-300">
          <p className="text-xs sm:text-sm md:text-base font-medium text-[#9FA0A3] leading-normal tracking-[-0.16px] mb-2 transition-colors duration-300 hover:text-[#131417]">
            Social
          </p>
          <div className="text-sm sm:text-base md:text-lg lg:text-[20px] font-medium text-[#131417] leading-normal tracking-[-0.2px] space-x-3 sm:space-x-4 flex">
            <span className="transition-all duration-300 hover:text-[#9FA0A3] hover:scale-110 cursor-pointer">TW</span>
            <span className="transition-all duration-300 hover:text-[#9FA0A3] hover:scale-110 cursor-pointer">IG</span>
            <span className="transition-all duration-300 hover:text-[#9FA0A3] hover:scale-110 cursor-pointer">BE</span>
            <span className="transition-all duration-300 hover:text-[#9FA0A3] hover:scale-110 cursor-pointer">DRIB</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Side - Hero Content */}
        <div className="flex-1 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-6 sm:py-8 md:py-12 lg:py-24 xl:py-[200px] animate-in fade-in-0 slide-in-from-left-8 duration-1000 delay-500">
          {/* Text Content */}
          <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-24 xl:mb-[200px]">
            <div className="w-full max-w-[250px] sm:max-w-[290px] mb-6 sm:mb-8 md:mb-12 lg:mb-24 xl:mb-[141px] animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-700">
              <p className="text-sm sm:text-base md:text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.18px] mb-6 sm:mb-8 transition-all duration-300 hover:text-[#2a2a2a] hover:tracking-[-0.1px]">
                Over 18 awards and mentions from renowned industry players like
                Awwwards, FWA, and CSSDA. I can't wait to see what the future
                holds as I continue to innovate and create.
              </p>
              <p className="text-xs sm:text-sm md:text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.12px] sm:tracking-[-0.14px] md:tracking-[-0.16px] transition-all duration-300 hover:text-[#9FA0A3]">
                Last updated 31 - 05 - 2023
              </p>
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[94px] font-medium text-[#131417] leading-[110%] sm:leading-[115%] md:leading-[120%] tracking-[-0.4px] sm:tracking-[-0.6px] md:tracking-[-1px] lg:tracking-[-1.5px] xl:tracking-[-1.88px] max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1118px] animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-900 transition-all duration-500 hover:tracking-[-1.5px]">
              UI/UX Designer and Front-end Developer currently based in London
            </h1>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full lg:w-[600px] xl:w-[857px] bg-black/[0.03] backdrop-blur-[25px] p-4 sm:p-6 md:p-8 lg:p-10 xl:p-[50px] flex flex-col justify-between min-h-screen lg:min-h-auto animate-in fade-in-0 slide-in-from-right-8 duration-1000 delay-1100">
          {/* Form Header */}
          <div className="flex justify-between items-center mb-8 sm:mb-12 md:mb-16 lg:mb-24 xl:mb-[178px] animate-in fade-in-0 slide-in-from-top-4 duration-1000 delay-1300">
            <p className="text-sm sm:text-base md:text-lg lg:text-[20px] font-normal text-[#131417] leading-[18px] sm:leading-[20px] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.2px] transition-all duration-300 hover:tracking-[-0.15px]">
              Use this form to describe your project
            </p>
            <button className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-90">
              <svg
                width="20"
                height="20"
                className="sm:w-6 sm:h-6 md:w-7 md:h-7"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 7L7 21M7 7L21 21"
                  stroke="#131417"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-16 xl:space-y-[68px] animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1500">
            {/* Name Row */}
            <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-[28px] font-normal text-[#131417] leading-[20px] sm:leading-[24px] md:leading-[28px] tracking-[-0.14px] sm:tracking-[-0.18px] md:tracking-[-0.24px] lg:tracking-[-0.28px] animate-in fade-in-0 slide-in-from-left-4 duration-1000 delay-1700">
              <span>Hi, my name is</span>
              <div className="flex flex-col">
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Harry Maguire"
                  className={`bg-transparent border-none outline-none text-[#CDCDCD] placeholder-[#CDCDCD] min-w-[120px] sm:min-w-[150px] md:min-w-[200px] lg:min-w-[250px] xl:min-w-[343px] transition-all duration-300 ${
                    focusedField === "name" ? "text-[#131417] scale-105" : ""
                  }`}
                />
                <div className={`h-px mt-1 sm:mt-2 transition-all duration-300 ${
                  focusedField === "name" ? "bg-[#131417] scale-x-110" : "bg-[#CDCDCD]"
                }`}></div>
              </div>
              <span>You can answer</span>
            </div>

            {/* Email Row */}
            <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-[28px] font-normal text-[#131417] leading-[20px] sm:leading-[24px] md:leading-[28px] tracking-[-0.14px] sm:tracking-[-0.18px] md:tracking-[-0.24px] lg:tracking-[-0.28px] animate-in fade-in-0 slide-in-from-left-4 duration-1000 delay-1900">
              <span>me on this email</span>
              <div className="flex flex-col">
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="email@example.com"
                  className={`bg-transparent border-none outline-none text-[#CDCDCD] placeholder-[#CDCDCD] min-w-[120px] sm:min-w-[150px] md:min-w-[200px] lg:min-w-[280px] xl:min-w-[365px] transition-all duration-300 ${
                    focusedField === "email" ? "text-[#131417] scale-105" : ""
                  }`}
                />
                <div className={`h-px mt-1 sm:mt-2 transition-all duration-300 ${
                  focusedField === "email" ? "bg-[#131417] scale-x-110" : "bg-[#CDCDCD]"
                }`}></div>
              </div>
              <span>I am looking</span>
            </div>

            {/* Project Row */}
            <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-[28px] font-normal text-[#131417] leading-[20px] sm:leading-[24px] md:leading-[28px] tracking-[-0.14px] sm:tracking-[-0.18px] md:tracking-[-0.24px] lg:tracking-[-0.28px] animate-in fade-in-0 slide-in-from-left-4 duration-1000 delay-2100">
              <span>for help with a</span>
              <div className="flex flex-col">
                <input
                  type="text"
                  value={formData.project}
                  onChange={(e) => handleInputChange("project", e.target.value)}
                  onFocus={() => setFocusedField("project")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="website, design, etc"
                  className={`bg-transparent border-none outline-none text-[#CDCDCD] placeholder-[#CDCDCD] min-w-[120px] sm:min-w-[150px] md:min-w-[200px] lg:min-w-[270px] xl:min-w-[356px] transition-all duration-300 ${
                    focusedField === "project" ? "text-[#131417] scale-105" : ""
                  }`}
                />
                <div className={`h-px mt-1 sm:mt-2 transition-all duration-300 ${
                  focusedField === "project" ? "bg-[#131417] scale-x-110" : "bg-[#CDCDCD]"
                }`}></div>
              </div>
              <span>My budget is £</span>
            </div>

            {/* Budget & Deadline Row */}
            <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-[28px] font-normal text-[#131417] leading-[20px] sm:leading-[24px] md:leading-[28px] tracking-[-0.14px] sm:tracking-[-0.18px] md:tracking-[-0.24px] lg:tracking-[-0.28px] animate-in fade-in-0 slide-in-from-left-4 duration-1000 delay-2300">
              <div className="flex flex-col">
                <input
                  type="text"
                  value={formData.budget}
                  onChange={(e) => handleInputChange("budget", e.target.value)}
                  onFocus={() => setFocusedField("budget")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="1000£"
                  className={`bg-transparent border-none outline-none text-[#CDCDCD] placeholder-[#CDCDCD] min-w-[60px] sm:min-w-[80px] md:min-w-[100px] lg:min-w-[120px] xl:min-w-[145px] transition-all duration-300 ${
                    focusedField === "budget" ? "text-[#131417] scale-105" : ""
                  }`}
                />
                <div className={`h-px mt-1 sm:mt-2 transition-all duration-300 ${
                  focusedField === "budget" ? "bg-[#131417] scale-x-110" : "bg-[#CDCDCD]"
                }`}></div>
              </div>
              <span>and I need it done by</span>
              <div className="flex flex-col">
                <input
                  type="text"
                  value={formData.deadline}
                  onChange={(e) =>
                    handleInputChange("deadline", e.target.value)
                  }
                  onFocus={() => setFocusedField("deadline")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="May 31, 2023"
                  className={`bg-transparent border-none outline-none text-[#CDCDCD] placeholder-[#CDCDCD] min-w-[100px] sm:min-w-[120px] md:min-w-[150px] lg:min-w-[200px] xl:min-w-[310px] transition-all duration-300 ${
                    focusedField === "deadline" ? "text-[#131417] scale-105" : ""
                  }`}
                />
                <div className={`h-px mt-1 sm:mt-2 transition-all duration-300 ${
                  focusedField === "deadline" ? "bg-[#131417] scale-x-110" : "bg-[#CDCDCD]"
                }`}></div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="animate-in fade-in-0 zoom-in-95 duration-1000 delay-2500 flex justify-center sm:justify-start">
              <button
                type="submit"
                className="bg-[#131417] text-white px-4 sm:px-5 py-2 sm:py-3 rounded-[25px] sm:rounded-[35px] md:rounded-[50px] text-sm sm:text-base md:text-[18px] font-medium leading-[18px] sm:leading-[20px] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.18px] hover:bg-[#1f2023] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:tracking-[-0.1px] active:scale-95"
              >
                Contact Us
              </button>
            </div>
          </form>

          {/* Social Links */}
          <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 lg:gap-12 xl:gap-[70px] pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-[80px] text-sm sm:text-base md:text-[18px] font-medium text-[#131417] leading-[16px] sm:leading-[18px] tracking-[-0.14px] sm:tracking-[-0.16px] md:tracking-[-0.18px] animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-2700">
            <a href="#" className="hover:text-[#9FA0A3] transition-all duration-300 hover:scale-110 hover:tracking-[-0.1px] text-center">
              Instagram
            </a>
            <a href="#" className="hover:text-[#9FA0A3] transition-all duration-300 hover:scale-110 hover:tracking-[-0.1px] text-center">
              Facebook
            </a>
            <a href="#" className="hover:text-[#9FA0A3] transition-all duration-300 hover:scale-110 hover:tracking-[-0.1px] text-center break-all sm:break-normal">
              henry_james@mail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
