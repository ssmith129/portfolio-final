import { Link } from "react-router-dom";

export default function About() {
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
          <Link to="/" className="text-[#131417] px-4 sm:px-[25px] py-[13px] text-sm sm:text-[18px] font-medium tracking-[-0.18px] hover:bg-gray-50 rounded-[50px] transition-colors">
            Home
          </Link>
          <Link to="/case-studies" className="text-[#131417] px-4 sm:px-[25px] py-[13px] text-sm sm:text-[18px] font-medium tracking-[-0.18px] hover:bg-gray-50 rounded-[50px] transition-colors">
            Case Studies
          </Link>
          <div className="bg-[#131417] text-white px-4 sm:px-[25px] py-[13px] rounded-[50px] text-sm sm:text-[18px] font-medium tracking-[-0.18px]">
            About
          </div>
          <Link to="/contacts" className="text-[#131417] px-4 sm:px-[25px] py-[13px] text-sm sm:text-[18px] font-medium tracking-[-0.18px] hover:bg-gray-50 rounded-[50px] transition-colors">
            Contacts
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-[100px] py-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-[94px] font-medium text-[#131417] leading-[120%] tracking-[-1.88px] mb-8">
            About
          </h1>
          <p className="text-lg sm:text-[20px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.2px] max-w-[600px] mx-auto">
            This page is currently being developed. Please continue prompting to fill in the content for this page.
          </p>
        </div>
      </div>
    </div>
  );
}
