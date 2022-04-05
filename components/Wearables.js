import React from "react";
import phygicode from "../public/bgimg/phygicode.png";
import Image from "next/image";

function Wearables() {
  return (
    <div>
      <section
        id=""
        className="py-9 bg-wf-divider-bg bg-cover bg-opacity-70 sm:py-20 lg:py-20"
      >
        <div className="relative px-4 mx-auto max-w-5xl sm:px-6 lg:px-4">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.businesswire.com/news/home/20220323005389/en/Threedium-Hosts-Global-Brands-During-Metaverse-Fashion-Week"
          >
            <Image className="mx-auto max-w-5xl" src={phygicode} alt="" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Wearables;
