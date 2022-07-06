import React from "react"

function NFTS() {
  return (
    <div className="bg-wf-plant-light bg-cover">
      <div className=" bg-cover max-w-6xl mx-auto py-20">
        <h1 className="font-rec text-5xl text-center pb-20 text-wf-burg">
          WYLD TING NFTS
        </h1>
        <div className="grid grid-cols-3 gap-x-20 ">
          <div className="flex flex-col items-center">
            <video autoPlay muted loop src="/nft-videos/Innerbloom.mp4"></video>
            <a href="">
              <img className="h-14 mt-4" src="/icons/opensea-burg.svg" alt="" />
            </a>
          </div>
          <div className="flex flex-col items-center">
            <video
              autoPlay
              muted
              loop
              src="/nft-videos/Wyld and Free.mp4"
            ></video>
            <a href="">
              <img className="h-16 mt-4" src="/icons/foundation.svg" alt="" />
            </a>
          </div>
          <div className="flex flex-col items-center">
            <video autoPlay muted loop src="/nft-videos/Creation.mp4"></video>
            <a href="">
              <img className="h-14 mt-4" src="/icons/opensea-burg.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NFTS
