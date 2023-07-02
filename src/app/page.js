import AnimatedText from "@/components/AnimatedText";
import HireMe from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import lightBulb from "../../public/images/miscellaneous_icons_1.svg";
import profilePic from "../../public/images/profile/sk.png";
export default function Home() {
  return (
    <main className="text-dark w-full flex items-center  min-h-screen">
      <Layout className="pt-0 md:pt-16 sm:pt-8">
        <div className="flex items-center justify-center w-full lg:flex-col">
          <div className="w-1/2 md:w-full ">
            <Image
              src={profilePic}
              alt=""
              className="w-full h-auto lg:hidden md:inline-block md:w-full"
            />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
            <AnimatedText
              text="Turning Vision Into Reality With Code And Design"
              className="!text-6xl !text-left xl:!text-5xl lg:!text-center md:!text-5xl sm:!text-3xl"
            />
            <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
            <div className="flex items-center self-start mt-2 lg:self-center">
              <Link
                href="/Md. Jubier Hossen_2.pdf"
                target={"_blank"}
                className="flex items-center text-lg font-semibold bg-dark text-light p-2.5 px-6 rounded-lg hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark md:p-2 md:px-4 md:text-base "
                download={true}
              >
                Resume <LinkArrow className={"w-6 ml-1"}></LinkArrow>
              </Link>
              <Link
                className="ml-4 text-lg font-medium capitalize
                 text-dark underline md:text-base"
                href="/skjubayer1418@gmail.com"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Layout>
      <HireMe></HireMe>
      <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
        <Image
          src={lightBulb}
          alt="codebucks"
          className="w-full h-auto"
          property
          sizes="(max-width:768px) 100vw,(max-width:1200px),50vw,50vw"
        />
      </div>
    </main>
  );
}
