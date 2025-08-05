import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function ComputisCaseStudy() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("");

  const openModal = (imageSrc: string, title: string) => {
    setSelectedImage(imageSrc);
    setSelectedTitle(title);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedTitle("");
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  // Close modal on escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Navigation */}
      <nav className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[100px] py-4 sm:py-5 md:py-6 gap-4 md:gap-0 animate-in fade-in-0 slide-in-from-top-4 duration-700">
        <div className="flex flex-col">
          <h1 className="text-[20px] font-medium text-[#131417] leading-normal tracking-[-0.2px] transition-all duration-300 hover:tracking-[-0.1px]">
            Sean Smith
          </h1>
          <p className="text-[16px] font-medium text-[#9FA0A3] leading-normal tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
            San Francisco, CA
          </p>
        </div>

        <div className="bg-white rounded-[50px] p-[5px] flex items-center flex-wrap gap-1 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
          <Link
            to="/"
            className="text-[#131417] px-4 sm:px-[25px] py-[13px] text-sm sm:text-[18px] font-medium tracking-[-0.18px] hover:bg-gray-50 rounded-[50px] transition-all duration-300 hover:scale-105 hover:tracking-[-0.1px]"
          >
            Home
          </Link>
          <Link
            to="/case-studies"
            className="bg-[#131417] text-white px-4 sm:px-[25px] py-[13px] rounded-[50px] text-sm sm:text-[18px] font-medium tracking-[-0.18px] transition-all duration-300 hover:bg-[#2a2a2a] hover:scale-105"
          >
            Case Studies
          </Link>
          <Link
            to="/about"
            className="text-[#131417] px-4 sm:px-[25px] py-[13px] text-sm sm:text-[18px] font-medium tracking-[-0.18px] hover:bg-gray-50 rounded-[50px] transition-all duration-300 hover:scale-105 hover:tracking-[-0.1px]"
          >
            About
          </Link>
        </div>
      </nav>

      {/* Back Button */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-[100px] pt-8 animate-in fade-in-0 slide-in-from-left-4 duration-700 delay-300">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-[18px] font-medium text-[#9FA0A3] leading-normal tracking-[-0.18px] hover:text-[#131417] transition-all duration-300 hover:scale-105 group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Case Studies
        </Link>
      </div>

      {/* Hero Section */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-[100px] pt-16 pb-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-500">
        <div className="mb-8">
          <span className="inline-block bg-[#131417] text-white px-4 py-2 rounded-[25px] text-[14px] font-medium tracking-[-0.14px] mb-6 transition-all duration-300 hover:scale-105">
            UX Case Study
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-medium text-[#131417] leading-[120%] tracking-[-1.44px] mb-6 transition-all duration-500 hover:tracking-[-1.2px]">
            Computis – Crypto Tax Engine
          </h1>
          <p className="text-[18px] font-light text-[#131417] leading-[150%] tracking-[-0.18px] mb-12 max-w-3xl transition-colors duration-300 hover:text-[#2a2a2a]">
            I led the design of Computis, a comprehensive crypto tax engine that automates complex tax calculations for digital assets. The platform processes millions of transactions while maintaining accuracy and compliance across multiple jurisdictions.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-700">
          {/* One-Click Exports Card */}
          <div 
            className="relative overflow-hidden bg-white p-6 rounded-[20px] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:scale-[1.02] group"
            onClick={() => openModal("/One-click Exports.png", "One-Click Exports")}
          >
            <div className="relative overflow-hidden rounded-[12px] mb-4">
              <img 
                src="/One-click Exports.png" 
                alt="One-Click Exports" 
                className="w-full h-[200px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                <div className="p-4 sm:p-6 md:p-8">
                  <h3 className="text-white text-xl font-medium mb-1">One-Click Exports</h3>
                  <p className="text-white opacity-90 text-sm">Streamlined tax document generation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Rule Builder Card */}
          <div 
            className="relative overflow-hidden bg-white p-6 rounded-[20px] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:scale-[1.02] group"
            onClick={() => openModal("/Rule Builder copy.png", "Rule Builder")}
          >
            <div className="relative overflow-hidden rounded-[12px] mb-4">
              <img 
                src="/Rule Builder copy.png" 
                alt="Rule Builder" 
                className="w-full h-[200px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                <div className="p-4 sm:p-6 md:p-8">
                  <h3 className="text-white text-xl font-medium mb-1">Rule Builder</h3>
                  <p className="text-white opacity-90 text-sm">Custom transaction classification</p>
                </div>
              </div>
            </div>
          </div>

          {/* FMV Dashboard Card */}
          <div 
            className="relative overflow-hidden bg-white p-6 rounded-[20px] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:scale-[1.02] group"
            onClick={() => openModal("/Homepage Dashboard copy.png", "FMV Dashboard")}
          >
            <div className="relative overflow-hidden rounded-[12px] mb-4">
              <img 
                src="/Homepage Dashboard copy.png" 
                alt="FMV Dashboard" 
                className="w-full h-[200px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                <div className="p-4 sm:p-6 md:p-8">
                  <h3 className="text-white text-xl font-medium mb-1">FMV Dashboard</h3>
                  <p className="text-white opacity-90 text-sm">Fair market value tracking</p>
                </div>
              </div>
            </div>
          </div>

          {/* Anomaly Detection Card */}
          <div 
            className="relative overflow-hidden bg-white p-6 rounded-[20px] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:scale-[1.02] group"
            onClick={() => openModal("/Data Anomaly Detection.png", "Anomaly Detection")}
          >
            <div className="relative overflow-hidden rounded-[12px] mb-4">
              <img 
                src="/Data Anomaly Detection.png" 
                alt="Anomaly Detection" 
                className="w-full h-[200px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                <div className="p-4 sm:p-6 md:p-8">
                  <h3 className="text-white text-xl font-medium mb-1">Anomaly Detection</h3>
                  <p className="text-white opacity-90 text-sm">Automated error identification</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 animate-in fade-in-0 duration-300"
          onClick={closeModal}
        >
          <div className="relative max-w-6xl max-h-[90vh] overflow-hidden rounded-lg animate-in zoom-in-95 duration-300">
            <img 
              src="/Transactions Grid copy copy.png" 
              alt={selectedTitle}
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-200"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}