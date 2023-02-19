import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Features from "../components/Home/Features";
import { Link } from "react-router-dom";

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
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How it works
          </h1>
          <div className="grid md:grid-cols-3 grid-cols-1 pt-10 gap-5">
            <div className="bg-gray-100 shadow p-6 rounded-xl ">
              <img
                className="rounded-xl mb-5"
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/secured-attachments/messaging_message/attachment/4ad318e07ec89c49150d34fd79f39321-1676801872322/DALL%C2%B7E%202023-02-19%2015.17.50%20-%20Create%20a%20stunning%20and%20professional%20top%20view%20image%20of%20the%20dish%20soup%20that%20showcases%20its%20flavors%20and%20ingredients%20in%20a%20visually%20striking%20way_%20fitting%20the%20.png?__cld_token__=exp=1676839414~hmac=ada5c3fdbeb29c9332e24257ac2de0aecd9b66ea08e630dadcdd3bdd8e4d967c"
              />
              <h1 className="text-2xl tracking-tight text-center">Dark</h1>
              <p className="mt-2 font-light">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum,
                nesciunt dolores dicta fugit .
              </p>
            </div>
            <div className="bg-gray-100 shadow p-6 rounded-xl ">
              <img
                className="rounded-xl mb-5"
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/secured-attachments/messaging_message/attachment/4ad318e07ec89c49150d34fd79f39321-1676801872322/DALL%C2%B7E%202023-02-19%2015.17.50%20-%20Create%20a%20stunning%20and%20professional%20top%20view%20image%20of%20the%20dish%20soup%20that%20showcases%20its%20flavors%20and%20ingredients%20in%20a%20visually%20striking%20way_%20fitting%20the%20.png?__cld_token__=exp=1676839414~hmac=ada5c3fdbeb29c9332e24257ac2de0aecd9b66ea08e630dadcdd3bdd8e4d967c"
              />
              <h1 className="text-2xl tracking-tight text-center">Colorful</h1>
              <p className="mt-2 font-light">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum,
                nesciunt dolores dicta fugit .
              </p>
            </div>
            <div className="bg-gray-100 shadow p-6 rounded-xl ">
              <img
                className="rounded-xl mb-5"
                src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/secured-attachments/messaging_message/attachment/4ad318e07ec89c49150d34fd79f39321-1676801872322/DALL%C2%B7E%202023-02-19%2015.17.50%20-%20Create%20a%20stunning%20and%20professional%20top%20view%20image%20of%20the%20dish%20soup%20that%20showcases%20its%20flavors%20and%20ingredients%20in%20a%20visually%20striking%20way_%20fitting%20the%20.png?__cld_token__=exp=1676839414~hmac=ada5c3fdbeb29c9332e24257ac2de0aecd9b66ea08e630dadcdd3bdd8e4d967c"
              />
              <h1 className="text-2xl tracking-tight text-center">Bright</h1>
              <p className="mt-2 font-light">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum,
                nesciunt dolores dicta fugit .
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden bg-white py-2 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <iframe
            className="rounded-xl"
            width="100%"
            height="780"
            src="https://www.youtube.com/embed/f_Pcu6wTzoA"
            title="Spooder-Man Movie Trailer"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
