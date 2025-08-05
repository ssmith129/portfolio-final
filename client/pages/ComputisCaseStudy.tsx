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
          <p className="text-xl sm:text-2xl lg:text-[28px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.28px] max-w-[900px] transition-all duration-300 hover:text-[#131417]">
            Transforming a backend crypto tax script into an enterprise-grade, CPA-first SaaS platform
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-[100px] pb-24 space-y-24">
        {/* TL;DR Summary */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-700">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                TL;DR Summary
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-[25px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                  <p className="text-[14px] font-medium text-[#9FA0A3] mb-2">Role</p>
                  <p className="text-[18px] font-medium text-[#131417]">Lead Product Designer</p>
                </div>
                <div className="bg-white p-6 rounded-[25px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                  <p className="text-[14px] font-medium text-[#9FA0A3] mb-2">Company</p>
                  <p className="text-[18px] font-medium text-[#131417]">Computis Inc.</p>
                </div>
                <div className="bg-white p-6 rounded-[25px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                  <p className="text-[14px] font-medium text-[#9FA0A3] mb-2">Type</p>
                  <p className="text-[18px] font-medium text-[#131417]">Crypto Tax Automation – B2B Enterprise SaaS</p>
                </div>
                <div className="bg-white p-6 rounded-[25px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                  <p className="text-[14px] font-medium text-[#9FA0A3] mb-2">Duration</p>
                  <p className="text-[18px] font-medium text-[#131417]">10 months</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-[25px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <p className="text-[14px] font-medium text-[#9FA0A3] mb-4">Tools & Team</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-[16px] font-medium text-[#131417] mb-2">Tools:</p>
                    <p className="text-[16px] text-[#131417]">Figma, Miro, Jira, Notion, Webflow, GA</p>
                  </div>
                  <div>
                    <p className="text-[16px] font-medium text-[#131417] mb-2">Team:</p>
                    <p className="text-[16px] text-[#131417]">CTO, PM, 2 Engineers, Selecto (Design/Dev Agency)</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-[25px] border border-green-200 hover:border-green-300 transition-all duration-300 hover:scale-[1.02]">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">✅ Outcomes</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">↓ 45%</span>
                    <span className="text-[16px] text-[#131417]">CPA onboarding time</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">↑ 32%</span>
                    <span className="text-[16px] text-[#131417]">demo-to-conversion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-600 font-bold">↓ 85%</span>
                    <span className="text-[16px] text-[#131417]">reliance on engineers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-600 font-bold">↑ 150%</span>
                    <span className="text-[16px] text-[#131417]">anomaly detection coverage</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-indigo-600 font-bold">📄 6</span>
                  <span className="text-[16px] text-[#131417]">core modules launched with full audit trail UX</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Context & Overview */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-900">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Context & Overview
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <p className="text-[20px] font-normal text-[#131417] leading-[150%] tracking-[-0.2px]">
                When I joined, Computis was a Python script tool that required devs to manually ingest crypto data and produce IRS forms.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-[25px] border border-red-200 transition-all duration-300 hover:border-red-300 hover:scale-[1.02]">
                  <p className="text-[18px] font-medium text-[#131417] mb-2">📉 Before:</p>
                  <p className="text-[16px] text-[#131417]">No UI, no classification logic for CPAs, and no audit-ready visibility.</p>
                </div>
                <div className="bg-green-50 p-6 rounded-[25px] border border-green-200 transition-all duration-300 hover:border-green-300 hover:scale-[1.02]">
                  <p className="text-[18px] font-medium text-[#131417] mb-2">📈 Opportunity:</p>
                  <p className="text-[16px] text-[#131417]">The IRS crackdown on crypto made demand for transparent tax tooling skyrocket.</p>
                </div>
              </div>
              <blockquote className="bg-[#131417] text-white p-8 rounded-[25px] italic text-[20px] leading-[150%] tracking-[-0.2px] transition-all duration-300 hover:scale-[1.02]">
                "We weren't just building a UI — we were replacing engineering dependence with user trust."
              </blockquote>
            </div>
          </div>
        </section>

        {/* My Role & Responsibilities */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1100">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                My Role & Responsibilities
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="bg-gray-50 p-6 rounded-[25px] transition-all duration-300 hover:bg-gray-100">
                <p className="text-[18px] font-medium text-[#131417] mb-4">Title: Lead Product Designer</p>
                <p className="text-[16px] font-medium text-[#131417] mb-3">Scope:</p>
                <ul className="space-y-2">
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    UX Strategy & Product Direction
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Stakeholder Interviews (CPAs, Analysts, CTO)
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Design System Architecture (WCAG 2.1 AA)
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Full UI Design: 30+ Screens + Edge Cases
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Developer Handoff + QA Workflows
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-[25px] border border-blue-200 transition-all duration-300 hover:border-blue-300 hover:scale-[1.02]">
                <h3 className="text-[18px] font-medium text-[#131417] mb-3">🤝 Cross-functional Coordination:</h3>
                <ul className="space-y-2">
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 flex-shrink-0"></span>
                    Held async Figma walkthroughs per module
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 flex-shrink-0"></span>
                