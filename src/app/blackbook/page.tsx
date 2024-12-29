"use client";
import React from 'react'
import { CardHoverEffectDemo } from '../cardhover';
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import  {CurrentAffairs, EnglishData, Mathsdata, Reasoning}  from "./data";
import { AccordionAPP } from './Accordion.';
import { BackgroundLines } from './lib/background-lines';
import { BackgroundBeamsWithCollision } from './lib/background-beams-with-collision';



function SSCCPO() {
  return (
    <BackgroundBeamsWithCollision>

    <BackgroundLines>
    <div className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl mt-20 md:text-4xl mb-5 lg:text-7xl font-bold inter-var text-center">
        SSC CHSL
      </p>
      
      <AccordionAPP/>
      </div>
      </BackgroundLines>
      </BackgroundBeamsWithCollision>
  )
}

export default SSCCPO


