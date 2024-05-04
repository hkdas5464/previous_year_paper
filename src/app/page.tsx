'use client'
import Image from "next/image";
import Link from "next/link";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";
import MyNavbar from "./Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <div className="flex w-full flex-col">
        <div className="z-10 w-full max-w-6xl items-center justify-between font-mono text-sm lg:flex">
          <p >

            {/* <code className="font-mono font-bold">src/app/page.tsx</code> */}
          </p>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <h2>Harendra Kumar</h2>
            </a>
          </div>
        </div>

        <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
          {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
        </div>

        <div className="flex w-full flex-col">
          <Tabs aria-label="Options">
            <Tab key="video" title="Video">
              <Card>
                <CardBody>
                  <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-6xl lg:grid-cols-5 lg:text-left">
                    <Link
                      href={"videos/maths"}
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"

                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        MATHS{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        - Rakesh Yadav Sir.
                      </p>
                    </Link>

                    <Link
                      href="videos/english"
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"

                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        English{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        - BY Neetu Mam         </p>
                    </Link>

                    <Link
                      href={"videos/geography"}
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"

                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        Geography{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        By Madhukar Sir                      </p>
                    </Link>

                    <Link
                      href={"videos/history"}
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"

                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        History{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        by Madhukar sir                      </p>
                    </Link>

                    <Link
                      href={"videos/economics"}
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"

                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        Economics{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
                        by Madhukar sir                      </p>
                    </Link>
                    <Link
                      href="videos/parmar"
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"

                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        Parmar {" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
                        - By Parmar Sir                      </p>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="notes" title="Notes">
              <Card>
                <CardBody>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </CardBody>
              </Card>
            </Tab>
            <Tab key="pyq" title="Previous Year Questions">
              <Card>
                <CardBody>

                  <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-6xl lg:grid-cols-5 lg:text-left">
                    <Link
                      href={"ssccgl"}
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"

                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        SSC CGL{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        Find in-depth information about Next.js features and API.
                      </p>
                    </Link>

                    <Link
                      href="/ssccpo"
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"

                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        SSC CPO{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        SUB INSPECTOR IN CAPF          </p>
                    </Link>

                    <Link
                      href={"sscchsl"}
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"

                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        SSC CHSL{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        Explore starter templates for Next.js.
                      </p>
                    </Link>

                    <Link
                      href={"sscgd"}
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"

                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        SSC GD{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-sm opacity-50">
                        Constable in CAPF
                      </p>
                    </Link>

                    <Link
                      href={"sscmts"}
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"

                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        SSC MTS{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
                        Instantly deploy your Next.js site to a shareable URL with Vercel.
                      </p>
                    </Link>
                    <Link
                      href="/rrbalp"
                      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"

                      rel="noopener noreferrer"
                    >
                      <h2 className="mb-3 text-2xl font-semibold">
                        RRB ALP{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                          -&gt;
                        </span>
                      </h2>
                      <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
                        Instantly deploy your Next.js site to a shareable URL with Vercel.
                      </p>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </Tab>

          </Tabs>
        </div>
      </div>
    </main>
  );
}
