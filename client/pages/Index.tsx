import { Link } from "react-router-dom";
import { useState } from "react";
import { Mail, Phone, MapPin, Calendar, Briefcase, GraduationCap, Award, Zap } from "lucide-react";

export default function Index() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

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
          <div className="bg-[#131417] text-white px-4 sm:px-[25px] py-[13px] rounded-[50px] text-sm sm:text-[18px] font-medium tracking-[-0.18px] transition-all duration-300 hover:bg-[#2a2a2a] hover:scale-105">
            Resume
          </div>
          <Link
            to="/case-studies"
            className="text-[#131417] px-4 sm:px-[25px] py-[13px] text-sm sm:text-[18px] font-medium tracking-[-0.18px] hover:bg-gray-50 rounded-[50px] transition-all duration-300 hover:scale-105 hover:tracking-[-0.1px]"
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

      {/* Main Content */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-[100px] space-y-16 pb-16">
        {/* Hero Section */}
        <section className="text-center pt-8 animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-300">
          <h1 className="text-4xl sm:text-6xl lg:text-[94px] font-medium text-[#131417] leading-[120%] tracking-[-1.88px] mb-8 transition-all duration-500 hover:tracking-[-1.5px]">
            Senior Product Designer
          </h1>
          <p className="text-lg sm:text-xl font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.2px] max-w-4xl mx-auto transition-all duration-300 hover:text-[#131417]">
            Data-Rich Enterprise Tools & AI-Enhanced UX specialist with 6+ years crafting intuitive, scalable solutions for complex SaaS and enterprise platforms. Expert in turning technical requirements into impactful product experiences across fintech, operations, and compliance domains.
          </p>
        </section>

        {/* Contact Info */}
        <section className="flex flex-wrap justify-center gap-6 animate-in fade-in-0 slide-in-from-bottom-6 duration-800 delay-500">
          <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-[25px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
            <Mail className="w-5 h-5 text-[#9FA0A3]" />
            <span className="text-[16px] font-medium text-[#131417] tracking-[-0.16px]">smith.design530@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-[25px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
            <Phone className="w-5 h-5 text-[#9FA0A3]" />
            <span className="text-[16px] font-medium text-[#131417] tracking-[-0.16px]">+1 530 601 1038</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-[25px] shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
            <MapPin className="w-5 h-5 text-[#9FA0A3]" />
            <span className="text-[16px] font-medium text-[#131417] tracking-[-0.16px]">San Francisco, CA</span>
          </div>
        </section>

        {/* Experience Section */}
        <section 
          className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-700"
          onMouseEnter={() => setHoveredSection('experience')}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px] flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-[#131417]" />
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Experience
              </h2>
            </div>
            <div className="flex-1 space-y-8">
              {/* Current Role */}
              <div className={`bg-white rounded-[25px] p-8 shadow-sm transition-all duration-500 ${hoveredSection === 'experience' ? 'shadow-xl scale-[1.02]' : 'hover:shadow-md hover:scale-[1.01]'}`}>
                <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-[20px] font-medium text-[#131417] leading-[120%] tracking-[-0.2px] mb-1">
                      Senior Product Designer
                    </h3>
                    <p className="text-[18px] font-normal text-[#9FA0A3] leading-[130%] tracking-[-0.18px]">
                      Custom Data Processing, Inc.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 bg-[#131417] text-white px-4 py-2 rounded-[15px]">
                    <Calendar className="w-4 h-4" />
                    <span className="text-[14px] font-medium">Aug 2023 - Present</span>
                  </div>
                </div>
                <ul className="space-y-3 text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px]">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-2.5 flex-shrink-0"></span>
                    Led design across enterprise reporting platforms and internal tools using real-time visualizations and role-based automation
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-2.5 flex-shrink-0"></span>
                    Delivered a 30% increase in operational efficiency through AI-powered dashboards and task automation
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-2.5 flex-shrink-0"></span>
                    Partnered with GTM, product, and engineering to build scalable UX systems used across multiple regulated tools
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-2.5 flex-shrink-0"></span>
                    Introduced modular onboarding and permissions UX for complex user hierarchies
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-2.5 flex-shrink-0"></span>
                    Supported onboarding and permissions workflows with user-friendly access flows and modular layouts
                  </li>
                </ul>
              </div>

              {/* Previous Role */}
              <div className={`bg-white rounded-[25px] p-8 shadow-sm transition-all duration-500 ${hoveredSection === 'experience' ? 'shadow-xl scale-[1.02]' : 'hover:shadow-md hover:scale-[1.01]'}`}>
                <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-[20px] font-medium text-[#131417] leading-[120%] tracking-[-0.2px] mb-1">
                      Founding Product Designer
                    </h3>
                    <p className="text-[18px] font-normal text-[#9FA0A3] leading-[130%] tracking-[-0.18px]">
                      Computis
                    </p>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-100 text-[#131417] px-4 py-2 rounded-[15px]">
                    <Calendar className="w-4 h-4" />
                    <span className="text-[14px] font-medium">Aug 2018 - Aug 2023</span>
                  </div>
                </div>
                <ul className="space-y-3 text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px]">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-2.5 flex-shrink-0"></span>
                    Designed crypto tax automation flows reducing accounting time by 40%, scaling compliance UX for global financial teams
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-2.5 flex-shrink-0"></span>
                    Built foundational UI/UX systems and brand identity from the ground up, supporting 0-1 platform growth
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-2.5 flex-shrink-0"></span>
                    Designed multi-role workflows, dashboards, and approval chains to support quote-to-cash processes
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-[#131417] rounded-full mt-2.5 flex-shrink-0"></span>
                    Collaborated with founders to iterate rapidly and define product-market fit through continuous user feedback
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section 
          className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-900"
          onMouseEnter={() => setHoveredSection('education')}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px] flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-[#131417]" />
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Education
              </h2>
            </div>
            <div className="flex-1">
              <div className={`bg-white rounded-[25px] p-8 shadow-sm transition-all duration-500 ${hoveredSection === 'education' ? 'shadow-xl scale-[1.02]' : 'hover:shadow-md hover:scale-[1.01]'}`}>
                <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-[20px] font-medium text-[#131417] leading-[120%] tracking-[-0.2px] mb-1">
                      M.S. - Human-Computer Interaction
                    </h3>
                    <p className="text-[18px] font-normal text-[#9FA0A3] leading-[130%] tracking-[-0.18px]">
                      San Francisco State University
                    </p>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-100 text-[#131417] px-4 py-2 rounded-[15px]">
                    <Calendar className="w-4 h-4" />
                    <span className="text-[14px] font-medium">Jul 2013 - Apr 2018</span>
                  </div>
                </div>
                <p className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px]">
                  Focused on user-centered design methodologies, interaction design principles, and human factors in technology. 
                  Specialized in enterprise software usability and data visualization design.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section 
          className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1100"
          onMouseEnter={() => setHoveredSection('skills')}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px] flex items-center gap-3">
              <Zap className="w-6 h-6 text-[#131417]" />
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Core Skills
              </h2>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: "B2B SaaS & Workflow Design", tags: ["Enterprise UX", "Data Dashboards", "Automation"] },
                  { title: "AI-Enhanced Interfaces & Automation", tags: ["ML Integration", "Intelligent UI", "Predictive Design"] },
                  { title: "Design Systems & Scalable UI", tags: ["Component Libraries", "Design Tokens", "Responsive Design"] },
                  { title: "UX Research", tags: ["User Testing", "Journey Mapping", "A/B Testing"] },
                  { title: "Collaboration & Strategy", tags: ["Cross-functional", "Product Strategy", "Stakeholder Alignment"] },
                  { title: "Technical Fluency", tags: ["Figma", "React Handoff", "API Understanding"] }
                ].map((skill, index) => (
                  <div 
                    key={index}
                    className={`bg-white rounded-[20px] p-6 shadow-sm transition-all duration-500 ${hoveredSection === 'skills' ? 'shadow-md scale-[1.02]' : 'hover:shadow-md hover:scale-[1.01]'}`}
                  >
                    <h3 className="text-[16px] font-medium text-[#131417] leading-[120%] tracking-[-0.16px] mb-3">
                      {skill.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="bg-[#F5F5F5] text-[#9FA0A3] px-3 py-1 rounded-[10px] text-[12px] font-medium tracking-[-0.12px] transition-all duration-300 hover:bg-[#131417] hover:text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Achievements */}
        <section 
          className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1300"
          onMouseEnter={() => setHoveredSection('achievements')}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[200px]">
            <div className="w-full lg:w-[200px] flex items-center gap-3">
              <Award className="w-6 h-6 text-[#131417]" />
              <h2 className="text-[24px] font-medium text-[#131417] leading-[120%] tracking-[-0.24px] transition-all duration-300 hover:tracking-[-0.2px]">
                Key Impact
              </h2>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    metric: "• $5M+",
                    description: "Integrated generative AI into enterprise platforms, contributing to $5M+ in additional revenue",
                    color: "bg-green-50 border-green-200"
                  },
                  {
                    metric: "• 30%",
                    description: "Delivered a 30% increase in operational efficiency through AI-powered dashboards and task automation",
                    color: "bg-blue-50 border-blue-200"
                  },
                  {
                    metric: "• 40%", 
                    description: "Designed crypto tax automation flows reducing accounting time by 40%, scaling compliance UX",
                    color: "bg-purple-50 border-purple-200"
                  },
                  {
                    metric: "• 0-1",
                    description: "Led 0-1 product design efforts from visual identity to interactive UX systems",
                    color: "bg-orange-50 border-orange-200"
                  }
                ].map((achievement, index) => (
                  <div 
                    key={index}
                    className={`${achievement.color} border rounded-[20px] p-6 transition-all duration-500 ${hoveredSection === 'achievements' ? 'scale-[1.02] shadow-md' : 'hover:scale-[1.01] hover:shadow-sm'}`}
                  >
                    <h3 className="text-[18px] font-bold text-[#131417] leading-[120%] tracking-[-0.18px] mb-2">
                      {achievement.metric}
                    </h3>
                    <p className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px]">
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Preview */}
        <section className="animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1500">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-medium text-[#131417] leading-[120%] tracking-[-0.96px] mb-4 transition-all duration-500 hover:tracking-[-0.8px]">
              Featured Work
            </h2>
            <p className="text-[18px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.18px] max-w-[600px] mx-auto">
              Explore detailed case studies showcasing my approach to complex enterprise UX challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Link
              to="/case-studies/computis-crypto-tax-engine"
              className="group block bg-white rounded-[25px] lg:rounded-[35px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-purple-50 p-8 lg:p-12 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50 group-hover:from-blue-200/50 group-hover:to-purple-200/50 transition-all duration-500"></div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[#131417] rounded-[20px] mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-medium text-[#131417] mb-2 group-hover:tracking-[-0.5px] transition-all duration-300">
                    Computis
                  </h3>
                  <p className="text-[16px] font-medium text-[#9FA0A3] group-hover:text-[#131417] transition-colors duration-300">
                    Crypto Tax Engine
                  </p>
                </div>
              </div>
              <div className="p-6 lg:p-8">
                <p className="text-[16px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.16px] group-hover:text-[#131417] transition-colors duration-300">
                  Enterprise SaaS platform for automated crypto tax compliance
                </p>
              </div>
            </Link>

            <Link
              to="/case-studies"
              className="group block bg-[#131417] text-white rounded-[25px] lg:rounded-[35px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="aspect-[4/3] p-8 lg:p-12 flex items-center justify-center relative overflow-hidden">
                <div className="text-center">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/10 rounded-[20px] mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-8 h-8 lg:w-10 lg:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-medium mb-2 group-hover:tracking-[-0.5px] transition-all duration-300">
                    View All Projects
                  </h3>
                  <p className="text-[16px] font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    Explore Complete Portfolio
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-[#131417] text-white animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 delay-1700">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-[100px] py-16 lg:py-[134px]">
          {/* Get in Touch */}
          <div className="text-center mb-16 lg:mb-[270px] animate-in fade-in-0 zoom-in-95 duration-1000 delay-1900">
            <p className="text-[18px] font-medium text-[#9FA0A3] leading-[20px] tracking-[-0.18px] mb-[20px] transition-all duration-300 hover:text-white">
              Ready to collaborate?
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-[72px] font-medium leading-[72px] tracking-[-0.72px] transition-all duration-500 hover:tracking-[-0.5px] hover:scale-105 cursor-pointer">
              Let's Connect
            </h2>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-2100">
            <span className="text-[18px] font-medium leading-[18px] tracking-[-0.18px] order-3 lg:order-1 transition-all duration-300 hover:text-[#9FA0A3]">
              © All rights reserved.
            </span>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-[44px] order-1 lg:order-2">
              <a
                href="#"
                className="text-lg sm:text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-110 hover:tracking-[-0.1px]"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-lg sm:text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-110 hover:tracking-[-0.1px]"
              >
                Portfolio
              </a>
              <a
                href="#"
                className="text-lg sm:text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-110 hover:tracking-[-0.1px]"
              >
                Email
              </a>
            </div>

            <div className="flex gap-4 sm:gap-8 lg:gap-[40px] order-2 lg:order-3">
              <a
                href="#"
                className="text-[18px] font-medium leading-[18px] tracking-[-0.18px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-105"
              >
                Resume PDF
              </a>
              <a
                href="#"
                className="text-[18px] font-medium leading-[18px] tracking-[-0.18px] hover:text-[#9FA0A3] transition-all duration-300 hover:scale-105"
              >
                References
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}