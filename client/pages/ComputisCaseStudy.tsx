import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function ComputisCaseStudy() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Navigation */}
      <nav className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-8 lg:px-[100px] py-6 max-w-[1920px] mx-auto gap-4 md:gap-0 animate-in fade-in-0 slide-in-from-top-4 duration-700">
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
          <Link
            to="/contacts"
            className="text-[#131417] px-4 sm:px-[25px] py-[13px] text-sm sm:text-[18px] font-medium tracking-[-0.18px] hover:bg-gray-50 rounded-[50px] transition-all duration-300 hover:scale-105 hover:tracking-[-0.1px]"
          >
            Contacts
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
                    Wrote detailed component behavior annotations
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 flex-shrink-0"></span>
                    Created handoff bundles linked to Jira epics
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 flex-shrink-0"></span>
                    Ran weekly QA validation alongside engineers
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement & Opportunity */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1300">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Problem Statement & Opportunity
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="bg-white rounded-[25px] p-6 shadow-sm hover:shadow-md transition-all duration-300 overflow-x-auto">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">Initial State</h3>
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">Pain Point</th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">Consequence</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">No UI</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">CPAs couldn't self-serve</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Hardcoded rules</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Engineers had to triage all data</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">No audit trail</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">IRS compliance risk</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">No FMV diagnostics</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Frequent data mismatches</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">CSV-only exports</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Manual work for QBO</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 p-6 rounded-[25px] border border-blue-200 transition-all duration-300 hover:border-blue-300 hover:scale-[1.02]">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">🔁 Reframed Opportunity:</h3>
                <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] mb-4">
                  This wasn't just a UI problem — it was a control handoff problem.
                </p>
                <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px]">
                  We needed to shift trust from developers to CPAs by exposing logic, version history, and override control.
                </p>
              </div>

              <blockquote className="bg-[#131417] text-white p-8 rounded-[25px] italic text-[20px] leading-[150%] tracking-[-0.2px] transition-all duration-300 hover:scale-[1.02]">
                <p className="text-[16px] font-medium text-[#9FA0A3] mb-2">🎯 Design North Star:</p>
                "Enable any CPA to confidently explain their crypto tax report to a regulator — without needing a developer."
              </blockquote>
            </div>
          </div>
        </section>

        {/* Process & Timeline Section */}
        <section className="flex flex-col lg:flex-row gap-8 lg:gap-[440px] animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-1300">
          <div className="w-full lg:w-[200px]">
            <p className="text-[18px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.18px] transition-all duration-300 hover:text-[#131417]">
              Process & Timeline
            </p>
          </div>

          <div className="flex-1 space-y-8 lg:space-y-[50px]">
            {/* Timeline Title */}
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px] mb-4 transition-all duration-300 hover:tracking-[-0.2px]">
                10-Month Development Cycle
              </h3>
              <p className="text-[18px] font-normal text-[#131417] leading-[28px] tracking-[-0.18px] max-w-[600px] transition-all duration-300 hover:text-[#2a2a2a]">
                A comprehensive approach to rebuilding Computis's crypto tax automation platform with enhanced user experience and regulatory compliance.
              </p>
            </div>

            {/* Timeline Chart */}
            <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
              {/* Month Headers */}
              <div className="flex justify-between mb-4 text-sm text-[#9FA0A3] font-medium">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((month) => (
                  <div key={month} className="flex-1 text-center">
                    M{month}
                  </div>
                ))}
              </div>

              {/* Timeline Bars */}
              <div className="space-y-3">
                {/* Discovery - Month 1 */}
                <div className="relative h-8 bg-gray-50 rounded-md overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-blue-500 rounded-md transition-all duration-500 hover:bg-blue-600"
                    style={{ width: '10%' }}
                  ></div>
                  <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-xs font-medium text-white">
                    Discovery
                  </span>
                </div>

                {/* Define - Month 2 */}
                <div className="relative h-8 bg-gray-50 rounded-md overflow-hidden">
                  <div 
                    className="absolute top-0 h-full bg-green-500 rounded-md transition-all duration-500 hover:bg-green-600"
                    style={{ left: '10%', width: '10%' }}
                  ></div>
                  <span className="absolute left-[12%] top-1/2 transform -translate-y-1/2 text-xs font-medium text-white">
                    Define
                  </span>
                </div>

                {/* Design - Months 3-6 */}
                <div className="relative h-8 bg-gray-50 rounded-md overflow-hidden">
                  <div 
                    className="absolute top-0 h-full bg-purple-500 rounded-md transition-all duration-500 hover:bg-purple-600"
                    style={{ left: '20%', width: '40%' }}
                  ></div>
                  <span className="absolute left-[35%] top-1/2 transform -translate-y-1/2 text-xs font-medium text-white">
                    Design
                  </span>
                </div>

                {/* Validate - Months 5-7 */}
                <div className="relative h-8 bg-gray-50 rounded-md overflow-hidden">
                  <div 
                    className="absolute top-0 h-full bg-orange-500 rounded-md transition-all duration-500 hover:bg-orange-600"
                    style={{ left: '40%', width: '30%' }}
                  ></div>
                  <span className="absolute left-[50%] top-1/2 transform -translate-y-1/2 text-xs font-medium text-white">
                    Validate
                  </span>
                </div>

                {/* Delivery - Months 7-10 */}
                <div className="relative h-8 bg-gray-50 rounded-md overflow-hidden">
                  <div 
                    className="absolute top-0 h-full bg-red-500 rounded-md transition-all duration-500 hover:bg-red-600"
                    style={{ left: '60%', width: '40%' }}
                  ></div>
                  <span className="absolute left-[75%] top-1/2 transform -translate-y-1/2 text-xs font-medium text-white">
                    Delivery
                  </span>
                </div>
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-4 mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  <span className="text-sm text-[#131417]">Discovery</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="text-sm text-[#131417]">Define</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-purple-500 rounded"></div>
                  <span className="text-sm text-[#131417]">Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-orange-500 rounded"></div>
                  <span className="text-sm text-[#131417]">Validate</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded"></div>
                  <span className="text-sm text-[#131417]">Delivery</span>
                </div>
              </div>
            </div>

            {/* Phase Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Discovery Phase */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg transition-all duration-300 hover:shadow-md hover:scale-105">
                <h4 className="font-medium text-[#131417] mb-2">Discovery (Month 1)</h4>
                <p className="text-sm text-[#9FA0A3] leading-relaxed">
                  User research, stakeholder interviews, and competitive analysis to understand crypto tax complexity.
                </p>
              </div>

              {/* Define Phase */}
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg transition-all duration-300 hover:shadow-md hover:scale-105">
                <h4 className="font-medium text-[#131417] mb-2">Define (Month 2)</h4>
                <p className="text-sm text-[#9FA0A3] leading-relaxed">
                  Problem definition, user personas, and technical requirements for automated tax reporting.
                </p>
              </div>

              {/* Design Phase */}
              <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg transition-all duration-300 hover:shadow-md hover:scale-105">
                <h4 className="font-medium text-[#131417] mb-2">Design (Months 3-6)</h4>
                <p className="text-sm text-[#9FA0A3] leading-relaxed">
                  UI/UX design, prototyping, and system architecture for scalable crypto tax automation.
                </p>
              </div>

              {/* Validate Phase */}
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg transition-all duration-300 hover:shadow-md hover:scale-105">
                <h4 className="font-medium text-[#131417] mb-2">Validate (Months 5-7)</h4>
                <p className="text-sm text-[#9FA0A3] leading-relaxed">
                  User testing with CPAs and crypto traders to validate compliance and usability.
                </p>
              </div>

              {/* Delivery Phase */}
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg transition-all duration-300 hover:shadow-md hover:scale-105">
                <h4 className="font-medium text-[#131417] mb-2">Delivery (Months 7-10)</h4>
                <p className="text-sm text-[#9FA0A3] leading-relaxed">
                  Development, testing, and deployment of the production-ready crypto tax platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Research & Insights */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1500">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Research & Insights
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="bg-gray-50 p-6 rounded-[25px] transition-all duration-300 hover:bg-gray-100">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">Methods Used:</h3>
                <ul className="space-y-2">
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    1:1 interviews with CPAs and Ops Analysts
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Workflow shadowing of ingestion → audit exports
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    GA + Mixpanel analysis
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Competitor UX teardown (TaxBit, Cryptio, CoinTracker)
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-[25px] p-6 shadow-sm hover:shadow-md transition-all duration-300 overflow-x-auto">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">💡 Key Insights:</h3>
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">Insight</th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">Design Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">CPAs distrust automation</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Add AI confidence badges + override tools</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Analysts lack upload diagnostics</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Build ingestion preview + error flagging</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Teams want visibility</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Enable audit logs and tagging workflows</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">FMV reconciliation is manual</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Create anomaly dashboards and severity indicators</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Market & Competitive Analysis */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1700">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Market & Competitive Analysis
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="bg-gray-50 p-6 rounded-[25px] transition-all duration-300 hover:bg-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-[18px] font-medium text-[#131417] mb-3">Target Segments:</h3>
                    <ul className="space-y-1">
                      <li className="text-[16px] text-[#131417] flex items-start gap-2">
                        <span className="w-1 h-1 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                        CPA Firms & Crypto Accounting Pros
                      </li>
                      <li className="text-[16px] text-[#131417] flex items-start gap-2">
                        <span className="w-1 h-1 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                        DAO Treasurers
                      </li>
                      <li className="text-[16px] text-[#131417] flex items-start gap-2">
                        <span className="w-1 h-1 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                        Crypto Hedge Funds
                      </li>
                      <li className="text-[16px] text-[#131417] flex items-start gap-2">
                        <span className="w-1 h-1 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                        Exchanges & Aggregators
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-medium text-[#131417] mb-3">Trend Signals:</h3>
                    <ul className="space-y-1">
                      <li className="text-[16px] text-[#131417] flex items-start gap-2">
                        <span className="w-1 h-1 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                        IRS scrutiny is increasing
                      </li>
                      <li className="text-[16px] text-[#131417] flex items-start gap-2">
                        <span className="w-1 h-1 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                        CPAs want override logic — not hidden AI
                      </li>
                      <li className="text-[16px] text-[#131417] flex items-start gap-2">
                        <span className="w-1 h-1 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                        Bulk data ingestion is a bottleneck
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[25px] p-6 shadow-sm hover:shadow-md transition-all duration-300 overflow-x-auto">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">Competitive Matrix:</h3>
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">Feature</th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">Computis</th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">TaxBit</th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">Cryptio</th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">CoinTracker</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Rule Engine</td>
                      <td className="py-4 px-4 text-green-600 text-[18px]">✅</td>
                      <td className="py-4 px-4 text-red-500 text-[18px]">❌</td>
                      <td className="py-4 px-4 text-red-500 text-[18px]">❌</td>
                      <td className="py-4 px-4 text-red-500 text-[18px]">❌</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">AI Confidence Scores</td>
                      <td className="py-4 px-4 text-green-600 text-[18px]">✅</td>
                      <td className="py-4 px-4 text-green-600 text-[18px]">✅</td>
                      <td className="py-4 px-4 text-yellow-500 text-[18px]">⚠</td>
                      <td className="py-4 px-4 text-red-500 text-[18px]">❌</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Audit Logs</td>
                      <td className="py-4 px-4 text-green-600 text-[18px]">✅</td>
                      <td className="py-4 px-4 text-green-600 text-[18px]">✅</td>
                      <td className="py-4 px-4 text-yellow-500 text-[18px]">⚠</td>
                      <td className="py-4 px-4 text-red-500 text-[18px]">❌</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Bulk Tagging</td>
                      <td className="py-4 px-4 text-green-600 text-[18px]">✅</td>
                      <td className="py-4 px-4 text-red-500 text-[18px]">❌</td>
                      <td className="py-4 px-4 text-red-500 text-[18px]">❌</td>
                      <td className="py-4 px-4 text-yellow-500 text-[18px]">⚠</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">QuickBooks Exports</td>
                      <td className="py-4 px-4 text-green-600 text-[18px]">✅</td>
                      <td className="py-4 px-4 text-yellow-500 text-[18px]">⚠</td>
                      <td className="py-4 px-4 text-green-600 text-[18px]">✅</td>
                      <td className="py-4 px-4 text-yellow-500 text-[18px]">⚠</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 p-6 rounded-[25px] border border-blue-200 transition-all duration-300 hover:border-blue-300 hover:scale-[1.02]">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">🧠 Differentiator:</h3>
                <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px]">
                  Computis was the only platform with a drag-and-drop rule engine, AI transparency, audit logs, and FMV dashboards — all built into a modular, white-labeled interface.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* User Flows & Journey Mapping */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1900">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                User Flows & Journey Mapping
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-blue-50 p-6 rounded-[25px] border border-blue-200 transition-all duration-300 hover:border-blue-300 hover:scale-[1.02]">
                  <h3 className="text-[20px] font-medium text-[#131417] mb-4">David (CPA):</h3>
                  <p className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px]">
                    → Upload → Classify (Rule Builder) → Review (AI Chips) → Export (IRS/QBO) → Audit
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-[25px] border border-green-200 transition-all duration-300 hover:border-green-300 hover:scale-[1.02]">
                  <h3 className="text-[20px] font-medium text-[#131417] mb-4">Mya (Analyst):</h3>
                  <p className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px]">
                    → Ingest Wallets → Check Anomalies → Tag Transactions → Mark Reviewed
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-[25px] p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">🔍 UX Frictions Solved:</h3>
                <ul className="space-y-3">
                  <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                    Lack of feedback → Introduced step-based upload & status chips
                  </li>
                  <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                    No version control → Inline audit trail
                  </li>
                  <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                    Manual classification → AI + Bulk rules
                  </li>
                  <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                    No ingestion diagnostics → Schema validation preview
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Ideation & Concepting */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2100">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Ideation & Concepting
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="bg-gray-50 p-6 rounded-[25px] transition-all duration-300 hover:bg-gray-100">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">Design Concepts Explored:</h3>
                <ul className="space-y-2">
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Glass-box AI interface (vs. black-box)
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Rule preview sandbox with before/after logic
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Tooltip-on-hover for explainability
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Status indicators for classification trust
                  </li>
                </ul>
              </div>

              <div className="bg-[#131417] text-white p-8 rounded-[25px] transition-all duration-300 hover:scale-[1.02]">
                <h3 className="text-[20px] font-medium text-white mb-4">💡 Design Principles:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-[18px] font-medium text-white">Trust = Transparency</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[18px] font-medium text-white">Control {'>'} Automation</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[18px] font-medium text-white">Progressive Disclosure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wireframes & Prototyping */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2300">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Wireframes & Prototyping
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <ul className="space-y-3">
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Low–Mid Fidelity wireframes for all 6 modules
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Component-driven UI with atomic architecture
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Edge case flows (FMV missing, duplicate txs, empty uploads)
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Prototypes tested via Maze + moderated sessions
                </li>
              </ul>

              <div className="bg-blue-50 p-6 rounded-[25px] border border-blue-200 transition-all duration-300 hover:border-blue-300 hover:scale-[1.02]">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">✅ Design System:</h3>
                <ul className="space-y-2">
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 flex-shrink-0"></span>
                    Based on Ant Design 5.0
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 flex-shrink-0"></span>
                    WCAG 2.1 AA compliant
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 flex-shrink-0"></span>
                    Responsive 1440px grid + tokenized variables
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final Designs & Outcome */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2500">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Final Designs & Outcome
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="bg-white rounded-[25px] p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">🧩 Core Modules:</h3>
                <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] mb-4">
                  Clients → Wallets → Transactions → Rules → Reports → Exports
                </p>
                
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">🚀 Core Features Delivered:</h3>
                <ul className="space-y-3">
                  <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                    Smart Upload Mapping + Error Flagging
                  </li>
                  <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                    Visual Rule Builder + Sandbox
                  </li>
                  <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                    AI Confidence Chips + Override UI
                  </li>
                  <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                    FMV Dashboard + Anomaly Detection
                  </li>
                  <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                    Audit-Ready Exports (IRS 8949, QBO, CSV)
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-6 rounded-[25px] border border-purple-200 transition-all duration-300 hover:border-purple-300 hover:scale-[1.02]">
                  <h4 className="text-[18px] font-medium text-[#131417] mb-2">Classification Grid</h4>
                  <p className="text-[16px] text-[#131417]">w/ AI confidence</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-[25px] border border-orange-200 transition-all duration-300 hover:border-orange-300 hover:scale-[1.02]">
                  <h4 className="text-[18px] font-medium text-[#131417] mb-2">Rule Builder</h4>
                  <p className="text-[16px] text-[#131417]">Drag-Drop UI</p>
                </div>
                <div className="bg-red-50 p-6 rounded-[25px] border border-red-200 transition-all duration-300 hover:border-red-300 hover:scale-[1.02]">
                  <h4 className="text-[18px] font-medium text-[#131417] mb-2">FMV Dashboard</h4>
                  <p className="text-[16px] text-[#131417]">w/ Red-Yellow-Gray Flags</p>
                </div>
                <div className="bg-teal-50 p-6 rounded-[25px] border border-teal-200 transition-all duration-300 hover:border-teal-300 hover:scale-[1.02]">
                  <h4 className="text-[18px] font-medium text-[#131417] mb-2">Audit Log</h4>
                  <p className="text-[16px] text-[#131417]">Timeline Drawer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results, Learnings & Next Steps */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2700">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Results, Learnings & Next Steps
              </h2>
            </div>
            <div className="flex-1 space-y-8">
              <div className="bg-white rounded-[25px] p-6 shadow-sm hover:shadow-md transition-all duration-300 overflow-x-auto">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">📊 Outcomes:</h3>
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">Metric</th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">Before</th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">After</th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">CPA Onboarding Time</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">2.5h</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">1.4h</td>
                      <td className="py-4 px-4 text-[16px] font-medium text-green-600">↓ 45%</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Bounce Rate</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">26%</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">8%</td>
                      <td className="py-4 px-4 text-[16px] font-medium text-green-600">↓ 18%</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Demo Conversions</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">–</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">↑ 32%</td>
                      <td className="py-4 px-4 text-[16px] font-medium text-blue-600">↑</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Dev Dependency</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">100%</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">15%</td>
                      <td className="py-4 px-4 text-[16px] font-medium text-purple-600">↓ 85%</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Anomaly Coverage</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Baseline</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">↑ 150%</td>
                      <td className="py-4 px-4 text-[16px] font-medium text-orange-600">↑</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-4">
                <h3 className="text-[20px] font-medium text-[#131417]">💬 Stakeholder Feedback:</h3>
                <blockquote className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-[25px] italic text-[18px] leading-[150%] tracking-[-0.18px] transition-all duration-300 hover:scale-[1.02]">
                  "Finally feels like a product we can sell to institutions."
                </blockquote>
                <blockquote className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-[25px] italic text-[18px] leading-[150%] tracking-[-0.18px] transition-all duration-300 hover:scale-[1.02]">
                  "AI helped us work faster — without giving up control."
                </blockquote>
              </div>

              <div className="bg-gray-50 p-6 rounded-[25px] transition-all duration-300 hover:bg-gray-100">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">📍 What I'd Improve:</h3>
                <ul className="space-y-2">
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Build deeper permission tiers
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Layer on LLM-backed transaction labeling
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Expand multi-entity white-label dashboards
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-[#131417] text-white animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2900">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-[100px] py-16 lg:py-[134px]">
          {/* Footer Header */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-16 lg:mb-[270px] gap-4 sm:gap-0">
            <span className="text-[18px] font-medium leading-[20px] tracking-[-0.18px] transition-all duration-300 hover:text-[#9FA0A3] hover:tracking-[-0.1px]">
              Portfolio 2023 - 2024
            </span>
            <span className="text-[20px] font-semibold leading-[20px] tracking-[-0.2px] transition-all duration-300 hover:tracking-[-0.1px] hover:scale-105">
              Sean Smith
            </span>
            <span className="text-[18px] font-medium leading-[20px] tracking-[-0.18px] text-center sm:text-right transition-all duration-300 hover:text-[#9FA0A3] hover:tracking-[-0.1px]">
              37.7749° N, 122.4194° W
            </span>
          </div>

          {/* Get in Touch */}
          <div className="text-center mb-16 lg:mb-[270px]">
            <p className="text-[18px] font-medium text-[#9FA0A3] leading-[20px] tracking-[-0.18px] mb-[20px] transition-all duration-300 hover:text-white">
              Have a nice project?
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-[72px] font-medium leading-[72px] tracking-[-0.72px] transition-all duration-500 hover:tracking-[-0.5px] hover:scale-105 cursor-pointer">
              Get in Touch
            </h2>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0">
            <span className="text-[18px] font-medium leading-[18px] tracking-[-0.18px] order-3 lg:order-1 transition-all duration-300 hover:text-[#9FA0A3]">
              © All rights reserved.
            </span>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-[44px] order-1 lg:order-2">
              <a
                href="#"
                className="text-lg sm:text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-110 hover:tracking-[-0.1px]"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-lg sm:text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-110 hover:tracking-[-0.1px]"
              >
                Behance
              </a>
              <a
                href="#"
                className="text-lg sm:text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-110 hover:tracking-[-0.1px]"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-lg sm:text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-110 hover:tracking-[-0.1px]"
              >
                Dribble
              </a>
            </div>

            <div className="flex gap-4 sm:gap-8 lg:gap-[40px] order-2 lg:order-3">
              <a
                href="#"
                className="text-[18px] font-medium leading-[18px] tracking-[-0.18px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-105"
              >
                License
              </a>
              <a
                href="#"
                className="text-[18px] font-medium leading-[18px] tracking-[-0.18px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-105"
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