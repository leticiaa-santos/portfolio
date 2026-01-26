"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export function Skills() {
  const plugin = React.useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: false,
    })
  )

  const skills = [
    "WEB",
    "PROGRAMMING",
    "DEVELOPMENT",
    "JAVASCRIPT",
    "CSS",
    "FIGMA",
    "GIT",
    "HTML",
    "PYTHON",
    "TYPESCRIPT",
    "DJANGO",
    "BACKEND",
    "NEXT",
    "REACT",
    ""
  ]

  return (
    <div className="w-full border-y py-6 overflow-hidden z-1">
      <Carousel
        plugins={[plugin.current]}
        opts={{
          loop: true,
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="flex gap-10">
          {skills.map((skill, index) => (
            <CarouselItem
              key={index}
              className="basis-auto shrink-0"
            >
              <span className="uppercase tracking-widest text-sm">
                {skill}
              </span>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
