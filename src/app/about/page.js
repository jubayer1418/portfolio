"use client";
import AnimatedText from "@/components/AnimatedText";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import profilePic from "../../../public/images/profile/developer-pic-2.jpg";
const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]),
    useEffect(() => {
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      });
    }, [springValue, value]);
  return <span ref={ref}></span>;
};
const page = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Layout className="pt-16">
        <AnimatedText
          className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          text={"passion Fuels Purpose!"}
        ></AnimatedText>
        <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 ">
          <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
              Biography
            </h2>
            <p className="font-medium">
              Hi, I'm jubayer, a full stack web developer and UI/UX designer
              with a passion for creating beautiful, functional, and
              user-centered digital experiences. With 2 years of experience in
              the field. I am always looking for new and innovative ways to
              bring my clients' visions to life.
            </p>
            <p className="font-medium my-8">
              - I believe that design is about more than just making things look
              pretty – it's about solving problems and creating intuitive,
              enjoyable experiences for users.
            </p>
            <p className="font-medium">
              - Whether I'm working on a website, or other digital product, I
              bring my commitment to design excellence and user-centered
              thinking to every project I work on. I look forward to the
              opportunity to bring my skills and passion to your next project.
            </p>
            <nav className="flex items-center justify-center flex-wrap mt-2">
              <motion.a
                href="https://www.facebook.com/sk01787351418"
                target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mr-3 sm:mx-1"
              >
                <TwitterIcon></TwitterIcon>
              </motion.a>
              <motion.a
                href="https://github.com/jubayer1418"
                target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mr-3 sm:mx-1"
              >
                <GithubIcon></GithubIcon>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mohammad-jubayer1418/"
                target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mr-3 sm:mx-1"
              >
                <LinkedInIcon></LinkedInIcon>
              </motion.a>
            </nav>
          </div>
          <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 xl:col-span-4 md:order-1 md:col-span-8">
            <div className="absolute top-0 -right-3 h-[103%] -z-10 w-[102%] rounded-[2rem] bg-dark" />
            <Image
              src={profilePic}
              alt="jubayer"
              className="w-full h-auto rounded-2xl "
              priority
              sizes="(max-width:768px) 100vw,(max-width:1200px),50vw,33vw"
            />
          </div>
          <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
            <div className="flex flex-col items-end justify-center ">
              <span className="inline-block text-7xl font-bold">
                <AnimatedNumbers value={50} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-dark/75">
                satisfied clients
              </h2>
            </div>
            <div className="flex flex-col items-end justify-center ">
              <span className="inline-block text-7xl font-bold">
                {" "}
                <AnimatedNumbers value={40} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-dark/75">
                Projects completed
              </h2>
            </div>
            <div className="flex flex-col items-end justify-center ">
              <span className="inline-block text-7xl font-bold">
                {" "}
                <AnimatedNumbers value={2} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-dark/75">
                years of experience
              </h2>
            </div>
          </div>
        </div>
        <Skills></Skills>
      </Layout>
    </div>
  );
};

export default page;
