import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Features from "../components/Home/Features";
import { Link } from "react-router-dom";
import Reviews from "../components/Home/Reviews";

export default function Hero() {
  return (
    <div className="isolate bg-white">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-20 ">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Announcing our next round of funding.{" "}
                <a href="#" className="font-semibold text-indigo-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Images to enrich your online website
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                create unique and stunning looking images for your restaurant
                blog etc in minutes
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="/create"
                  className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </Link>
                <a
                  href="#"
                  className="text-base font-semibold leading-7 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg
              className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
            >
              <path
                fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </main>
      <Features />
      <section id="get-started-today" className="relative overflow-hidden bg-transparent  text-black py-32">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
        <img alt="" src="/_next/static/media/background-call-to-action.6a5a5672.jpg" width={2347} height={1244} decoding="async" data-nimg={1} className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" loading="lazy" style={{color: 'transparent'}} /><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative"><div className="mx-auto max-w-lg text-center"><h2 className="font-display text-3xl tracking-tight text-black sm:text-4xl">Get started today</h2><p className="mt-4 text-lg tracking-tight text-black">It’s time to take control of your books. Buy our software so you can feel like you’re doing something productive.</p><a className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10" href="/register">Get 6 months free</a></div></div></section>

      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How it works
          </h1>
          <div className="grid md:grid-cols-2 grid-cols-1 pt-10 gap-5">
            <div className=" shadow-md transition hover:shadow-lg p-6 rounded-xl h-[300px] flex gap-10">
              <img
                className="rounded-xl mb-5 w-[200px] object-cover"
                src="https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900 "
              />
            <div className="mt-10">
            <h1 className="text-2xl tracking-tight text-center">Dark</h1>
              <p className="mt-2 font-light">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum,
                nesciunt dolores dicta fugit .
              </p>
            </div>
            
            </div>
            
            <div className=" shadow-md transition hover:shadow-lg p-6 rounded-xl h-[300px] flex gap-10">
              <img
                className="rounded-xl mb-5 w-[200px] object-cover"
                src="https://media.istockphoto.com/id/177804743/photo/assorted-ice-cream.jpg?s=612x612&w=0&k=20&c=6hVNZlKeaZqAKcFPrTs_x_Yagrrbdv29nMRqeq3pkNc="
              />
            <div className="mt-10">
            <h1 className="text-2xl tracking-tight text-center">Colorful</h1>
              <p className="mt-2 font-light">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum,
                nesciunt dolores dicta fugit .
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden bg-white py-2 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <iframe width="100%" height="780" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Rick Astley - Never Gonna Give You Up (Official Music Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        className="rounded-xl"
        allowfullscreen
        ></iframe>
        </div>
      </div>
      <Reviews/>
    </div>
  );
}
