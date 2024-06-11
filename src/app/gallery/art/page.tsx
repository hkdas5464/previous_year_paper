"use client";
import React from "react";
import { CardHoverEffectDemo } from "../../cardhover";

import {
  Tabs,
  Tab,
  Card,
  CardBody,
  CardFooter,
  Image,
} from "@nextui-org/react";
import LightGallery from "lightgallery/react";
import Link from "next/link";
import {SlideshowLightbox} from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'

function Mathgallery() {
  return (
    <div className="mx-auto pb-40 bg-black">
      <p className="text-2xl mt-20 md:text-4xl mb-5 lg:text-7xl text-white font-bold inter-var text-center">
  Art & Culture MIND MAP
      </p>

      <div className="flex w-full flex-col p-10">
        
        <Tabs aria-label="Options">
          <Tab key="GK" title="Circle">
         
            <div className="">
             
                 <SlideshowLightbox className=" grid grid-cols-2 md:grid-cols-3 gap-4 " showThumbnails={true}>
                 <img className="w-full rounded" src="https://lh3.googleusercontent.com/pw/AP1GczNwOylTGSKaoIpHxXikCsdO5uDzd0-90GtTIQdZaGfYZwY5V1wdmTsTwbdAMHUSFDlvSqcN61-wM2EUrQjd8pEIOhCemo6-eMOYAIRdgZ7e-0v7VG2bIPoJiweXxVqj_mmoL5l1j4Ah4cukSrbiy0I=w1744-h865-s-no-gm?authuser=0" key={Math.random()} />
                 <img className="w-full rounded" src="https://lh3.googleusercontent.com/pw/AP1GczNgqyn0Knrdlbyyt0aR8nTZqdR2XADKST9gYhfohVMqu73SrtjU6wHqyWWr_xF2ID550qHvDxMXwH4SsK2-Yw6Zn9RAQiGzzpJs8mZGUSUexsR-yclC_VBDKB2bcuVW_KzD9nXRmjriRzg7BJqfnOs=w1744-h840-s-no-gm?authuser=0" key={Math.random()} />
                 <img className="w-full rounded" src="https://lh3.googleusercontent.com/pw/AP1GczNs9N_dvZ2BUEp6hmVsYJzhRJ9408f-IB9VyjKHgqHBKhQbLibYeOLusmiCuW9rZAroRG9YR-9mc-G5ilE3ZOKVDtbn9kVu0W4ivPWpm7ThiwIuWlMOJUYwMqWTYzo5KV6bJ57ZX3aDCvoHh50JD18=w497-h279-s-no-gm?authuser=0" key={Math.random()} />
                 <img className="w-full rounded" src="https://lh3.googleusercontent.com/pw/AP1GczPMpx7KvN8w3FeDlPMAQeUiEyWCYmOwGGJV_rGOssmQ4qWAiHgIPglLs1E13bSexRADxwN42jBC7s0Sadoq7e2UrBuNG6WLOzWNN1idSExPhVfOyICfMbhYg-0UlbsO-pI38ah8oaVNr2i_380lscM=w691-h913-s-no-gm?authuser=0" key={Math.random()} />
                 <img className="w-full rounded" src="https://cdn1.byjus.com/wp-content/uploads/2018/11/free-ias-prep/2017/01/20092135/timeline-for-medieval-india.jpg" key={Math.random()} />
                 <img className="w-full rounded" src="https://cdn1.byjus.com/wp-content/uploads/2018/11/free-ias-prep/2017/01/20092249/Timeline-for-Modern-india.jpg" key={Math.random()} />
                 <img className="w-full rounded" src="https://scontent.fpat2-6.fna.fbcdn.net/v/t1.6435-9/105317848_1513342532199155_5138679550597987415_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Bq9FGCrtxMAQ7kNvgFv1pss&_nc_ht=scontent.fpat2-6.fna&oh=00_AYB4K3zhqRjPbh-FPLklqUechR5dBXlLwT5GrIHn1ECqsw&oe=668F981A" key={Math.random()} />
                 <img className="w-full rounded" src="https://imgv2-2-f.scribdassets.com/img/document/708856976/original/a3b9d68654/1715926696?v=1" key={Math.random()} />
                 <img className="w-full rounded" src="https://i.pinimg.com/736x/ba/11/3d/ba113d4e60f2f37ffd0e1b117536adba.jpg" key={Math.random()} />
                 <img className="w-full rounded" src="https://lh3.googleusercontent.com/pw/AP1GczNLgwgl78NghjzczE_YzGcvW58o-EV2lG2_I5xUcB3eVQpmwj0kuzLoEQ_qhPj5acGNt-VDbO1O1NsasrXEWlJ9Cr1F-qRME0jbKufMIBJnlT3_cQP3UniCXL5DfZuLK5hovDxp6_e9_E9BOSp5Dz8=w914-h514-s-no-gm?authuser=0" key={Math.random()} />
                 <img className="w-full rounded" src="https://lh3.googleusercontent.com/pw/AP1GczPPyPqohJeGLBHSRiCYIjny72purP75Q8BZGN04XAvYwuaxq_3t9w0bQ2zKVoyerLmzJ16ZC6jZS-z2ecGR0Rvgv-MLleOG9iDMX512us8cXkrbRJ75I8QzYPrvQ0ArrUT3mU_FnSarWxW77CpsE0o=w625-h600-s-no-gm?authuser=0" key={Math.random()} />
                 <img className="w-full rounded" src="https://vitrosens.com/wp-content/uploads/2023/06/What-Are-the-Types-of-B-Vitamins-How-to-Use-the-Vitamin-B-Rapid-Test-Kit-768x768.jpg" key={Math.random()} />

                 <img className="w-full rounded" src="https://exampariksha.com/wp-content/uploads/2014/12/16-mahajanpadas.png" key={Math.random()} />

                 <img className="w-full rounded" src="https://img.brainkart.com/imagebk44/7LRlDrY.jpg" key={Math.random()} />
                 <img className="w-full rounded" src="https://pbs.twimg.com/media/FbGUgywagAYZ9Pr?format=jpg&name=medium" key={Math.random()} />
                 <img className="w-full rounded" src="https://lh3.googleusercontent.com/pw/AP1GczNHBKzb3qCdOzppW_Cvzc_29G2dJ5E_5paMAIbknA688wXQAPwS_0ic-hAqc835FUATcAmaDtspG2UU1_U7w3tROk7GZrwa-qs2TmxqRkFvhtqxS2bVubWvklx-VM6r36I-IX5acZ12w4vQ3J47bJ4=w736-h703-s-no-gm?authuser=0" key={Math.random()} />

             

                 
               </SlideshowLightbox>
               
              {/* // <Gallery key={e.src} props={e.src}/> */}
           
            
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
