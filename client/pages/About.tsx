import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Navigation */}
      <nav className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-8 lg:px-[100px] py-6 max-w-[1920px] mx-auto gap-4 md:gap-0">
        <div className="flex flex-col">
          <h1 className="text-[20px] font-medium text-[#131417] leading-normal tracking-[-0.2px]">
            Henry James
          </h1>
          <p className="text-[16px] font-medium text-[#9FA0A3] leading-normal tracking-[-0.16px]">
            London, England
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

      {/* Header */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-[100px] pt-16 lg:pt-[150px]">
        <h1 className="text-2xl sm:text-4xl lg:text-[48px] font-normal text-[#131417] leading-[150%] tracking-[-0.96px] max-w-[1720px] mb-16 lg:mb-[160px]">
          Hi, I'm Henry James. I am a developer based in London, UK focused on creating interactive digital experiences on the web, working with brands and industry leaders such as DISNEY, Volkswagen, Rag & Bone, and Knight Frank amongst others to achieve this. Have been working in the development industry for over a decade.
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-[100px] pb-16 space-y-16 lg:space-y-[150px]">
        
        {/* About Section */}
        <section className="flex flex-col lg:flex-row gap-8 lg:gap-[440px]">
          {/* Left Content */}
          <div className="w-full lg:w-[162px] space-y-8 lg:space-y-[100px]">
            {/* Clients */}
            <div>
              <p className="text-[18px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.18px] mb-6">
                Some of the clients:
              </p>
              <div className="space-y-[5px]">
                <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px]">Rag & Bone</p>
                <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px]">Aimfox</p>
                <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px]">Disney</p>
                <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px]">Knight Frank</p>
                <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px]">Volkswagen</p>
              </div>
            </div>

            {/* Hard Skills */}
            <div>
              <p className="text-[18px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.18px] mb-6">
                Hard Skills
              </p>
              <div className="space-y-[5px]">
                <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px]">Figma</p>
                <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px]">After Effects</p>
                <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px]">ProtoPie</p>
                <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px]">Webflow</p>
                <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px]">Photoshop</p>
                <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px]">Illustrator</p>
                <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px]">ES6 Scripts</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 space-y-8">
            {/* Heading with highlighted words */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-2 text-2xl sm:text-[32px] font-normal text-[#131417] leading-[32px] tracking-[-0.32px]">
                <span>Passion for Design: From</span>
                <span className="border border-[#131417] rounded-[50px] px-5 py-2">
                  Startups
                </span>
                <span>to</span>
                <span className="border border-[#131417] rounded-[50px] px-5 py-2">
                  Corporations
                </span>
                <span>, My Journey So Far.</span>
              </div>
            </div>

            {/* Paragraphs */}
            <div className="space-y-8">
              <p className="text-lg sm:text-[20px] font-normal text-[#131417] leading-[150%] tracking-[-0.2px]">
                I hold a Bachelor's degree in Graphic Design and have been working in the design industry for over a decade. During this time, I have honed my skills in design principles, user experience, and front-end development. I'm proficient in design tools such as Adobe Creative Suite, Sketch, Adobe Xd and Figma, and have a deep understanding of front-end development languages like HTML, CSS, JavaScript & different types of frameworks.
              </p>

              <p className="text-lg sm:text-[20px] font-normal text-[#131417] leading-[150%] tracking-[-0.2px]">
                My passion for development & design started when I was young, and I have pursued this passion by working with a variety of clients and projects over the years. I have worked with startups, small businesses, and large corporations, creating user interfaces & front-end development for websites, software applications, and mobile apps.
              </p>

              <p className="text-lg sm:text-[20px] font-normal text-[#131417] leading-[150%] tracking-[-0.2px]">
                As a Senior Developer & UI Designer, my focus is on creating engaging and intuitive user interfaces that provide an exceptional user experience. I believe that design should be user-centric, and my approach to design reflects this belief. I work closely with my clients to understand their users' needs, conduct user research, and create wireframes and prototypes to ensure that the final design meets both user and business goals and also focus on developing.
              </p>

              <p className="text-lg sm:text-[20px] font-normal text-[#131417] leading-[150%] tracking-[-0.2px]">
                In my spare time, I enjoy exploring new design trends and technologies, attending design conferences and workshops, and sharing my knowledge with the design community. And also trying to learn more frameworks and libraries of javascripts like react.js, next.js, three.js or GSAP etc. I'm always excited to collaborate on new projects and would love to hear from you. Please feel free to get in touch if you have any questions or if you'd like to work together.
              </p>
            </div>

            {/* Image */}
            <div className="mt-16">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/c9c43357d2dfc89ea4d27b18702ac548f1b2f304?width=2236" 
                alt="Workspace setup" 
                className="w-full h-[400px] lg:h-[720px] object-cover rounded-[25px] lg:rounded-[50px]"
              />
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="flex flex-col lg:flex-row gap-8 lg:gap-[502px]">
          <div className="w-full lg:w-[89px]">
            <p className="text-[18px] font-normal text-[#9FA0A3] leading-[20px] tracking-[-0.18px]">
              Education:
            </p>
          </div>
          
          <div className="flex-1 space-y-8 lg:space-y-[50px]">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#9FA0A3] pb-4 lg:pb-[50px] gap-2 sm:gap-0">
              <span className="text-lg sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px]">
                Google Data Analytics Professional Certificate.
              </span>
              <span className="text-lg sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px]">
                2023
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#9FA0A3] pb-4 lg:pb-[50px] gap-2 sm:gap-0">
              <span className="text-lg sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px]">
                Mastering frontend languages
              </span>
              <span className="text-lg sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px]">
                2022
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#9FA0A3] pb-4 lg:pb-[50px] gap-2 sm:gap-0">
              <span className="text-lg sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px]">
                Webflow Developer
              </span>
              <span className="text-lg sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px]">
                2021
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#9FA0A3] pb-4 lg:pb-[50px] gap-2 sm:gap-0">
              <span className="text-lg sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px]">
                Visual Communications and Solutions
              </span>
              <span className="text-lg sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px]">
                2018
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#9FA0A3] pb-4 lg:pb-[50px] gap-2 sm:gap-0">
              <span className="text-lg sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px]">
                Frontend Development Course London App Brewery
              </span>
              <span className="text-lg sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px]">
                2017
              </span>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="flex flex-col lg:flex-row gap-8 lg:gap-[522px]">
          <div className="w-full lg:w-[80px]">
            <p className="text-[18px] font-normal text-[#9FA0A3] leading-[20px] tracking-[-0.18px]">
              Approach
            </p>
          </div>
          
          <div className="flex-1 space-y-8 lg:space-y-[50px]">
            <div className="border-b border-[#9FA0A3] pb-6 lg:pb-[50px]">
              <h3 className="text-xl sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px] mb-4">
                Wireframes
              </h3>
              <p className="text-[18px] font-normal text-[#131417] leading-[28px] tracking-[-0.18px] max-w-[573px]">
                Wireframes are a crucial tool in the design process, providing a blueprint for the layout and functionality of a digital product. To create effective wireframes, it's important to understand the user's needs and goals, as well as the requirements and constraints of the project.
              </p>
            </div>
            
            <div className="border-b border-[#9FA0A3] pb-6 lg:pb-[50px]">
              <h3 className="text-xl sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px] mb-4">
                Digital Design
              </h3>
              <p className="text-[18px] font-normal text-[#131417] leading-[28px] tracking-[-0.18px] max-w-[573px]">
                To create effective designs, it's important to understand the needs, goals, and behaviors of the target audience. This can be achieved through user research and testing, which can uncover insights about user preferences and pain points. Once this information is gathered, designers can create wireframes and prototypes to iterate and refine the design.
              </p>
            </div>
            
            <div className="border-b border-[#9FA0A3] pb-6 lg:pb-[50px]">
              <h3 className="text-xl sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px] mb-4">
                Webflow Development
              </h3>
              <p className="text-[18px] font-normal text-[#131417] leading-[28px] tracking-[-0.18px] max-w-[573px]">
                Webflow provides extensive design control, allowing users to customize every aspect of their websites. From typography and layouts to animations and interactions, users have the flexibility to create unique and visually appealing designs.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Awards Section */}
      <section className="bg-[#F5F5F5] rounded-b-[25px] sm:rounded-b-[35px] lg:rounded-b-[50px] pb-16 lg:pb-[100px]">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-[100px] pt-16 lg:pt-[150px]">
          <p className="text-[18px] font-normal text-[#9FA0A3] leading-[20px] tracking-[-0.18px] mb-8 lg:mb-[50px]">
            Awards & Recognitions
          </p>
          
          <div className="max-w-[1118px] lg:ml-[602px] space-y-8 lg:space-y-[50px]">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#9FA0A3] pb-4 lg:pb-[50px] gap-2 sm:gap-0">
              <span className="text-lg sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px]">
                The Ultra Index® ⏤ For storytelling experience
              </span>
              <span className="text-lg sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px]">
                2023
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#9FA0A3] pb-4 lg:pb-[50px] gap-2 sm:gap-0">
              <span className="text-lg sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px]">
                Awwwards ⏤ Site of the Day (x12)
              </span>
              <span className="text-lg sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px]">
                2023
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#9FA0A3] pb-4 lg:pb-[50px] gap-2 sm:gap-0">
              <span className="text-lg sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px]">
                Designer of the Year ⏤ Nominee
              </span>
              <span className="text-lg sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px]">
                2022
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#9FA0A3] pb-4 lg:pb-[50px] gap-2 sm:gap-0">
              <span className="text-lg sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px]">
                2022 Figma Community Award ⏤ Nominee
              </span>
              <span className="text-lg sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px]">
                2021
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#9FA0A3] pb-4 lg:pb-[50px] gap-2 sm:gap-0">
              <span className="text-lg sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px]">
                CSSAwards ⏤ Featured of the Day (x20+)
              </span>
              <span className="text-lg sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px]">
                2020
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#9FA0A3] pb-4 lg:pb-[50px] gap-2 sm:gap-0">
              <span className="text-lg sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px]">
                Awwwards ⏤ Developer Award (x6)
              </span>
              <span className="text-lg sm:text-2xl lg:text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px]">
                2019
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#131417] text-white">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-[100px] py-16 lg:py-[134px]">
          {/* Footer Header */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-16 lg:mb-[256px] gap-4 sm:gap-0">
            <span className="text-[18px] font-medium leading-[20px] tracking-[-0.18px]">
              Portfolio 2023 - 2024
            </span>
            <span className="text-[20px] font-semibold leading-[20px] tracking-[-0.2px]">
              Henry James
            </span>
            <span className="text-[18px] font-medium leading-[20px] tracking-[-0.18px] text-center sm:text-right">
              51.5074° N, 0.1278° W
            </span>
          </div>
          
          {/* Get in Touch */}
          <div className="text-center mb-16 lg:mb-[270px]">
            <p className="text-[18px] font-medium text-[#9FA0A3] leading-[20px] tracking-[-0.18px] mb-[20px]">
              Have a nice project?
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-[72px] font-medium leading-[72px] tracking-[-0.72px]">
              Get in Touch
            </h2>
          </div>
          
          {/* Footer Bottom */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0">
            <span className="text-[18px] font-medium leading-[18px] tracking-[-0.18px] order-3 lg:order-1">
              © All rights reserved.
            </span>
            
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-[44px] order-1 lg:order-2">
              <a href="#" className="text-lg sm:text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-colors">
                Twitter
              </a>
              <a href="#" className="text-lg sm:text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-colors">
                Behance
              </a>
              <a href="#" className="text-lg sm:text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-colors">
                Instagram
              </a>
              <a href="#" className="text-lg sm:text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-colors">
                Dribble
              </a>
            </div>
            
            <div className="flex gap-4 sm:gap-8 lg:gap-[40px] order-2 lg:order-3">
              <a href="#" className="text-[18px] font-medium leading-[18px] tracking-[-0.18px] hover:text-[#9FA0A3] transition-colors">
                License
              </a>
              <a href="#" className="text-[18px] font-medium leading-[18px] tracking-[-0.18px] hover:text-[#9FA0A3] transition-colors">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
