"use client"
 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const test = [
    {
        quote: "This product has truly transformed my daily routine. I can't imagine going back to the way things were before.",
        name: "John Doe",
        string: "Highly recommend this to anyone looking for a practical and effective solution!"
      },
      {
        quote: "This product has truly transformed my daily routine. I can't imagine going back to the way things were before.",
        name: "John Doe",
        string: "Highly recommend this to anyone looking for a practical and effective solution!"
      }, {
        quote: "This product has truly transformed my daily routine. I can't imagine going back to the way things were before.",
        name: "John Doe",
        string: "Highly recommend this to anyone looking for a practical and effective solution!"
      }, {
        quote: "This product has truly transformed my daily routine. I can't imagine going back to the way things were before.",
        name: "John Doe",
        string: "Highly recommend this to anyone looking for a practical and effective solution!"
      }, {
        quote: "This product has truly transformed my daily routine. I can't imagine going back to the way things were before.",
        name: "John Doe",
        string: "Highly recommend this to anyone looking for a practical and effective solution!"
      }, {
        quote: "This product has truly transformed my daily routine. I can't imagine going back to the way things were before.",
        name: "John Doe",
        string: "Highly recommend this to anyone looking for a practical and effective solution!"
      },
]

const TestinomialCard = () => {
  return (
    <div className="h-[40rem] dark:bg-black w-full  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-center z-10 text-4xl mt-5">Her our Harmony: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
                <InfiniteMovingCards
                items={test as any}
                direction="right"
                speed="slow"
                />
            </div>
        </div>
    </div>
  )
}

export default TestinomialCard