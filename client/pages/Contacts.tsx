import { Link } from "react-router-dom";

export default function Contacts() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-[100px] py-6 max-w-[1920px] mx-auto">
        <div className="flex flex-col">
          <h1 className="text-[20px] font-medium text-[#131417] leading-normal tracking-[-0.2px]">
            Sean Smith
          </h1>
          <p className="text-[16px] font-medium text-[#9FA0A3] leading-normal tracking-[-0.16px]">
            San Francisco, CA
          </p>
        </div>
        
        <div className="bg-white rounded-[50px] p-[5px] flex items-center">
          <Link to="/" className="text-[#131417] px-[25px] py-[13px] text-[18px] font-medium tracking-[-0.18px] hover:bg-gray-50 rounded-[50px] transition-colors">
            Home
          </Link>
          <Link to="/case-studies" className="text-[#131417] px-[25px] py-[13px] text-[18px] font-medium tracking-[-0.18px] hover:bg-gray-50 rounded-[50px] transition-colors">
            Case Studies
          </Link>
          <Link to="/about" className="text-[#131417] px-[25px] py-[13px] text-[18px] font-medium tracking-[-0.18px] hover:bg-gray-50 rounded-[50px] transition-colors">
            About
          </Link>
          <div className="bg-[#131417] text-white px-[25px] py-[13px] rounded-[50px] text-[18px] font-medium tracking-[-0.18px]">
            Contacts
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-[1920px] mx-auto px-[100px] py-16">
        <div className="text-center">
          <h1 className="text-[94px] font-medium text-[#131417] leading-[120%] tracking-[-1.88px] mb-8">
            Contacts
          </h1>
          <p className="text-[20px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.2px] max-w-[600px] mx-auto">
            This page is currently being developed. Please continue prompting to fill in the content for this page.
          </p>
        </div>
      </div>
    </div>
  );
}
