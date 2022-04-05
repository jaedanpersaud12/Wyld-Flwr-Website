import React from "react";
import Image from "next/image";

function NFTCard({ image, link }) {
  return (
    <div>
      <div className="relative h-">
        <Image src={image} alt="" layout="fill" />
        <a
          target="_blank"
          rel="noreferrer"
          href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/36567795427009012407374235082263121169480817132740453451039498777278430576680"
        >
          <Image
            className="mx-auto p-5 mt-16 w-32 hover:opacity-80 transition duration-200 hover:scale-110 transform ease-out"
            src={link}
            alt=""
            width={40}
            height={40}
          />
        </a>
      </div>
    </div>
  );
}

export default NFTCard;
