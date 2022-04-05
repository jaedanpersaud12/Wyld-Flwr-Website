import React from "react";
import openseaLogo from "../public/opensea-logo-burg.svg";
import foundationLogo from "../public/foundation.svg";
import Image from "next/image";
import NFTCard from "./NFTCard";

function NFTDisplay() {
  return (
    <div className="flex h-64">
      <NFTCard
        image="/../public/nft-videos/Innerbloom.png"
        link={openseaLogo}
      />
      <NFTCard
        image="/../public/nft-videos/Wyld and Free.png"
        link={foundationLogo}
      />
      <NFTCard image="/../public/nft-videos/Creation.png" link={openseaLogo} />
    </div>
  );
}

export default NFTDisplay;
