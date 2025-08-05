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
          <p className="text-[20px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.2px] max-w-[800px] transition-colors duration-300 hover:text-[#131417]">
            A comprehensive cryptocurrency tax calculation platform that simplifies complex tax reporting for digital asset transactions.
          </p>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-[20px] p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
            <h3 className="text-[16px] font-medium text-[#9FA0A3] leading-normal tracking-[-0.16px] mb-2">
              Role
            </h3>
            <p className="text-[18px] font-medium text-[#131417] leading-normal tracking-[-0.18px]">
              Lead UX Designer
            </p>
          </div>
          <div className="bg-white rounded-[20px] p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
            <h3 className="text-[16px] font-medium text-[#9FA0A3] leading-normal tracking-[-0.16px] mb-2">
              Timeline
            </h3>
            <p className="text-[18px] font-medium text-[#131417] leading-normal tracking-[-0.18px]">
              6 months
            </p>
          </div>
          <div className="bg-white rounded-[20px] p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
            <h3 className="text-[16px] font-medium text-[#9FA0A3] leading-normal tracking-[-0.16px] mb-2">
              Team
            </h3>
            <p className="text-[18px] font-medium text-[#131417] leading-normal tracking-[-0.18px]">
              2 Designers, 4 Engineers
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="bg-white rounded-[20px] p-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:scale-[1.01]"
             onClick={() => openModal("/Computis Hero Image.png", "Computis Dashboard Overview")}>
          <img
            src="/Computis Hero Image.png"
            alt="Computis Dashboard Overview"
            className="w-full h-auto rounded-[12px]"
          />
        </div>
      </div>

      {/* Problem Statement */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-[100px] py-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
        <div className="max-w-[800px]">
          <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-medium text-[#131417] leading-[120%] tracking-[-1.12px] mb-8 transition-all duration-500 hover:tracking-[-0.9px]">
            The Problem
          </h2>
          <p className="text-[20px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.2px] mb-6 transition-colors duration-300 hover:text-[#131417]">
            Cryptocurrency traders and investors face significant challenges when calculating taxes on their digital asset transactions. The complexity of tracking multiple exchanges, DeFi protocols, and various transaction types creates a time-consuming and error-prone process.
          </p>
          <p className="text-[20px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.2px] transition-colors duration-300 hover:text-[#131417]">
            Existing solutions were either too basic for serious traders or too complex for casual investors, leaving a gap in the market for an intuitive yet comprehensive crypto tax platform.
          </p>
        </div>
      </div>

      {/* Research & Discovery */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-[100px] py-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
        <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-medium text-[#131417] leading-[120%] tracking-[-1.12px] mb-16 transition-all duration-500 hover:tracking-[-0.9px]">
          Research & Discovery
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-[24px] font-medium text-[#131417] leading-[130%] tracking-[-0.24px] mb-6 transition-all duration-300 hover:tracking-[-0.2px]">
              User Interviews
            </h3>
            <p className="text-[18px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.18px] mb-6 transition-colors duration-300 hover:text-[#131417]">
              We conducted 24 interviews with cryptocurrency traders, ranging from casual investors to professional traders. Key insights included:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#131417] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-[18px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.18px] transition-colors duration-300 hover:text-[#131417]">
                  85% found existing tax software confusing or incomplete
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#131417] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-[18px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.18px] transition-colors duration-300 hover:text-[#131417]">
                  Manual transaction tracking took 20+ hours per tax season
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#131417] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-[18px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.18px] transition-colors duration-300 hover:text-[#131417]">
                  DeFi transactions were the most challenging to categorize
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-[24px] font-medium text-[#131417] leading-[130%] tracking-[-0.24px] mb-6 transition-all duration-300 hover:tracking-[-0.2px]">
              Competitive Analysis
            </h3>
            <p className="text-[18px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.18px] mb-6 transition-colors duration-300 hover:text-[#131417]">
              Analysis of 8 existing crypto tax platforms revealed common pain points:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#131417] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-[18px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.18px] transition-colors duration-300 hover:text-[#131417]">
                  Poor data visualization and reporting clarity
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#131417] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-[18px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.18px] transition-colors duration-300 hover:text-[#131417]">
                  Limited exchange integrations and API connectivity
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#131417] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-[18px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.18px] transition-colors duration-300 hover:text-[#131417]">
                  Inconsistent transaction categorization logic
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Research Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-[20px] p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:scale-[1.01]"
               onClick={() => openModal("/User Journey Map.png", "User Journey Mapping")}>
            <img
              src="/User Journey Map.png"
              alt="User Journey Mapping"
              className="w-full h-auto rounded-[12px] mb-4"
            />
            <h4 className="text-[18px] font-medium text-[#131417] leading-normal tracking-[-0.18px] mb-2">
              User Journey Mapping
            </h4>
            <p className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px]">
              Comprehensive mapping of user touchpoints and pain points throughout the tax calculation process.
            </p>
          </div>
          
          <div className="bg-white rounded-[20px] p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:scale-[1.01]"
               onClick={() => openModal("/Competitive Analysis.png", "Competitive Analysis Framework")}>
            <img
              src="/Competitive Analysis.png"
              alt="Competitive Analysis Framework"
              className="w-full h-auto rounded-[12px] mb-4"
            />
            <h4 className="text-[18px] font-medium text-[#131417] leading-normal tracking-[-0.18px] mb-2">
              Competitive Analysis
            </h4>
            <p className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px]">
              Feature comparison and gap analysis of existing crypto tax platforms in the market.
            </p>
          </div>
        </div>
      </div>

      {/* Design Process */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-[100px] py-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
        <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-medium text-[#131417] leading-[120%] tracking-[-1.12px] mb-16 transition-all duration-500 hover:tracking-[-0.9px]">
          Design Process
        </h2>

        {/* Information Architecture */}
        <div className="mb-20">
          <h3 className="text-[32px] font-medium text-[#131417] leading-[130%] tracking-[-0.32px] mb-8 transition-all duration-300 hover:tracking-[-0.28px]">
            Information Architecture
          </h3>
          <p className="text-[18px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.18px] mb-8 max-w-[800px] transition-colors duration-300 hover:text-[#131417]">
            We restructured the information hierarchy to prioritize the most common user tasks while maintaining access to advanced features for power users.
          </p>
          
          <div className="bg-white rounded-[20px] p-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:scale-[1.01]"
               onClick={() => openModal("/Information Architecture.png", "Information Architecture Diagram")}>
            <img
              src="/Information Architecture.png"
              alt="Information Architecture Diagram"
              className="w-full h-auto rounded-[12px]"
            />
          </div>
        </div>

        {/* Wireframes */}
        <div className="mb-20">
          <h3 className="text-[32px] font-medium text-[#131417] leading-[130%] tracking-[-0.32px] mb-8 transition-all duration-300 hover:tracking-[-0.28px]">
            Wireframes & User Flow
          </h3>
          <p className="text-[18px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.18px] mb-8 max-w-[800px] transition-colors duration-300 hover:text-[#131417]">
            Low-fidelity wireframes helped us rapidly iterate on layout concepts and validate the user flow before moving to high-fidelity designs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[20px] p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:scale-[1.01]"
                 onClick={() => openModal("/Wireframes - Dashboard.png", "Dashboard Wireframes")}>
              <img
                src="/Wireframes - Dashboard.png"
                alt="Dashboard Wireframes"
                className="w-full h-auto rounded-[12px] mb-4"
              />
              <h4 className="text-[18px] font-medium text-[#131417] leading-normal tracking-[-0.18px] mb-2">
                Dashboard Wireframes
              </h4>
              <p className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px]">
                Initial layout concepts for the main dashboard interface.
              </p>
            </div>
            
            <div className="bg-white rounded-[20px] p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:scale-[1.01]"
                 onClick={() => openModal("/Wireframes - Transaction Flow.png", "Transaction Flow Wireframes")}>
              <img
                src="/Wireframes - Transaction Flow.png"
                alt="Transaction Flow Wireframes"
                className="w-full h-auto rounded-[12px] mb-4"
              />
              <h4 className="text-[18px] font-medium text-[#131417] leading-normal tracking-[-0.18px] mb-2">
                Transaction Flow
              </h4>
              <p className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px]">
                User flow for importing and categorizing transactions.
              </p>
            </div>
          </div>
        </div>

        {/* Design System */}
        <div>
          <h3 className="text-[32px] font-medium text-[#131417] leading-[130%] tracking-[-0.32px] mb-8 transition-all duration-300 hover:tracking-[-0.28px]">
            Design System
          </h3>
          <p className="text-[18px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.18px] mb-8 max-w-[800px] transition-colors duration-300 hover:text-[#131417]">
            A comprehensive design system was created to ensure consistency across all touchpoints and enable rapid scaling of the product.
          </p>
          
          <div className="bg-white rounded-[20px] p-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:scale-[1.01]"
               onClick={() => openModal("/Design System.png", "Computis Design System")}>
            <img
              src="/Design System.png"
              alt="Computis Design System"
              className="w-full h-auto rounded-[12px]"
            />
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-[100px] py-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
        <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-medium text-[#131417] leading-[120%] tracking-[-1.12px] mb-16 transition-all duration-500 hover:tracking-[-0.9px]">
          Key Features
        </h2>

        {/* Feature 1: Dashboard */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-[32px] font-medium text-[#131417] leading-[130%] tracking-[-0.32px] mb-6 transition-all duration-300 hover:tracking-[-0.28px]">
                Intelligent Dashboard
              </h3>
              <p className="text-[18px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.18px] mb-6 transition-colors duration-300 hover:text-[#131417]">
                A comprehensive overview that provides users with their tax liability at a glance, including real-time calculations and key metrics.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#131417] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
                    Real-time tax liability calculations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#131417] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
                    Portfolio performance tracking
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#131417] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
                    Actionable insights and recommendations
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:scale-[1.01]"
                 onClick={() => openModal("/Dashboard Feature.png", "Intelligent Dashboard Interface")}>
              <img
                src="/Dashboard Feature.png"
                alt="Intelligent Dashboard Interface"
                className="w-full h-auto rounded-[12px]"
              />
            </div>
          </div>
        </div>

        {/* Feature 2: Transaction Management */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-2 lg:order-1 bg-white rounded-[20px] p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:scale-[1.01]"
                 onClick={() => openModal("/Transaction Management.png", "Advanced Transaction Management")}>
              <img
                src="/Transaction Management.png"
                alt="Advanced Transaction Management"
                className="w-full h-auto rounded-[12px]"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-[32px] font-medium text-[#131417] leading-[130%] tracking-[-0.32px] mb-6 transition-all duration-300 hover:tracking-[-0.28px]">
                Smart Transaction Processing
              </h3>
              <p className="text-[18px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.18px] mb-6 transition-colors duration-300 hover:text-[#131417]">
                Automated transaction import and intelligent categorization that learns from user behavior to improve accuracy over time.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#131417] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
                    50+ exchange integrations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#131417] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
                    AI-powered transaction categorization
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#131417] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
                    DeFi protocol support
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Feature 3: Reporting */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-[32px] font-medium text-[#131417] leading-[130%] tracking-[-0.32px] mb-6 transition-all duration-300 hover:tracking-[-0.28px]">
                Comprehensive Reporting
              </h3>
              <p className="text-[18px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.18px] mb-6 transition-colors duration-300 hover:text-[#131417]">
                Generate detailed tax reports compatible with major tax software and accounting platforms, with support for multiple jurisdictions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#131417] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
                    IRS Form 8949 generation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#131417] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
                    Multi-jurisdiction support
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#131417] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
                    TurboTax & H&R Block integration
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-[20px] p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:scale-[1.01]"
                 onClick={() => openModal("/Reporting Feature.png", "Comprehensive Tax Reporting")}>
              <img
                src="/Reporting Feature.png"
                alt="Comprehensive Tax Reporting"
                className="w-full h-auto rounded-[12px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Design Challenges & Solutions */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-[100px] py-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
        <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-medium text-[#131417] leading-[120%] tracking-[-1.12px] mb-16 transition-all duration-500 hover:tracking-[-0.9px]">
          Design Challenges & Solutions
        </h2>

        <div className="space-y-16">
          {/* Challenge 1 */}
          <div className="bg-white rounded-[20px] p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-[24px] font-medium text-[#131417] leading-[130%] tracking-[-0.24px] mb-4 transition-all duration-300 hover:tracking-[-0.2px]">
                  Challenge: Complex Data Visualization
                </h3>
                <p className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] mb-4 transition-colors duration-300 hover:text-[#131417]">
                  Users needed to understand complex tax calculations and transaction categorizations without being overwhelmed by technical details.
                </p>
                <h4 className="text-[18px] font-medium text-[#131417] leading-normal tracking-[-0.18px] mb-3">
                  Solution:
                </h4>
                <p className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
                  Implemented progressive disclosure with summary views that expand into detailed breakdowns. Used color coding and visual hierarchy to make complex information digestible.
                </p>
              </div>
              <div className="cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                   onClick={() => openModal("/Data Visualization Solution.png", "Complex Data Visualization Solution")}>
                <img
                  src="/Data Visualization Solution.png"
                  alt="Complex Data Visualization Solution"
                  className="w-full h-auto rounded-[12px]"
                />
              </div>
            </div>
          </div>

          {/* Challenge 2 */}
          <div className="bg-white rounded-[20px] p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="order-2 lg:order-1 cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                   onClick={() => openModal("/Transaction Categorization.png", "Intelligent Transaction Categorization")}>
                <img
                  src="/Transaction Categorization.png"
                  alt="Intelligent Transaction Categorization"
                  className="w-full h-auto rounded-[12px]"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-[24px] font-medium text-[#131417] leading-[130%] tracking-[-0.24px] mb-4 transition-all duration-300 hover:tracking-[-0.2px]">
                  Challenge: Transaction Categorization
                </h3>
                <p className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] mb-4 transition-colors duration-300 hover:text-[#131417]">
                  Different transaction types (trades, DeFi, staking, etc.) required different tax treatments, but users often struggled with proper categorization.
                </p>
                <h4 className="text-[18px] font-medium text-[#131417] leading-normal tracking-[-0.18px] mb-3">
                  Solution:
                </h4>
                <p className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
                  Created an intelligent categorization system with contextual help, visual examples, and machine learning that improves accuracy based on user corrections.
                </p>
              </div>
            </div>
          </div>

          {/* Challenge 3 */}
          <div className="bg-white rounded-[20px] p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-[24px] font-medium text-[#131417] leading-[130%] tracking-[-0.24px] mb-4 transition-all duration-300 hover:tracking-[-0.2px]">
                  Challenge: Multi-Platform Consistency
                </h3>
                <p className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] mb-4 transition-colors duration-300 hover:text-[#131417]">
                  Users needed access across desktop, tablet, and mobile devices with consistent functionality and data synchronization.
                </p>
                <h4 className="text-[18px] font-medium text-[#131417] leading-normal tracking-[-0.18px] mb-3">
                  Solution:
                </h4>
                <p className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
                  Developed a responsive design system with adaptive layouts that prioritize key functions on smaller screens while maintaining full feature access.
                </p>
              </div>
              <div className="cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                   onClick={() => openModal("/Responsive Design.png", "Multi-Platform Responsive Design")}>
                <img
                  src="/Responsive Design.png"
                  alt="Multi-Platform Responsive Design"
                  className="w-full h-auto rounded-[12px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testing & Validation */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-[100px] py-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
        <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-medium text-[#131417] leading-[120%] tracking-[-1.12px] mb-16 transition-all duration-500 hover:tracking-[-0.9px]">
          Testing & Validation
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-[24px] font-medium text-[#131417] leading-[130%] tracking-[-0.24px] mb-6 transition-all duration-300 hover:tracking-[-0.2px]">
              Usability Testing
            </h3>
            <p className="text-[18px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.18px] mb-6 transition-colors duration-300 hover:text-[#131417]">
              Conducted multiple rounds of usability testing with 32 participants across different user segments.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#131417] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
                  Task completion rate improved from 68% to 94%
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#131417] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
                  Average time to complete tax report reduced by 75%
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#131417] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
                  User satisfaction score: 4.7/5.0
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-[24px] font-medium text-[#131417] leading-[130%] tracking-[-0.24px] mb-6 transition-all duration-300 hover:tracking-[-0.2px]">
              A/B Testing Results
            </h3>
            <p className="text-[18px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.18px] mb-6 transition-colors duration-300 hover:text-[#131417]">
              Tested key interface elements and user flows to optimize conversion and engagement.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#131417] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
                  Onboarding completion increased by 43%
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#131417] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
                  Feature discovery improved by 38%
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#131417] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
                  User retention at 30 days: 78%
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Testing Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-[20px] p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:scale-[1.01]"
               onClick={() => openModal("/Usability Testing.png", "Usability Testing Sessions")}>
            <img
              src="/Usability Testing.png"
              alt="Usability Testing Sessions"
              className="w-full h-auto rounded-[12px] mb-4"
            />
            <h4 className="text-[18px] font-medium text-[#131417] leading-normal tracking-[-0.18px] mb-2">
              Usability Testing
            </h4>
            <p className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px]">
              Remote and in-person testing sessions with diverse user groups.
            </p>
          </div>
          
          <div className="bg-white rounded-[20px] p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:scale-[1.01]"
               onClick={() => openModal("/A-B Testing Results.png", "A/B Testing Analytics")}>
            <img
              src="/A-B Testing Results.png"
              alt="A/B Testing Analytics"
              className="w-full h-auto rounded-[12px] mb-4"
            />
            <h4 className="text-[18px] font-medium text-[#131417] leading-normal tracking-[-0.18px] mb-2">
              A/B Testing Analytics
            </h4>
            <p className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px]">
              Data-driven insights from interface optimization experiments.
            </p>
          </div>
        </div>
      </div>

      {/* Final Designs */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-[100px] py-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
        <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-medium text-[#131417] leading-[120%] tracking-[-1.12px] mb-16 transition-all duration-500 hover:tracking-[-0.9px]">
          Final Designs
        </h2>

        <div className="space-y-12">
          {/* Main Dashboard */}
          <div className="bg-white rounded-[20px] p-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:scale-[1.01]"
               onClick={() => openModal("/Final - Dashboard.png", "Final Dashboard Design")}>
            <img
              src="/Final - Dashboard.png"
              alt="Final Dashboard Design"
              className="w-full h-auto rounded-[12px] mb-6"
            />
            <h3 className="text-[24px] font-medium text-[#131417] leading-[130%] tracking-[-0.24px] mb-3 transition-all duration-300 hover:tracking-[-0.2px]">
              Main Dashboard
            </h3>
            <p className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
              Clean, intuitive interface that provides immediate insights into tax liability and portfolio performance.
            </p>
          </div>

          {/* Transaction Grid */}
          <div className="bg-white rounded-[20px] p-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:scale-[1.01]"
               onClick={() => openModal("/Transactions Grid copy copy.png", "Transaction Processing - Comprehensive Grid View")}>
            <img
              src="/Transactions Grid copy copy.png"
              alt="Transaction Processing - Comprehensive Grid View"
              className="w-full h-auto rounded-[12px] mb-6"
            />
            <h3 className="text-[24px] font-medium text-[#131417] leading-[130%] tracking-[-0.24px] mb-3 transition-all duration-300 hover:tracking-[-0.2px]">
              Transaction Management
            </h3>
            <p className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
              Comprehensive grid view for managing and categorizing cryptocurrency transactions with advanced filtering and search capabilities.
            </p>
          </div>

          {/* Tax Reports */}
          <div className="bg-white rounded-[20px] p-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:scale-[1.01]"
               onClick={() => openModal("/Final - Tax Reports.png", "Tax Reports Interface")}>
            <img
              src="/Final - Tax Reports.png"
              alt="Tax Reports Interface"
              className="w-full h-auto rounded-[12px] mb-6"
            />
            <h3 className="text-[24px] font-medium text-[#131417] leading-[130%] tracking-[-0.24px] mb-3 transition-all duration-300 hover:tracking-[-0.2px]">
              Tax Reports
            </h3>
            <p className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
              Professional tax reporting interface with export capabilities and integration with popular tax software.
            </p>
          </div>

          {/* Mobile Experience */}
          <div className="bg-white rounded-[20px] p-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:scale-[1.01]"
               onClick={() => openModal("/Final - Mobile.png", "Mobile Experience")}>
            <img
              src="/Final - Mobile.png"
              alt="Mobile Experience"
              className="w-full h-auto rounded-[12px] mb-6"
            />
            <h3 className="text-[24px] font-medium text-[#131417] leading-[130%] tracking-[-0.24px] mb-3 transition-all duration-300 hover:tracking-[-0.2px]">
              Mobile Experience
            </h3>
            <p className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
              Fully responsive mobile interface optimized for on-the-go transaction monitoring and tax planning.
            </p>
          </div>
        </div>
      </div>

      {/* Results & Impact */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-[100px] py-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
        <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-medium text-[#131417] leading-[120%] tracking-[-1.12px] mb-16 transition-all duration-500 hover:tracking-[-0.9px]">
          Results & Impact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-[20px] p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] text-center">
            <div className="text-[48px] font-medium text-[#131417] leading-none tracking-[-0.96px] mb-2">
              94%
            </div>
            <p className="text-[16px] font-medium text-[#9FA0A3] leading-normal tracking-[-0.16px]">
              Task Completion Rate
            </p>
          </div>
          
          <div className="bg-white rounded-[20px] p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] text-center">
            <div className="text-[48px] font-medium text-[#131417] leading-none tracking-[-0.96px] mb-2">
              75%
            </div>
            <p className="text-[16px] font-medium text-[#9FA0A3] leading-normal tracking-[-0.16px]">
              Time Reduction
            </p>
          </div>
          
          <div className="bg-white rounded-[20px] p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] text-center">
            <div className="text-[48px] font-medium text-[#131417] leading-none tracking-[-0.96px] mb-2">
              4.7
            </div>
            <p className="text-[16px] font-medium text-[#9FA0A3] leading-normal tracking-[-0.16px]">
              User Satisfaction
            </p>
          </div>
          
          <div className="bg-white rounded-[20px] p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] text-center">
            <div className="text-[48px] font-medium text-[#131417] leading-none tracking-[-0.96px] mb-2">
              78%
            </div>
            <p className="text-[16px] font-medium text-[#9FA0A3] leading-normal tracking-[-0.16px]">
              30-Day Retention
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-[24px] font-medium text-[#131417] leading-[130%] tracking-[-0.24px] mb-6 transition-all duration-300 hover:tracking-[-0.2px]">
              Business Impact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#131417] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
                  <strong className="text-[#131417]">250% increase</strong> in user onboarding completion
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#131417] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
                  <strong className="text-[#131417]">180% growth</strong> in monthly active users
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#131417] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
                  <strong className="text-[#131417]">65% reduction</strong> in customer support tickets
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#131417] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
                  <strong className="text-[#131417]">$2.3M ARR</strong> achieved within 8 months of launch
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-[24px] font-medium text-[#131417] leading-[130%] tracking-[-0.24px] mb-6 transition-all duration-300 hover:tracking-[-0.2px]">
              User Experience Improvements
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#131417] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
                  Average tax report generation time reduced from <strong className="text-[#131417]">4 hours to 45 minutes</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#131417] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
                  Transaction categorization accuracy improved to <strong className="text-[#131417]">96%</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#131417] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
                  User error rate decreased by <strong className="text-[#131417]">82%</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#131417] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
                  Mobile usage increased to <strong className="text-[#131417]">45%</strong> of total sessions
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Key Learnings */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-[100px] py-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
        <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-medium text-[#131417] leading-[120%] tracking-[-1.12px] mb-16 transition-all duration-500 hover:tracking-[-0.9px]">
          Key Learnings
        </h2>

        <div className="space-y-8">
          <div className="bg-white rounded-[20px] p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-[24px] font-medium text-[#131417] leading-[130%] tracking-[-0.24px] mb-4 transition-all duration-300 hover:tracking-[-0.2px]">
              Progressive Disclosure is Critical for Complex Products
            </h3>
            <p className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
              Users needed access to detailed information without being overwhelmed. Implementing progressive disclosure with clear information hierarchy significantly improved user comprehension and task completion rates.
            </p>
          </div>

          <div className="bg-white rounded-[20px] p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-[24px] font-medium text-[#131417] leading-[130%] tracking-[-0.24px] mb-4 transition-all duration-300 hover:tracking-[-0.2px]">
              Context-Aware Help Reduces Support Burden
            </h3>
            <p className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
              Providing contextual help and examples at the point of need dramatically reduced user confusion and support tickets. Users appreciated having guidance without leaving their workflow.
            </p>
          </div>

          <div className="bg-white rounded-[20px] p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-[24px] font-medium text-[#131417] leading-[130%] tracking-[-0.24px] mb-4 transition-all duration-300 hover:tracking-[-0.2px]">
              Trust is Built Through Transparency
            </h3>
            <p className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
              For financial products, showing users exactly how calculations are made and allowing them to verify results builds confidence. Transparency features became some of our most valued by users.
            </p>
          </div>

          <div className="bg-white rounded-[20px] p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-[24px] font-medium text-[#131417] leading-[130%] tracking-[-0.24px] mb-4 transition-all duration-300 hover:tracking-[-0.2px]">
              Mobile-First Approach Pays Off
            </h3>
            <p className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] transition-colors duration-300 hover:text-[#131417]">
              Despite initial assumptions that users would primarily use desktop for tax calculations, mobile usage grew to 45% of sessions. Designing mobile-first ensured all features were accessible across devices.
            </p>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-[100px] py-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
        <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-medium text-[#131417] leading-[120%] tracking-[-1.12px] mb-16 transition-all duration-500 hover:tracking-[-0.9px]">
          Next Steps
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-[20px] p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-[24px] font-medium text-[#131417] leading-[130%] tracking-[-0.24px] mb-4 transition-all duration-300 hover:tracking-[-0.2px]">
              Advanced Analytics Dashboard
            </h3>
            <p className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] mb-4 transition-colors duration-300 hover:text-[#131417]">
              Developing predictive analytics features to help users optimize their tax strategies throughout the year, not just at tax time.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-[14px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.14px]">
                  Tax loss harvesting recommendations
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-[14px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.14px]">
                  Quarterly tax liability projections
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-[14px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.14px]">
                  Portfolio optimization insights
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-[20px] p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-[24px] font-medium text-[#131417] leading-[130%] tracking-[-0.24px] mb-4 transition-all duration-300 hover:tracking-[-0.2px]">
              International Expansion
            </h3>
            <p className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] mb-4 transition-colors duration-300 hover:text-[#131417]">
              Expanding support for international tax jurisdictions and regulations to serve the global crypto community.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-[14px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.14px]">
                  UK and EU tax compliance
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-[14px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.14px]">
                  Multi-currency support
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-[14px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.14px]">
                  Localized user experiences
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-[100px] py-24 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000">
        <div className="bg-[#131417] rounded-[20px] p-12 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-medium text-white leading-[120%] tracking-[-0.96px] mb-6 transition-all duration-500 hover:tracking-[-0.8px]">
            Interested in working together?
          </h2>
          <p className="text-[18px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.18px] mb-8 max-w-[600px] mx-auto">
            I'm always excited to take on new challenges and create meaningful user experiences. Let's discuss your next project.
          </p>
          <Link
            to="/about"
            className="inline-block bg-white text-[#131417] px-8 py-4 rounded-[50px] text-[18px] font-medium tracking-[-0.18px] transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-[90vw] max-h-[90vh] flex flex-col">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 transition-colors duration-200 z-10"
            >
              ✕
            </button>
            {selectedTitle && (
              <h3 className="text-white text-lg font-medium mb-4 text-center">
                {selectedTitle}
              </h3>
            )}
            <div className="flex items-center justify-center">
              <img
                src={selectedImage}
                alt={selectedTitle}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}