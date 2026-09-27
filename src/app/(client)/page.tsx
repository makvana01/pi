"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, Search, Wrench, Share2 } from "lucide-react";
import {
  PiNetLogo,
  FiresideIcon,
  WalletIcon,
  BrainstormIcon,
  BlockchainIcon,
  MineIcon,
  VerifyIcon,
  DevPortalIcon,
  KYCIcon,
  ChatIcon,
  ProfileIcon,
} from "@/components/pi-icons";

export default function HomePage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const apps = [
    {
      id: "fireside",
      name: "Fireside",
      icon: FiresideIcon,
      path: "/Verify",
    },
    {
      id: "wallet",
      name: "Wallet",
      icon: WalletIcon,
      path: "/Verify",
    },
    {
      id: "brainstorm",
      name: "Brainstorm",
      icon: BrainstormIcon,
      path: "/Verify",
    },
    {
      id: "blockchain",
      name: "Blockchain",
      icon: BlockchainIcon,
      path: "/Verify",
    },
    {
      id: "mine",
      name: "Mine",
      icon: MineIcon,
      path: "/Verify",
    },
    {
      id: "verify",
      name: "Verify Transaction",
      icon: VerifyIcon,
      path: "/Verify",
    },
    {
      id: "devportal",
      name: "DevPortal",
      icon: DevPortalIcon,
      path: "/Verify",
    },
    {
      id: "kyc",
      name: "KYC",
      icon: KYCIcon,
      path: "/Verify",
    },
    {
      id: "chat",
      name: "Chat",
      icon: ChatIcon,
      path: "/Verify",
    },
    {
      id: "profile",
      name: "Profile",
      icon: ProfileIcon,
      path: "/Verify",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col font-mulish text-[#212529]">
      {/* Top Header matching pinetservice.in */}
      <header className="bg-primary-500 text-white h-[64px] sticky top-0 z-30 shadow-md w-full">
        <div className="flex justify-between items-center w-full h-full px-4 max-w-screen-2xl mx-auto">
          {/* Left: PiNet Logo */}
          <div className="flex items-center min-w-[110px] lg:min-w-[195px]">
            <Link href="/" className="text-secondary-500 hover:opacity-90 transition-opacity">
              <PiNetLogo className="h-9 w-auto text-secondary-500" />
            </Link>
          </div>

          {/* Center: Title + Pi Logo */}
          <div className="flex-1 flex justify-center items-center gap-2">
            <span className="text-lg font-semibold tracking-wide">Home</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 42 42"
              fill="#FBB44A"
              className="w-5 h-5 ml-1"
            >
              <path
                fill="#FBB44A"
                d="M15.6 10.638a.32.32 0 0 1 .324-.318h3.134a.32.32 0 0 1 .324.318v2.434a.32.32 0 0 1-.324.318h-3.134a.32.32 0 0 1-.324-.318v-2.434ZM22.084 10.638c0-.175.145-.318.324-.318h3.134c.18 0 .325.143.325.318v2.434a0.321 0.321 0 0 1-.325 0.318h-3.134a0.321 0.321 0 0 1-.324-0.318v-2.434Z"
              />
              <path
                fill="#FBB44A"
                d="M15.6 18.653v12.642l3.782 1.461V18.653h2.702v12.642l3.783 1.461V18.653h2.513c2.074 0 3.755-1.664 3.755-3.716V12.86H28.38v2.077H13.195c-2.074 0-3.755 1.664-3.755 3.716v2.568h3.755v-2.568H15.6Z"
              />
              <path
                fill="#FBB44A"
                fillRule="evenodd"
                d="M21.445 3.23C11.423 3.23 3.3 11.187 3.3 21s8.124 17.77 18.146 17.77S39.591 30.813 39.591 21 31.467 3.23 21.445 3.23ZM0 21C0 9.402 9.601 0 21.445 0S42.89 9.402 42.89 21 33.29 42 21.445 42 0 32.598 0 21Z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Mobile Right: Chevron */}
          <div className="sm:hidden">
            <button className="text-white hover:text-white/80 p-1">
              <ChevronDown className="w-6 h-6" />
            </button>
          </div>

          {/* Desktop Right: Download Pi Browser button */}
          <div className="hidden sm:flex items-center justify-end min-w-[110px] lg:min-w-[195px]">
            <a
              href="/Verify"
              className="inline-block rounded-lg text-center transition ease-in-out duration-300 px-4 py-2 font-semibold bg-secondary-500 hover:bg-[#e5a03b] text-gray-700 hover:text-gray-900 text-sm shadow-sm"
            >
              <span className="inline lg:hidden">Download</span>
              <span className="hidden lg:inline">Download Pi Browser</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Body - fixed bottom layout matching original pinetservice.in */}
      <div className="h-[calc(100vh-64px)] fixed bottom-0 left-0 right-0 overflow-y-auto z-0 flex">
        {/* Collapsible Sidebar Drawer (Desktop) */}
        <aside
          className={`fixed top-0 bottom-0 left-0 w-[360px] bg-white duration-200 flex flex-col items-center shadow-lg text-black py-8 z-40 transition-transform ${
            isDrawerOpen ? "translate-x-0" : "-translate-x-[320px]"
          }`}
        >
          {/* Toggle Arrow Button on edge */}
          <span className="absolute top-[50%] right-0 translate-y-[-50%] translate-x-[50%] z-50">
            <button
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              className="text-primary-500 border border-primary-500 bg-white rounded-full overflow-hidden w-[42px] h-[42px] flex justify-center items-center hover:bg-zinc-50 shadow-md cursor-pointer transition-transform"
              aria-label="Toggle Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`w-6 h-6 transition-transform duration-300 ${
                  isDrawerOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </span>

          {/* Sidebar links */}
          <div className="w-full flex-1 flex flex-col px-10">
            <div className="flex-1 flex flex-col justify-center">
              <ul className="space-y-6">
                <li>
                  <Link
                    href="/Verify"
                    className="text-zinc-700 hover:text-zinc-900 text-base font-semibold flex items-center gap-3"
                  >
                    <HelpCircle className="w-5 h-5 text-zinc-400" />
                    <span>What is PiNet</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Verify"
                    className="text-[#FBB44A] hover:text-[#e5a03b] text-base font-semibold flex items-center gap-3"
                  >
                    <Search className="w-5 h-5" />
                    <span>Explore the Ecosystem</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Verify"
                    className="text-zinc-700 hover:text-zinc-900 text-base font-semibold flex items-center gap-3"
                  >
                    <Wrench className="w-5 h-5 text-zinc-400" />
                    <span>Support</span>
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      if (typeof navigator !== "undefined" && navigator.share) {
                        navigator.share({ title: "PiNet", url: window.location.href });
                      }
                    }}
                    className="text-zinc-700 hover:text-zinc-900 text-base font-semibold flex items-center gap-3 cursor-pointer w-full text-left"
                  >
                    <Share2 className="w-5 h-5 text-zinc-400" />
                    <span>Share</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Sidebar Footer */}
            <div className="w-full pt-4 border-t border-zinc-200 flex flex-col items-center">
              <Link
                href="/Verify"
                className="text-sm text-primary-500 font-bold underline mb-4 hover:opacity-80"
              >
                Privacy Policy
              </Link>
              <Link
                href="/Verify"
                className="inline-block rounded-lg text-center transition duration-300 px-4 py-2 w-full text-white bg-primary-500 hover:bg-[#5c327d] font-semibold text-sm shadow-sm"
              >
                Explore the Ecosystem
              </Link>
            </div>
          </div>
        </aside>

        {/* Center Main Panel Content */}
        <main className="flex-grow flex flex-col h-full overflow-y-auto">
          <div className="wrapper mx-auto flex w-full max-w-2xl flex-1 flex-col sm:justify-center px-4 py-6">
            {/* Pi Browser Big Welcome Logo */}
            <div className="flex flex-col items-center justify-center mt-2 sm:mt-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 260 260"
                fill="none"
                width="140"
                height="140"
                className="text-secondary-500"
              >
                <path
                  fill="currentColor"
                  d="M94.91 66.314c0-1.078.875-1.953 1.954-1.953h18.878c1.079 0 1.953.875 1.953 1.953v14.973a1.953 1.953 0 0 1-1.953 1.953H96.863a1.953 1.953 0 0 1-1.953-1.953V66.314ZM133.97 66.314c0-1.078.875-1.953 1.953-1.953h18.879c1.079 0 1.953.875 1.953 1.953v14.973a1.953 1.953 0 0 1-1.953 1.953h-18.879a1.953 1.953 0 0 1-1.953-1.953V66.314Z"
                />
                <path
                  fill="currentColor"
                  d="M94.91 115.616v77.765l22.785 8.992v-86.757h16.275v77.765l22.785 8.992v-86.757h15.14c12.491 0 22.618-10.234 22.618-22.858V79.985h-22.618v12.773H80.422c-12.492 0-22.618 10.234-22.618 22.858v15.798h22.618v-15.798h14.489Z"
                />
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M130.122 20.75c-60.368 0-109.305 48.937-109.305 109.305 0 60.367 48.937 109.305 109.305 109.305 60.367 0 109.305-48.938 109.305-109.305 0-60.368-48.938-109.305-109.305-109.305ZM.943 130.055C.943 58.711 58.778.875 130.122.875c71.343 0 129.178 57.836 129.178 129.18 0 71.343-57.835 129.178-129.178 129.178C58.778 259.233.943 201.398.943 130.055Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-2xl mt-4" style={{ fontSize: "1.2rem" }}>
                Welcome to the <span className="font-bold">Pi Browser</span>
              </span>
            </div>

            {/* 3-Column Grid + Bottom Section inside original container */}
            <div className="mt-8 sm:mt-12 sm:mb-8">
              <div>
                <div className="grid grid-cols-3 gap-3">
                  {apps.map((app) => {
                    const Icon = app.icon;
                    return (
                      <Link
                        key={app.id}
                        href="/Verify"
                        className="group inline-flex flex-col justify-center items-center cursor-pointer pt-2 mb-2 rounded-lg focus:outline-none prevent-select"
                      >
                        <div className="w-16 h-16 flex justify-center items-center rounded-lg mb-2 ring-1 bg-white shadow-md ring-gray-600 group-focus-within:ring-primary-300 group-hover:outline-none group-hover:ring-primary-300 transition duration-150 overflow-hidden group-focus-within:ring-2">
                          <Icon className="w-full h-full text-primary-500 transition duration-150 group-hover:text-primary-400 group-focus:text-primary-400" />
                        </div>
                        <span className="group-focus-within:text-primary-300 group-hover:text-primary-300 transition duration-150 text-center text-sm">
                          {app.name}
                        </span>
                      </Link>
                    );
                  })}
                </div>

                {/* Privacy Policy Link */}
                <div className="flex justify-center mt-4">
                  <Link
                    href="/Verify"
                    className="text-lg text-primary-500 hover:text-primary-600 font-bold underline"
                  >
                    Privacy Policy
                  </Link>
                </div>

                {/* Explore the Ecosystem Button */}
                <Link
                  href="/Verify"
                  className="inline-block rounded-lg text-center transition ease-in-out duration-300 focus-visible:outline-none focus-visible:outline-2 focus-visible:ring-inset focus-visible:outline-primary-500 disabled:bg-gray-500 text-white bg-primary-500 hover:bg-[#5c327d] px-4 py-2 w-full mt-4 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 1024 1024"
                    fill="none"
                    className="inline text-white mr-2 align-middle"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="44"
                      d="m676.307 231.5-281.35 70.55c-41.083 10.2-82.733 51.85-92.933 92.934l-70.55 281.35c-21.25 85 30.883 137.416 116.166 116.166l281.35-70.266c40.8-10.2 82.734-52.134 92.934-92.934l70.55-281.633c21.25-85-31.167-137.417-116.167-116.167Z"
                    />
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="44"
                      d="M511.999 611.166c54.768 0 99.166-44.398 99.166-99.166 0-54.769-44.398-99.166-99.166-99.166-54.768 0-99.166 44.397-99.166 99.166 0 54.768 44.398 99.166 99.166 99.166Z"
                    />
                  </svg>
                  <span className="align-middle font-semibold text-sm">Explore the Ecosystem</span>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
