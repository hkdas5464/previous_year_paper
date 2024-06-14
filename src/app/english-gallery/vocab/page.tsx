'use client'
import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import { vocab_day_1, vocab_day_2, vocab_day_3 } from './data'
import './app.css'


interface Subjects {
    voc: String,
    meaning: String
}



export default function App() {
    const [selected, setSelected] = React.useState("photos");

    return (
        <div className="max-w-4xl mx-auto pb-40 bg-black">
            <p className="text-2xl mt-20 md:text-4xl mb-5 lg:text-7xl text-white font-bold inter-var text-center">
                VOCAB
            </p>
            <div className="flex w-full flex-col">
                <Tabs aria-label="Options" variant="underlined">
                    <Tab key="GK" title="Day_1">

                        <Card className="gap-2 grid grid-cols-2 sm:grid-cols-4">
                            {vocab_day_1.map((e) => (
                                <CardBody key={Math.random()} className="overflow-visible p-0">
                                    <div className="flip-card">
                                        <div className="flip-card-inner">
                                            <div className="flip-card-front">
                                                <p className="title">{e.voc}</p>

                                            </div>
                                            <div className="flip-card-back">
                                                <p className="title">{e.meaning}</p>

                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            ))}
                        </Card>

                    </Tab>
                    <Tab key="current" title="Day_2">

                        <Card className="gap-2 grid grid-cols-2 sm:grid-cols-4">
                            {vocab_day_2.map((e) => (
                                <CardBody key={Math.random()} className="overflow-visible p-0">
                                    <div className="flip-card">
                                        <div className="flip-card-inner">
                                            <div className="flip-card-front">
                                                <p className="title">{e.voc}</p>

                                            </div>
                                            <div className="flip-card-back">
                                                <p className="title">{e.meaning}</p>

                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            ))}
                        </Card>
                    </Tab>

                    <Tab key="Day_3" title="Day_3">

                        <Card className="gap-2 grid grid-cols-2 sm:grid-cols-4">
                            {vocab_day_3.map((e) => (
                                <CardBody key={Math.random()} className="overflow-visible p-0">
                                    <div className="flip-card">
                                        <div className="flip-card-inner">
                                            <div className="flip-card-front">
                                                <p className="title">{e.voc}</p>

                                            </div>
                                            <div className="flip-card-back">
                                                <p className="title">{e.meaning}</p>

                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            ))}
                        </Card>
                    </Tab>

                    <Tab key="Day_4" title="Day_4">

                        <Card className="gap-2 grid grid-cols-2 sm:grid-cols-4">
                            {vocab_day_3.map((e) => (
                                 <CardBody key={Math.random()} className="overflow-visible p-0">
                                    <div className="flip-card">
                                        <div className="flip-card-inner">
                                            <div className="flip-card-front">
                                                <p className="title">{e.voc}</p>

                                            </div>
                                            <div className="flip-card-back">
                                                <p className="title">{e.meaning}</p>

                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            ))}
                        </Card>
                    </Tab>

                    <Tab key="Day_5" title="Day_5">

                        <Card className="gap-2 grid grid-cols-2 sm:grid-cols-4">
                            {vocab_day_3.map((e) => (
                                  <CardBody key={Math.random()} className="overflow-visible p-0">
                                    <div className="flip-card">
                                        <div className="flip-card-inner">
                                            <div className="flip-card-front">
                                                <p className="title">{e.voc}</p>

                                            </div>
                                            <div className="flip-card-back">
                                                <p className="title">{e.meaning}</p>

                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            ))}
                        </Card>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}
