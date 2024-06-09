"use client";
import React from "react";
import { CardHoverEffectDemo } from "../cardhover";
import Gallery from './Gallery'
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  CardFooter,
  Image,
} from "@nextui-org/react";
import { Circle } from "./data";
import LightGallery from "lightgallery/react";
import Link from "next/link";
import {SlideshowLightbox} from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'

function Mathgallery() {
  return (
    <div className="mx-auto pb-40 bg-black">
      <p className="text-2xl mt-20 md:text-4xl mb-5 lg:text-7xl text-white font-bold inter-var text-center">
   MATHS
      </p>

      <div className="flex w-full flex-col p-10">
        
        <Tabs aria-label="Options">
          <Tab key="GK" title="Circle">
         
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Circle.map((e) => (
               
              <Gallery props={e.src}/>
           
              ))}
            </div>
          </Tab>
          {/* <Tab key="eng" title="Nitto Series">
            <Card>
              <CardBody><CardHoverEffectDemo items={}/></CardBody>
            </Card>
          </Tab> */}

          {/* <Tab key="current" title="Current Affairs">
            <Card>
              <CardBody>
                <CardHoverEffectDemo items={CurrentAffairs}/>
              </CardBody>
            </Card>
          </Tab> */}
        </Tabs>
      </div>
    </div>
  );
}

export default Mathgallery;
