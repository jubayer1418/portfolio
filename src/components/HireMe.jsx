import Link from "next/link";
import { CircularText } from "./Icons";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute">
      <div className="w-48 h-auto flex items-center justify-center relative ">
        <CircularText
          className={"fill-dark animate-spin-slow md:h-32"}
        ></CircularText>
        <Link
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-r-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark md:w-12 md:h-12  md:text-[10px]"
          href="skjubayer1418@gmail.com"
        >
          Hire me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
