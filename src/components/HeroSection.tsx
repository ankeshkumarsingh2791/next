import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem]  w-full rounded-md flex flex-col items-center justify-center mx-auto py-10 md:py-0 overflow-hidden relative">
      <div className="p-4 relative z-10 w-full flex flex-col items-center justify-center text-center">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <h1 className="mt-20 md:mt-10 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 ">
          Master The Art Of Music
        </h1>
        <p className="mt-4 font-normal  text-base md:text-lg text-neutral-300 max-w-lg max-auto text-center ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, minus
          cupiditate perspiciatis, tempora deserunt velit architecto ex iste
          dolorum commodi vitae rerum veritatis beatae. Explicabo odio animi hic
          sit culpa. Id sint quisquam a at iure. Dolorem suscipit accusamus
          ipsum provident quod odio maxime asperiores aspernatur, ducimus omnis
          ullam sequi sapiente optio non aliquid, quidem totam, animi eaque?
          Sapiente, omnis.
        </p>
        <div className="mt-4">
          <Link href={"/"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Borders are cool
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
