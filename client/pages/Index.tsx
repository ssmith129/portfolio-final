import { Link } from "react-router-dom";

export default function Index() {
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
      </nav>

      {/* Main Content */}
      <div className="max-w-[1920px] mx-auto px-[100px] space-y-[246px] pb-16">
        
        {/* Hero Section */}
        <section className="flex justify-between items-start pt-5">
          <div className="w-[290px]">
            <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] mb-[141px]">
              Over 18 awards and mentions from renowned industry players like Awwwards, FWA, and CSSDA. I can't wait to see what the future holds as I continue to innovate and create.
            </p>
            <p className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px]">
              Last updated          31 - 05 - 2023
            </p>
          </div>
          
          <div className="max-w-[934px] flex-1 ml-[362px]">
            <h1 className="text-[94px] font-medium text-[#131417] leading-[120%] tracking-[-1.88px]">
              UX/Product Designer currently based in San Francisco
            </h1>
          </div>
        </section>

        {/* Works Section */}
        <section className="grid grid-cols-2 gap-[50px] h-[1450px]">
          <div className="space-y-[50px]">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/437ebf05fba1fe900a48cf92b7c64f206c1d4dd4?width=1900" 
              alt="Project showcase 1" 
              className="w-full h-[700px] object-cover rounded-[50px]"
            />
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/37af1375fa98d83c59ef3e2518f99b22a76e895b?width=1900" 
              alt="Project showcase 3" 
              className="w-full h-[700px] object-cover rounded-[50px]"
            />
          </div>
          <div className="space-y-[50px]">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/726a68012d94e5c06eb87fe03d7555c4a8b3fe84?width=1440" 
              alt="Project showcase 2" 
              className="w-full h-[700px] object-cover rounded-[50px]"
            />
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/3137aafb62fed94bbbffa6c0c0f8215cf67ddef8?width=1440" 
              alt="Project showcase 4" 
              className="w-full h-[700px] object-cover rounded-[50px]"
            />
          </div>
        </section>

        {/* About Section */}
        <section className="flex justify-between items-start">
          <div className="w-[162px]">
            <p className="text-[18px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.18px] mb-[20px]">
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
          
          <div className="max-w-[1118px] flex-1 ml-[440px]">
            <div className="relative mb-[30px]">
              <h2 className="text-[48px] font-normal text-[#131417] leading-[150%] tracking-[-0.48px] max-w-[1118px]">
                Studied Web Development at   London App Brewery And have been working in the development industry for over a decade.
              </h2>
              <div className="absolute top-[3px] left-[635px] w-[483px] h-[70px] border border-[#131417] rounded-[50px]"></div>
            </div>
            
            <p className="text-[20px] font-normal text-[#131417] leading-[150%] tracking-[-0.2px] max-w-[787px] mb-[68px]">
              My passion for development & design started when I was young, and I have pursued this passion by working with a variety of clients and projects over the years. I have worked with startups, small businesses, and large corporations, creating user interfaces for websites, software applications, and mobile apps.
            </p>
            
            <button className="text-[18px] font-normal text-[#9FA0A3] leading-[100%] tracking-[-0.18px] hover:text-[#131417] transition-colors">
              Read More
            </button>
          </div>
        </section>
      </div>

      {/* Awards Section */}
      <section className="bg-[#F5F5F5] rounded-b-[50px] pb-[100px]">
        <div className="max-w-[1920px] mx-auto px-[100px] pt-[150px]">
          <p className="text-[18px] font-normal text-[#9FA0A3] leading-[20px] tracking-[-0.18px] mb-[50px]">
            Awards & Recognitions
          </p>
          
          <div className="max-w-[1118px] ml-[602px] space-y-[50px]">
            <div className="flex justify-between items-center border-b border-[#9FA0A3] pb-[50px]">
              <span className="text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px]">
                The Ultra Index® ⏤ For storytelling experience
              </span>
              <span className="text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px]">
                2023
              </span>
            </div>
            
            <div className="flex justify-between items-center border-b border-[#9FA0A3] pb-[50px]">
              <span className="text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px]">
                Awwwards ⏤ Site of the Day (x12)
              </span>
              <span className="text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px]">
                2023
              </span>
            </div>
            
            <div className="flex justify-between items-center border-b border-[#9FA0A3] pb-[50px]">
              <span className="text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px]">
                Designer of the Year ⏤ Nominee
              </span>
              <span className="text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px]">
                2022
              </span>
            </div>
            
            <div className="flex justify-between items-center border-b border-[#9FA0A3] pb-[50px]">
              <span className="text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px]">
                2021 Figma Community Award ⏤ Nominee
              </span>
              <span className="text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px]">
                2021
              </span>
            </div>
            
            <div className="flex justify-between items-center border-b border-[#9FA0A3] pb-[50px]">
              <span className="text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px]">
                CSSAwards ⏤ Featured of the Day (x20+)
              </span>
              <span className="text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px]">
                2020
              </span>
            </div>
            
            <div className="flex justify-between items-center border-b border-[#9FA0A3] pb-[50px]">
              <span className="text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px]">
                Awwwards ⏤ Developer Award (x6)
              </span>
              <span className="text-[28px] font-normal text-[#131417] leading-[32px] tracking-[-0.28px]">
                2019
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#131417] text-white">
        <div className="max-w-[1920px] mx-auto px-[100px] py-[134px]">
          {/* Footer Header */}
          <div className="flex justify-between items-center mb-[270px]">
            <span className="text-[18px] font-medium leading-[20px] tracking-[-0.18px]">
              Portfolio 2023 - 2024
            </span>
            <span className="text-[20px] font-semibold leading-[20px] tracking-[-0.2px]">
              Henry James
            </span>
            <span className="text-[18px] font-medium leading-[20px] tracking-[-0.18px]">
              51.5074° N, 0.1278° W
            </span>
          </div>
          
          {/* Get in Touch */}
          <div className="text-center mb-[270px]">
            <p className="text-[18px] font-medium text-[#9FA0A3] leading-[20px] tracking-[-0.18px] mb-[20px]">
              Have a nice project?
            </p>
            <h2 className="text-[72px] font-medium leading-[72px] tracking-[-0.72px]">
              Get in Touch
            </h2>
          </div>
          
          {/* Footer Bottom */}
          <div className="flex justify-between items-center">
            <span className="text-[18px] font-medium leading-[18px] tracking-[-0.18px]">
              © All rights reserved.
            </span>
            
            <div className="flex gap-[44px]">
              <a href="#" className="text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-colors">
                Twitter
              </a>
              <a href="#" className="text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-colors">
                Behance
              </a>
              <a href="#" className="text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-colors">
                Instagram
              </a>
              <a href="#" className="text-[20px] font-medium leading-[20px] tracking-[-0.2px] hover:text-[#9FA0A3] transition-colors">
                Dribble
              </a>
            </div>
            
            <div className="flex gap-[40px]">
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
