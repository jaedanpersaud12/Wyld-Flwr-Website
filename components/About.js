import React from "react";
import Image from "next/image";

function About() {
  return (
    <div>
      <section className="py-12 bg-wf-lesspink lg:bg-wf-about bg-cover sm:py-16 lg:py-20">
        <div className="px-8 mx-auto max-w-7xl sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3">
          <div></div>
          <div className="text-center lg:my-16 col-span-2">
            <p className="mt-7 lg:text-left font-bold text-3xl lg:text-4xl text-wf-burg font-rec">
              WE ARE WYLD FLWR
            </p>

            <div className="my-10">
              <p className="text-center lg:text-left mt-8 md:mt-8 font-rec text-xl md:text-xl text-wf-burg">
                Wyld Flwr is a designer phygital (physical + digital) brand
                inspired by Trinidad and Tobago Carnival and Burning Man, aiming
                to empower women to experience true freedom and radical self
                expression, all while affording financial independence to the
                women who manufacture the line.
              </p>
              <p className="text-center lg:text-left mt-8 md:mt-8 font-rec text-xl md:text-xl text-wf-burg">
                Our first collection, &quot;Wyld Ting,&quot; features an
                inspiring collaboration of creative and tech professionals in
                the form of physical garments, digital wearables and
                non-fungible tokens (NFTs). Collectors will be guided through
                the journey of the Wyld woman both visually and aurally. . .
              </p>
              <p className="text-center lg:text-left mt-8 md:mt-8 font-rec text-xl md:text-xl text-wf-burg">
                Wyld Flwr has partnered with women&apos;s livelihood initiative,
                spöol, to ensure that living wages are paid to our makers. We
                pledge a percentage of royalties earned through the sale of our
                digital assets to spöol.
              </p>
              <p className="text-center lg:text-left mt-8 md:mt-8 font-rec text-2xl md:text-3xl text-wf-burg">
                Wyld Flwr is where freedom blooms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
