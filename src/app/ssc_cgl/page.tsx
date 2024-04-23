"use client";
 
import Image from "next/image";
// import { Tabs } from "../../components/ui/tabs";
import React from 'react'
import { CardHoverEffectDemo } from '../cardhover';
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import  {CurrentAffairs, EnglishData, Mathsdata}  from "./data";

//import { Dropdown, Link, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

function page() {
  return (
    <div className="max-w-4xl mx-auto pb-40 bg-black">
      <p className="text-2xl mt-20 md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        SSC CGL
      </p>
      
      <div className="flex w-full flex-col">
      <Tabs aria-label="Options">
        <Tab key="math" title="Maths">
          <Card>
            <CardBody>
             <CardHoverEffectDemo data={Mathsdata}/>
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="eng" title="English">
          <Card>
            <CardBody>
              <CardHoverEffectDemo data={EnglishData}/>
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="res" title="Resoning">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="gk" title="GK">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="current" title="Current Affairs">
          <Card>
            <CardBody>
             <CardHoverEffectDemo data={CurrentAffairs}/>
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
    </div>  
      </div>
  )
}

export default page


 const  TabsDemo=()=> {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Product Tab</p>
          {/* <DummyContent /> */}
        </div>
      ),
      data:[]
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
         
          {/* <DummyContent /> */}
        </div>
      ),
      data:[]
    },
    {
      title: "Maths",
      value: "maths",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Maths</p>
          {/* <DummyContent /> */}
        </div>
      ),
      data:Mathsdata
    },
    {
      title: "Resoning",
      value: "Resoning",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Resoning</p>
          {/* <DummyContent /> */}
        </div>
      ),
      data:Mathsdata
    },
    {
      title: "English",
      value: "english",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>English</p>
          {/* <DummyContent /> */}
        </div>
      ),
      data:Mathsdata
    },
    {
      title: "Current Affairs",
      value: "CurrentAffairs",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>CurrentAffairs</p>
          {/* <DummyContent /> */}
        </div>
      ),
      data:CurrentAffairs
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Current Affairs</p>
          <CardHoverEffectDemo data={CurrentAffairs}/>
        </div>
      ),
      data:[]
    }
  ];
 
  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      {/* <Tabs tabs={tabs} /> */}
    </div>
  );
}
 
const Maths = () => {
  return (
    <Image
      src="https://ssc.gov.in/assets/sscLogo.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const English = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
const GK_GS = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
const Reasoning = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};