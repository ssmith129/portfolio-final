import { Link } from "react-router-dom";
import { useState } from "react";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    budget: "",
    deadline: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] relative">
      {/* Navigation */}
      <nav className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-8 lg:px-[100px] py-6 max-w-[1920px] mx-auto gap-4 md:gap-0 relative z-10">
        <div className="flex flex-col">
          <h1 className="text-[20px] font-medium text-[#131417] leading-normal tracking-[-0.2px]">
            Henry James
          </h1>
          <p className="text-[16px] font-medium text-[#9FA0A3] leading-normal tracking-[-0.16px]">
            London, England
          </p>
        </div>
        
        <div className="bg-white rounded-[50px] p-[5px] flex items-center flex-wrap gap-1">
          <div className="bg-[#131417] text-white px-4 sm:px-[25px] py-[13px] rounded-[50px] text-sm sm:text-[18px] font-medium tracking-[-0.18px]">
            Home
          </div>
          <Link to="/case-studies" className="text-[#131417] px-4 sm:px-[25px] py-[13px] text-sm sm:text-[18px] font-medium tracking-[-0.18px] hover:bg-gray-50 rounded-[50px] transition-colors">
            Case Studies
          </Link>
          <Link to="/about" className="text-[#131417] px-4 sm:px-[25px] py-[13px] text-sm sm:text-[18px] font-medium tracking-[-0.18px] hover:bg-gray-50 rounded-[50px] transition-colors">
            About
          </Link>
          <Link to="/contacts" className="text-[#131417] px-4 sm:px-[25px] py-[13px] text-sm sm:text-[18px] font-medium tracking-[-0.18px] hover:bg-gray-50 rounded-[50px] transition-colors">
            Contacts
          </Link>
        </div>

        {/* Social Links - Desktop */}
        <div className="hidden lg:flex flex-col items-end">
          <p className="text-[16px] font-medium text-[#9FA0A3] leading-normal tracking-[-0.16px] mb-2">
            Social
          </p>
          <div className="text-[20px] font-medium text-[#131417] leading-normal tracking-[-0.2px] space-x-4">
            <span>TW</span>
            <span>IG</span>
            <span>BE</span>
            <span>DRIB</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Side - Hero Content */}
        <div className="flex-1 px-4 sm:px-8 lg:px-[100px] py-8 lg:py-[200px]">
          {/* Text Content */}
          <div className="mb-16 lg:mb-[200px]">
            <div className="w-full max-w-[290px] mb-8 lg:mb-[141px]">
              <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] mb-8">
                Over 18 awards and mentions from renowned industry players like Awwwards, FWA, and CSSDA. I can't wait to see what the future holds as I continue to innovate and create.
              </p>
              <p className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px]">
                Last updated          31 - 05 - 2023
              </p>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-[94px] font-medium text-[#131417] leading-[120%] tracking-[-1.88px] max-w-[1118px]">
              UI/UX Designer and Front-end Developer currently based in London
            </h1>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full lg:w-[857px] bg-black/[0.03] backdrop-blur-[25px] p-8 lg:p-[50px] flex flex-col justify-between min-h-screen lg:min-h-auto">
          {/* Form Header */}
          <div className="flex justify-between items-center mb-16 lg:mb-[178px]">
            <p className="text-[20px] font-normal text-[#131417] leading-[20px] tracking-[-0.2px]">
              Use this form to describe your project
            </p>
            <button className="w-7 h-7 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 7L7 21M7 7L21 21" stroke="#131417" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8 lg:space-y-[68px]">
            {/* Name Row */}
            <div className="flex flex-wrap items-center gap-2 text-lg sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[28px] tracking-[-0.28px]">
              <span>Hi, my name is</span>
              <div className="flex flex-col">
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Harry Maguire"
                  className="bg-transparent border-none outline-none text-[#CDCDCD] placeholder-[#CDCDCD] min-w-[200px] lg:min-w-[343px]"
                />
                <div className="h-px bg-[#CDCDCD] mt-2"></div>
              </div>
              <span>You can answer</span>
            </div>

            {/* Email Row */}
            <div className="flex flex-wrap items-center gap-2 text-lg sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[28px] tracking-[-0.28px]">
              <span>me on this email</span>
              <div className="flex flex-col">
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="email@example.com"
                  className="bg-transparent border-none outline-none text-[#CDCDCD] placeholder-[#CDCDCD] min-w-[200px] lg:min-w-[365px]"
                />
                <div className="h-px bg-[#CDCDCD] mt-2"></div>
              </div>
              <span>I am looking</span>
            </div>

            {/* Project Row */}
            <div className="flex flex-wrap items-center gap-2 text-lg sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[28px] tracking-[-0.28px]">
              <span>for help with a</span>
              <div className="flex flex-col">
                <input
                  type="text"
                  value={formData.project}
                  onChange={(e) => handleInputChange('project', e.target.value)}
                  placeholder="website, design, etc"
                  className="bg-transparent border-none outline-none text-[#CDCDCD] placeholder-[#CDCDCD] min-w-[200px] lg:min-w-[356px]"
                />
                <div className="h-px bg-[#CDCDCD] mt-2"></div>
              </div>
              <span>My budget is £</span>
            </div>

            {/* Budget & Deadline Row */}
            <div className="flex flex-wrap items-center gap-2 text-lg sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[28px] tracking-[-0.28px]">
              <div className="flex flex-col">
                <input
                  type="text"
                  value={formData.budget}
                  onChange={(e) => handleInputChange('budget', e.target.value)}
                  placeholder="1000£"
                  className="bg-transparent border-none outline-none text-[#CDCDCD] placeholder-[#CDCDCD] min-w-[80px] lg:min-w-[145px]"
                />
                <div className="h-px bg-[#CDCDCD] mt-2"></div>
              </div>
              <span>and I need it done by</span>
              <div className="flex flex-col">
                <input
                  type="text"
                  value={formData.deadline}
                  onChange={(e) => handleInputChange('deadline', e.target.value)}
                  placeholder="May 31, 2023"
                  className="bg-transparent border-none outline-none text-[#CDCDCD] placeholder-[#CDCDCD] min-w-[120px] lg:min-w-[310px]"
                />
                <div className="h-px bg-[#CDCDCD] mt-2"></div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#131417] text-white px-5 py-3 rounded-[50px] text-[18px] font-medium leading-[20px] tracking-[-0.18px] hover:bg-[#1f2023] transition-colors"
            >
              Contact Us
            </button>
          </form>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4 lg:gap-[70px] pt-16 lg:pt-[80px] text-[18px] font-medium text-[#131417] leading-[18px] tracking-[-0.18px]">
            <a href="#" className="hover:text-[#9FA0A3] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#9FA0A3] transition-colors">Facebook</a>
            <a href="#" className="hover:text-[#9FA0A3] transition-colors">henry_james@mail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}
