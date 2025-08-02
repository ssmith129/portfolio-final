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
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-[100px] space-y-16 sm:space-y-32 lg:space-y-[246px] pb-16">

        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row justify-between items-start pt-5 gap-8 lg:gap-0">
          <div className="w-full lg:w-[290px] order-2 lg:order-1">
            <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px] mb-8 lg:mb-[141px]">
              Over 18 awards and mentions from renowned industry players like Awwwards, FWA, and CSSDA. I can't wait to see what the future holds as I continue to innovate and create.
            </p>
            <p className="text-[16px] font-normal text-[#131417] leading-[150%] tracking-[-0.16px]">
              Last updated          31 - 05 - 2023
            </p>
          </div>

          <div className="w-full lg:max-w-[934px] lg:flex-1 lg:ml-[362px] order-1 lg:order-2">
            <h1 className="text-4xl sm:text-6xl lg:text-[94px] font-medium text-[#131417] leading-[120%] tracking-[-1.88px]">
              UX/Product Designer currently based in San Francisco
            </h1>
          </div>
        </section>

        {/* Works Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-[50px]">
          <div className="space-y-8 sm:space-y-12 lg:space-y-[50px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/437ebf05fba1fe900a48cf92b7c64f206c1d4dd4?width=1900"
              alt="Project showcase 1"
              className="w-full h-[400px] sm:h-[500px] lg:h-[700px] object-cover rounded-[25px] sm:rounded-[35px] lg:rounded-[50px]"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/37af1375fa98d83c59ef3e2518f99b22a76e895b?width=1900"
              alt="Project showcase 3"
              className="w-full h-[400px] sm:h-[500px] lg:h-[700px] object-cover rounded-[25px] sm:rounded-[35px] lg:rounded-[50px]"
            />
          </div>
          <div className="space-y-8 sm:space-y-12 lg:space-y-[50px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/726a68012d94e5c06eb87fe03d7555c4a8b3fe84?width=1440"
              alt="Project showcase 2"
              className="w-full h-[400px] sm:h-[500px] lg:h-[700px] object-cover rounded-[25px] sm:rounded-[35px] lg:rounded-[50px]"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/3137aafb62fed94bbbffa6c0c0f8215cf67ddef8?width=1440"
              alt="Project showcase 4"
              className="w-full h-[400px] sm:h-[500px] lg:h-[700px] object-cover rounded-[25px] sm:rounded-[35px] lg:rounded-[50px]"
            />
          </div>
        </section>

        {/* About Section */}
        <section className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
          <div className="w-full lg:w-[162px] order-2 lg:order-1">
            <p className="text-[18px] font-normal text-[#9FA0A3] leading-[150%] tracking-[-0.18px] mb-[20px]">
              Some of the clients:
            </p>
            <div className="space-y-[5px] flex flex-wrap gap-4 lg:flex-col lg:gap-[5px]">
              <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px]">Rag & Bone</p>
              <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px]">Aimfox</p>
              <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px]">Disney</p>
              <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px]">Knight Frank</p>
              <p className="text-[18px] font-normal text-[#131417] leading-[150%] tracking-[-0.18px]">Volkswagen</p>
            </div>
          </div>

          <div className="w-full lg:max-w-[1118px] lg:flex-1 lg:ml-[440px] order-1 lg:order-2">
            <div className="relative mb-[30px]">
              <h2 className="text-2xl sm:text-3xl lg:text-[48px] font-normal text-[#131417] leading-[150%] tracking-[-0.48px]">
                Studied Web Development at   London App Brewery And have been working in the development industry for over a decade.
              </h2>
              <div className="hidden lg:block absolute top-[3px] left-[635px] w-[483px] h-[70px] border border-[#131417] rounded-[50px]"></div>
            </div>

            <p className="text-lg sm:text-[20px] font-normal text-[#131417] leading-[150%] tracking-[-0.2px] max-w-[787px] mb-8 lg:mb-[68px]">
              My passion for development & design started when I was young, and I have pursued this passion by working with a variety of clients and projects over the years. I have worked with startups, small businesses, and large corporations, creating user interfaces for websites, software applications, and mobile apps.
            </p>

            <button className="text-[18px] font-normal text-[#9FA0A3] leading-[100%] tracking-[-0.18px] hover:text-[#131417] transition-colors">
              Read More
            </button>
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
                2021 Figma Community Award ⏤ Nominee
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
          <div className="flex flex-col sm:flex-row justify-between items-center mb-16 lg:mb-[270px] gap-4 sm:gap-0">
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
