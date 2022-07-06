import React from "react"

function Hero() {
  return (
    <div className="relative overflow-x-hidden bg-wf-divider-bg bg-cover h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="content-center absolute z-10 lg:w-full cover max-w-none"
      >
        <source src="./wyld-flwr-intro-hd.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <header className="relative py-4 md:py-6 z-20" x-data="{expanded: false}">
        <div className="px-4 mx-auto max-w-7xl sticky top-0 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between">
            <div className="flex-shrink-0">
              <a
                href="index.html"
                title=""
                className="flex rounded outline-none"
              >
                <img
                  className="w-auto h-8"
                  src="./wf-brand/wf-logo-white.png"
                  alt=""
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button type="button" className="text-gray-900">
                <span x-show="!expanded" aria-hidden="true">
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </span>

                <span x-show="expanded" aria-hidden="true">
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              </button>
            </div>
            <nav className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-12">
              <a
                href="about.html"
                title=""
                className="text-base font-medium text-white uppercase transition-all duration-200 font-rec hover:text-opacity-80 hover:scale-110 transform ease-out"
              >
                About
              </a>
              <a
                href="nft-showcase.html"
                title=""
                className="text-base font-medium text-white uppercase transition-all duration-200 font-rec hover:text-opacity-80 hover:scale-110 transform ease-out"
              >
                NFTS
              </a>
              <a
                href="wearables.html"
                title=""
                className="text-base font-medium text-white uppercase transition-all duration-200 font-rec hover:text-opacity-80 hover:scale-110 transform ease-out"
              >
                Wearables
              </a>
              <a
                href="https://www.shop.wyldflwr.com/shop"
                target="_blank"
                title=""
                className="text-base font-medium text-white uppercase transition-all duration-200 font-rec hover:text-opacity-80 hover:scale-110 transform ease-out"
              >
                Clothing
              </a>
            </nav>

            <nav className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-10">
              <a
                href="https://www.instagram.com/wearewyldflwr/"
                target="_blank"
              >
                <img
                  src="./icons/Instagram.svg"
                  className="hover:opacity-80 transition-all duration-200 hover:scale-110 transform ease-out"
                  alt=""
                />
              </a>
              <a href="https://twitter.com/wearewyldflwr" target="_blank">
                <img
                  src="./icons//Twitter.svg"
                  className="hover:opacity-80 transition-all duration-200 hover:scale-110 transform ease-out"
                  alt=""
                />
              </a>
              <a href="https://discord.gg/A29Tre6C" target="_blank">
                <img
                  src="./icons//discord-icon.svg"
                  className="hover:opacity-80 transition-all duration-200 hover:scale-110 transform ease-out"
                  alt=""
                />
              </a>
              <a
                href="mailto:info@wyldflwr.com"
                target="_blank"
                title=""
                className="hover:opacity-80 transition-all duration-200 hover:scale-110 transform ease-out"
                rel="noopener"
              >
                <img src="./icons/mail-icon.svg" alt="" />
              </a>
            </nav>
          </div>
          {/* <nav x-show="expanded" x-collapse>
            <div className="px-1 py-8">
              <div className="grid gap-y-7">
                <a
                  href="about.html"
                  title=""
                  className="text-base font-medium text-white uppercase transition-all duration-200 font-rec hover:text-opacity-80"
                >
                  About
                </a>

                <a
                  href="nft-showcase.html"
                  title=""
                  className="text-base font-medium text-white uppercase transition-all duration-200 font-rec hover:text-opacity-80"
                >
                  NFTS
                </a>

                <a
                  href="wearables.html"
                  title=""
                  className="text-base font-medium text-white uppercase transition-all duration-200 font-rec hover:text-opacity-80"
                >
                  Wearables
                </a>
                <a
                  href="https://www.shop.wyldflwr.com/"
                  target="_blank"
                  title=""
                  className="text-base font-medium text-white uppercase transition-all duration-200 font-rec hover:text-opacity-80"
                >
                  Clothing
                </a>

                <a
                  href="https://www.instagram.com/wearewyldflwr/"
                  target="_blank"
                >
                  <img
                    src="images/social-media/Instagram.svg"
                    className="hover:opacity-80 transition-all duration-200"
                    alt=""
                  />
                </a>
                <a href="https://twitter.com/wearewyldflwr" target="_blank">
                  <img
                    src="images/social-media/Twitter.svg"
                    className="hover:opacity-80 transition-all duration-200"
                    alt=""
                  />
                </a>
                <a href="https://discord.gg/A29Tre6C" target="_blank">
                  <img
                    src="images/social-media/discord-icon.svg"
                    className="hover:opacity-80 transition-all duration-200"
                    alt=""
                  />
                </a>
                <a
                  href="mailto:info@wyldflwr.com"
                  target="_blank"
                  title=""
                  className="hover:opacity-80 transition-all duration-200"
                  rel="noopener"
                >
                  <img src="images/mail-icon.svg" alt="" />
                </a>
              </div>
            </div>
          </nav> */}
        </div>
      </header>
    </div>
  )
}

export default Hero
