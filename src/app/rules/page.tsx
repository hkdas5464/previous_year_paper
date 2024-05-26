"use client";
import React from 'react'
import { CardHoverEffectDemo } from '../cardhover';
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import  { Englishrule, MathsData, Reasoning}  from "./data";



function Rules() {
  return (
    <div className="max-w-4xl mx-auto pb-40 bg-black">
      <p className="text-2xl mt-20 md:text-4xl mb-5 lg:text-7xl text-white font-bold inter-var text-center">
       RULES
      </p>
      
      <div className="flex w-full flex-col">
      <Tabs aria-label="Options">
        <Tab key="english" title="English">
          <Card>
            <CardBody>
             <CardHoverEffectDemo items={Englishrule}/>
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="maths" title="Maths">
          <Card>
            <CardBody>
              <CardHoverEffectDemo items={MathsData}/>
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="res" title="Resoning">
          <Card>
            <CardBody>
              {/* <CardHoverEffectDemo items={Reasoning}/> */}
            </CardBody>
          </Card>  
        </Tab>
 
      </Tabs>
    </div>  
      </div>
  )
}

export default Rules


