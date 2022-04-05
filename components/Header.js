import React from "react";
import Image from "next/image";
import InstaLogo from "../public/Instagram.svg";
import TwitLogo from "../public/Twitter.svg";
import DiscLogo from "../public/discord-icon.svg";
import MailIcon from "../public/mail-icon.svg";
import wfLogo from "../public/wf-logo-white.png";

function Header() {
  return (
    <div className="relative overflow-x-hidden bg-wf-divider-bg bg-cover h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="content-center absolute z-10 sm lg:w-full cover max-w-none"
      >
        <source src="/wyld-flwr-intro-hd.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative py-4 md:py-6 z-20" x-data="{expanded: false}">
        <div className="px-4 mx-auto max-w-7xl sticky top-0 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between">
            <div className="flex-shrink-0">
              <a
                href="index.html"
                title=""
                className="flex rounded outline-none"
              >
                <Image
                  className="mt-3"
                  src={wfLogo}
                  alt=""
                  height={32}
                  width={241}
                />
              </a>
            </div>

            <nav className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-12">
              <a
                href="about.html"
                title=""
                className="text-base font-medium text-white uppercase transition-all duration-200 font-rec hover:text-opacity-80"
              >
                About
              </a>

              <a
                href="#nfts"
                title=""
                className="text-base font-medium text-white uppercase transition-all duration-200 font-rec hover:text-opacity-80"
              >
                NFTS
              </a>

              <a
                href="#wearables"
                title=""
                className="text-base font-medium text-white uppercase transition-all duration-200 font-rec hover:text-opacity-80"
              >
                Wearables
              </a>
              <a
                href="https://www.shop.wyldflwr.com/shop"
                target="_blank"
                rel="noreferrer"
                title=""
                className="text-base font-medium text-white uppercase transition-all duration-200 font-rec hover:text-opacity-80"
              >
                Clothing
              </a>
            </nav>

            <nav className="hidden lg:flex lg:items-center lg:justify-end lg:space-x-10">
              <a
                href="https://www.instagram.com/wearewyldflwr/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={InstaLogo}
                  className="hover:opacity-80 transition-all duration-200 text-white"
                  alt=""
                  width={20}
                  height={20}
                />
              </a>
              <a
                href="https://twitter.com/wearewyldflwr"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={TwitLogo}
                  className="hover:opacity-80 transition-all duration-200"
                  alt=""
                  width={20}
                  height={20}
                />
              </a>
              <a
                href="https://discord.gg/A29Tre6C"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={DiscLogo}
                  className="hover:opacity-80 transition-all duration-200"
                  alt=""
                  width={20}
                  height={20}
                />
              </a>
              <a
                href="mailto:info@wyldflwr.com"
                target="_blank"
                title=""
                className="hover:opacity-80 transition-all duration-200"
                rel="noreferrer"
              >
                <Image src={MailIcon} alt="" width={20} height={20} />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
