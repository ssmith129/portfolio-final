import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function EzEMRxCaseStudy() {
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
            ezEMRx – Public Health EHR Platform
          </h1>
          <p className="text-xl sm:text-2xl lg:text-[28px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.28px] max-w-[900px] transition-all duration-300 hover:text-[#131417]">
            Transforming a legacy EHR into an AI-augmented platform that boosts efficiency, compliance, and collaboration for clinics and health agencies.
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
                  <p className="text-[18px] font-medium text-[#131417]">Lead UX/Product Designer</p>
                </div>
                <div className="bg-white p-6 rounded-[25px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                  <p className="text-[14px] font-medium text-[#9FA0A3] mb-2">Company</p>
                  <p className="text-[18px] font-medium text-[#131417]">Custom Data Processing Inc.</p>
                </div>
                <div className="bg-white p-6 rounded-[25px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                  <p className="text-[14px] font-medium text-[#9FA0A3] mb-2">Type</p>
                  <p className="text-[18px] font-medium text-[#131417]">Public Health EHR</p>
                </div>
                <div className="bg-white p-6 rounded-[25px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                  <p className="text-[14px] font-medium text-[#9FA0A3] mb-2">Duration</p>
                  <p className="text-[18px] font-medium text-[#131417]">9 months</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-[25px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <p className="text-[14px] font-medium text-[#9FA0A3] mb-4">Tools & Team</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-[16px] font-medium text-[#131417] mb-2">Tools:</p>
                    <p className="text-[16px] text-[#131417]">Figma, Miro, Jira, Notion, Confluence</p>
                  </div>
                  <div>
                    <p className="text-[16px] font-medium text-[#131417] mb-2">Team:</p>
                    <p className="text-[16px] text-[#131417]">PM, AI Strategist, 3 Engineers, Clinical Informatics Lead</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <div className="bg-green-50 p-6 rounded-[25px] border border-green-200 hover:border-green-300 transition-all duration-300 hover:scale-[1.02]">
                  <p className="text-[24px] font-bold text-green-600 mb-2">↓ 20%</p>
                  <p className="text-[16px] font-medium text-[#131417]">Clinician documentation time</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-[25px] border border-blue-200 hover:border-blue-300 transition-all duration-300 hover:scale-[1.02]">
                  <p className="text-[24px] font-bold text-blue-600 mb-2">↑ 70%</p>
                  <p className="text-[16px] font-medium text-[#131417]">Compliance checklist pass rate</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-[25px] border border-purple-200 hover:border-purple-300 transition-all duration-300 hover:scale-[1.02]">
                  <p className="text-[24px] font-bold text-purple-600 mb-2">↑ 130%</p>
                  <p className="text-[16px] font-medium text-[#131417]">Shared case-notes volume</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                <div className="bg-orange-50 p-6 rounded-[25px] border border-orange-200 hover:border-orange-300 transition-all duration-300 hover:scale-[1.02]">
                  <p className="text-[24px] font-bold text-orange-600 mb-2">↓ 35%</p>
                  <p className="text-[16px] font-medium text-[#131417]">Referral processing time</p>
                </div>
                <div className="bg-indigo-50 p-6 rounded-[25px] border border-indigo-200 hover:border-indigo-300 transition-all duration-300 hover:scale-[1.02]">
                  <p className="text-[24px] font-bold text-indigo-600 mb-2">📄 5</p>
                  <p className="text-[16px] font-medium text-[#131417]">Modules launched with audit trails</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-900">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Project Overview
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <p className="text-[20px] font-normal text-[#131417] leading-[150%] tracking-[-0.2px]">
                ezEMRx was a legacy EHR used by WIC clinics, immunization sites, and local health departments—plagued by manual data entry, siloed notes, and compliance bottlenecks. We reimagined it as an AI-augmented, role-based platform that streamlines charting, audits, referrals, and collaboration in one unified interface.
              </p>
              <blockquote className="bg-[#131417] text-white p-8 rounded-[25px] italic text-[20px] leading-[150%] tracking-[-0.2px] transition-all duration-300 hover:scale-[1.02]">
                "We weren't just updating forms—we were embedding trust and efficiency into every workflow."
              </blockquote>
            </div>
          </div>
        </section>

        {/* My Role */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1100">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                My Role
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <ul className="space-y-3">
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Defined UX strategy, information architecture, and AI explainability flow
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Designed low- to high-fidelity screens and interactive AI prototypes in Figma
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Facilitated stakeholder workshops and multisite usability tests
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Built WCAG-compliant design system; delivered annotated redlines and QA specs
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Led dev handoff and iterative QA collaboration
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Problem & Opportunity */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1300">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Problem & Opportunity
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="bg-white rounded-[25px] p-6 shadow-sm hover:shadow-md transition-all duration-300 overflow-x-auto">
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">Problem</th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Manual, repetitive charting</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">↑ documentation time & error risk</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">No automated compliance checks</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Audit anxiety & regulatory risk</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Siloed case notes</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Poor cross-team collaboration</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Complex referral workflows</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Delayed patient care and follow-up</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-blue-50 p-6 rounded-[25px] border border-blue-200 transition-all duration-300 hover:border-blue-300 hover:scale-[1.02]">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">Design Opportunity:</h3>
                <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px]">
                  Create an AI-powered EHR that automates charting, simplifies compliance, and fosters seamless collaboration.
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
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">Methods:</h3>
                <ul className="space-y-2">
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    1:1 interviews with clinicians & program admins
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Workflow shadowing across five clinics
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Analytics review (GA, Mixpanel)
                  </li>
                  <li className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                    Prototype testing via Maze
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-[25px] p-6 shadow-sm hover:shadow-md transition-all duration-300 overflow-x-auto">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">Insights → Features:</h3>
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">Insight</th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">Design Response</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Charting fatigue from redundant forms</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Smart Charting: AI pre-fill with confidence badges</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Manual compliance audits</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">One-click audit drawer with color-coded checklist</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Notes siloed by department</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Collaborative case notes with threading & versioning</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Referral ambiguity</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Smart Referral Routing with contextual suggestions</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Market & Competitor Analysis */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1700">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Market & Competitor Analysis
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="bg-gray-50 p-6 rounded-[25px] transition-all duration-300 hover:bg-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-[18px] font-medium text-[#131417] mb-3">Users:</h3>
                    <p className="text-[16px] text-[#131417]">Clinicians, Program Administrators, Public Health Agencies</p>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-medium text-[#131417] mb-3">Trends:</h3>
                    <ul className="space-y-1">
                      <li className="text-[16px] text-[#131417] flex items-start gap-2">
                        <span className="w-1 h-1 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                        Shift toward interoperable, digital records
                      </li>
                      <li className="text-[16px] text-[#131417] flex items-start gap-2">
                        <span className="w-1 h-1 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                        Rising demand for AI-driven efficiency
                      </li>
                      <li className="text-[16px] text-[#131417] flex items-start gap-2">
                        <span className="w-1 h-1 bg-[#9FA0A3] rounded-full mt-2.5 flex-shrink-0"></span>
                        Increased regulatory and audit pressures
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[25px] p-6 shadow-sm hover:shadow-md transition-all duration-300 overflow-x-auto">
                <h3 className="text-[20px] font-medium text-[#131417] mb-4">Competitive Differentiator:</h3>
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">Feature</th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">ezEMRx (New)</th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">Legacy EHR</th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">Other Solutions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">AI Smart Charting</td>
                      <td className="py-4 px-4 text-green-600 text-[18px]">✅</td>
                      <td className="py-4 px-4 text-red-500 text-[18px]">❌</td>
                      <td className="py-4 px-4 text-yellow-500 text-[18px]">⚠</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Real-Time Compliance Audit</td>
                      <td className="py-4 px-4 text-green-600 text-[18px]">✅</td>
                      <td className="py-4 px-4 text-red-500 text-[18px]">❌</td>
                      <td className="py-4 px-4 text-yellow-500 text-[18px]">⚠</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Collaborative Case Notes</td>
                      <td className="py-4 px-4 text-green-600 text-[18px]">✅</td>
                      <td className="py-4 px-4 text-red-500 text-[18px]">❌</td>
                      <td className="py-4 px-4 text-yellow-500 text-[18px]">⚠</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Smart Referral Routing</td>
                      <td className="py-4 px-4 text-green-600 text-[18px]">✅</td>
                      <td className="py-4 px-4 text-red-500 text-[18px]">❌</td>
                      <td className="py-4 px-4 text-red-500 text-[18px]">❌</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Patient Timeline Overview</td>
                      <td className="py-4 px-4 text-green-600 text-[18px]">✅</td>
                      <td className="py-4 px-4 text-red-500 text-[18px]">❌</td>
                      <td className="py-4 px-4 text-red-500 text-[18px]">❌</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* User Flows */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1900">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                User Flows
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-blue-50 p-6 rounded-[25px] border border-blue-200 transition-all duration-300 hover:border-blue-300 hover:scale-[1.02]">
                  <h3 className="text-[20px] font-medium text-[#131417] mb-4">Claire (Clinician):</h3>
                  <p className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] mb-3">
                    <strong>Flow:</strong> Intake → Smart Charting → Compliance Audit → Referral Routing → Case Notes → Patient Timeline
                  </p>
                  <p className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px]">
                    <strong>Needs:</strong> AI pre-fill, real-time audit checks, and clear referral guidance.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-[25px] border border-green-200 transition-all duration-300 hover:border-green-300 hover:scale-[1.02]">
                  <h3 className="text-[20px] font-medium text-[#131417] mb-4">Mark (Program Admin):</h3>
                  <p className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px] mb-3">
                    <strong>Flow:</strong> Dashboard → Audit Overview → Notes Review → Reporting
                  </p>
                  <p className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px]">
                    <strong>Needs:</strong> High-level compliance insights and collaboration oversight.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Concepts */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2100">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Design Concepts
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <ul className="space-y-3">
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  AI-augmented charting with hover-to-explain confidence badges
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Transparent referral routing using patient context filters
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Color-coded audit drawer for instant compliance feedback
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Threaded, taggable case notes for real-time team collaboration
                </li>
              </ul>

              <div className="bg-[#131417] text-white p-8 rounded-[25px] transition-all duration-300 hover:scale-[1.02]">
                <h3 className="text-[20px] font-medium text-white mb-4">Design Principles:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-[18px] font-medium text-white">Clarity > Clutter</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[18px] font-medium text-white">Trust through Transparency</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[18px] font-medium text-white">Efficiency with AI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prototyping & System Design */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2300">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Prototyping & System Design
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <ul className="space-y-3">
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  5 modules & 25+ wireframes covering desktop and tablet
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Figma component library with WCAG 2.1 AA tokens
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  12-column responsive grid for desktop & tablet
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Interactive prototypes tested with 30 clinicians via Maze
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Core Features & UI */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2500">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Core Features & UI
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <div className="bg-white rounded-[25px] p-6 shadow-sm hover:shadow-md transition-all duration-300 overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">Module</th>
                      <th className="text-left py-4 px-4 text-[16px] font-medium text-[#131417]">Key Feature</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] font-medium text-[#131417]">Smart Charting</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">AI pre-fill fields with confidence badges & explain tooltips</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] font-medium text-[#131417]">Compliance Audit</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Real-time color-coded checklist drawer & PDF export</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] font-medium text-[#131417]">Collaborative Case Notes</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Threaded notes with tags, version history, and approval workflows</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] font-medium text-[#131417]">Smart Referral Routing</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Contextual suggestions based on condition, coverage, and location</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] font-medium text-[#131417]">Patient Timeline Overview</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Unified feed of visits, labs, immunizations, and notes for context</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Results & Impact */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2700">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Results & Impact
              </h2>
            </div>
            <div className="flex-1 space-y-8">
              <div className="bg-white rounded-[25px] p-6 shadow-sm hover:shadow-md transition-all duration-300 overflow-x-auto">
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
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Documentation Time</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">45 min/patient</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">36 min/patient</td>
                      <td className="py-4 px-4 text-[16px] font-medium text-green-600">↓ 20%</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Compliance Pass Rate</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">50%</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">85%</td>
                      <td className="py-4 px-4 text-[16px] font-medium text-blue-600">↑ 70%</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Case-Notes Shared Volume</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">1 share/note</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">2.3 shares/note</td>
                      <td className="py-4 px-4 text-[16px] font-medium text-purple-600">↑ 130%</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-300">
                      <td className="py-4 px-4 text-[16px] text-[#131417]">Referral Processing Time</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">20 hrs/week</td>
                      <td className="py-4 px-4 text-[16px] text-[#131417]">13 hrs/week</td>
                      <td className="py-4 px-4 text-[16px] font-medium text-orange-600">↓ 35%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-4">
                <blockquote className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-[25px] italic text-[18px] leading-[150%] tracking-[-0.18px] transition-all duration-300 hover:scale-[1.02]">
                  "ezEMRx feels intuitive—it knows what I need before I do."
                </blockquote>
                <blockquote className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-[25px] italic text-[18px] leading-[150%] tracking-[-0.18px] transition-all duration-300 hover:scale-[1.02]">
                  "The audit drawer saved me hours each week."
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Final Takeaways */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-2900">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px]">
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Final Takeaways
              </h2>
            </div>
            <div className="flex-1 space-y-6">
              <ul className="space-y-3">
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  AI transparency builds clinician trust
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Modular architecture scales across diverse agencies
                </li>
                <li className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] flex items-start gap-3 transition-all duration-300 hover:text-[#2a2a2a]">
                  <span className="w-2 h-2 bg-[#131417] rounded-full mt-3 flex-shrink-0"></span>
                  Human-in-the-loop automation reduces manual burden
                </li>
              </ul>

              <blockquote className="bg-[#131417] text-white p-8 rounded-[25px] italic text-[20px] leading-[150%] tracking-[-0.2px] transition-all duration-300 hover:scale-[1.02]">
                "Design is about empowering users, not replacing them."
              </blockquote>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-[#131417] text-white animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-3100">
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