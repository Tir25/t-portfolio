"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "Rudri P — Blog & Research Papers Platform",
    description: `A full-stack web application that lets authors publish blog posts and upload research papers with secure storage and access policies. Built in TypeScript and deployed to Vercel, with the backend powered by Supabase (Postgres) and Row-Level Security for precise access control.`,
    link: "https://rudri-p-portfolio.vercel.app",
    images: [
      "/Portfolio Website/Screenshot 2025-12-18 104213.png",
      "/Portfolio Website/Screenshot 2025-12-18 104322.png",
      "/Portfolio Website/Screenshot 2025-12-18 104352.png",
      "/Portfolio Website/Screenshot 2025-12-18 104432.png",
    ],
  },
  {
    id: 2,
    name: "BTS — UniTrack",
    description: `A responsive single-page web app for live transit tracking and management — featuring a real-time map with bus position streaming, admin CRUD dashboard, and PWA support. Built with JavaScript and deployed to Firebase Hosting.`,
    link: "https://university-bus-tracker-app.web.app/",
    images: [
      "/BTS-System/screenshot-1.png",
      "/BTS-System/screenshot-2.png",
      "/BTS-System/screenshot-3.png",
    ],
  },
];
function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
        <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around ">
          {PROJECTS.map((project) => (
            <li
              className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`screenshot of "${project.name}`}
                        className="w-[300px] h-[200px] rounded-md bg-zinc-900 "
                        width={300}
                        height={400}
                        style={{ height: "200px" }}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4 text-zinc-300">
                <h2 className="text-xl">{project.name}</h2>
                <p className="mt-2 text-xs text-zinc-500">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
