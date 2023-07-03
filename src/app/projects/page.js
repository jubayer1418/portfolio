import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import project1 from "../../../public/images/Screenshot_30.png";
import project2 from "../../../public/images/Screenshot_32.png";
import project3 from "../../../public/images/Screenshot_33.png";
const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative xs:p-4">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width:768px) 100vw,(max-width:1200px),50vw,50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {" "}
            {title}
          </h2>
        </Link>

        <div className="mt-2 flex items-center w-full justify-between">
          <Link
            href={link}
            target="_blank"
            className="underline text-lg font-semibold md:text-base "
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const page = () => {
  return (
    <div className="w-full mb-16 flex flex-col  items-center justify-center">
      <Layout className="pt-16">
        <AnimatedText
          text={"Imagination Trumps Kholedge!"}
          className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
        />
        <div className="grid grid-cols-12 gap-24 mt-14">
          <div className="col-span-6 sm:col-span-12 hover:shadow-2xl hover:shadow-yellow-200">
            <Project
              title={"THE MARVEL TOY Application"}
              img={project2}
              link="https://marvel-toy.web.app/"
              github="https://github.com/jubayer1418/marvel-toy"
              type={" Project"}
            />
          </div>
          <div className="col-span-6 sm:col-span-12 hover:shadow-2xl hover:shadow-yellow-200">
            <Project
              title={"CHINESE CHEF Application"}
              img={project3}
              link="https://chef-56035.web.app/"
              github="https://github.com/jubayer1418/chef"
              type={" Project"}
            />
          </div>
          <div className="col-span-6 sm:col-span-12 hover:shadow-2xl hover:shadow-yellow-200">
            <Project
              title={"THE MARTIAL ART Application"}
              img={project1}
              link="https://assinment-12-52bf6.web.app/"
              github="https://github.com/jubayer1418/Martial-art"
              type={" Project"}
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default page;
