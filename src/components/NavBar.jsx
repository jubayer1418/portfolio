"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "./Icons";
import Logo from "./Logo";
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  console.log(router);
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router == href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };
  console.log(router);
  return (
    <button
      href={href}
      className={`${className} relative group text-light my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router == href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="w-full  px-32 py-12 font-medium flex items-center justify-between relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        onClick={handleClick}
        className=" flex-col justify-center items-center hidden lg:flex"
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title={"Home"} className="mr-4" />
          <CustomLink href="/about" title={"About"} className="mx-4" />
          <CustomLink href="/projects" title={"Project"} className="mx-4" />
          <CustomLink href="/Contact" title={"Contact"} className="ml-4" />
        </nav>

        <nav className="flex items-center justify-center flex-wrap ">
          <motion.a
            href="https://www.facebook.com/sk01787351418"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <TwitterIcon></TwitterIcon>
          </motion.a>
          <motion.a
            href="https://github.com/jubayer1418"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <GithubIcon></GithubIcon>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/mohammad-jubayer1418/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <LinkedInIcon></LinkedInIcon>
          </motion.a>
        </nav>
      </div>
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 bg-dark/90 rounded-lg backdrop-blur-md py-32 "
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title={"Home"}
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title={"About"}
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title={"Project"}
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/Contact"
              title={"Contact"}
              className=""
              toggle={handleClick}
            />
          </nav>

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
        </motion.div>
      ) : null}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
