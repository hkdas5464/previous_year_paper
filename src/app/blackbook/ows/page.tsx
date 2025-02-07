"use client";
import React from 'react'

import {Button, Image } from "@nextui-org/react";
import Accord from './Accord';

import Link from 'next/link';



function SSCOWS() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-gray-800 bg-opacity-70 text-white shadow-md z-10 backdrop-blur-md">
        <div className="flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold">
            <Link href="/">HOME</Link>
          </h1>
          <nav>
            <Link href="https://next-quiz-pi.vercel.app">
              <Button className="px-4 py-2 bg-blue-700 bg-opacity-50 hover:bg-opacity-70 text-white rounded-lg">
                QUIZ
              </Button>
            </Link>
          </nav>
        </div>
      </header>
      <main>
        <div className="flex items-center justify-center mt-20">
          <Image

            alt="HeroUI hero Image"
            src="/image.jpg"

            style={{ objectFit: 'cover', zIndex: 0 }} />
        </div>
        <div className="max-w-4xl mx-auto pb-40">
          <p className="text-2xl mt-20 md:text-4xl mb-5 lg:text-7xl font-bold inter-var text-center">
            <u>VOCAB OWS</u>
          </p>
          <Accord />
          <div className='items-center'>

          </div>
        </div>
      </main>

    </>
  )
}

export default SSCOWS;


