import React from "react";
import { LoginFormDemo } from "./login-form";
import Image from "next/image";
// import { Images } from "@/components/icons";

const page = () => {
  return (
    <section className="flex h-full w-full flex-row items-center justify-center p-10 mt-8">
      <div className="relative hidden h-full w-1/2 items-center justify-center md:flex">
        <Image
          src="/assets/Smart People 1.png"
          alt=""
          width={1000}
          height={1000}
          className="h-7/12 absolute w-7/12"
        />
        <Image
          src="/assets/Vector 14.png"
          alt=""
          width={1000}
          height={1000}
          className="h-9/12 absolute -right-10 -z-10 w-9/12"
        />
        <Image
          src="/assets/Vector 15.png"
          alt=""
          width={1000}
          height={1000}
          className="h-9/12 absolute -left-40 -z-10 w-9/12"
        />
        <Image
          src="/assets/Ellipse 2.png"
          alt=""
          width={1000}
          height={1000}
          className="absolute -bottom-48 -left-16 h-72 w-60"
        />
      </div>
      <div className="w-full md:w-1/2">
        <LoginFormDemo />
      </div>
      <Image
        src="/assets/Ellipse 3.png"
        alt=""
        width={2000}
        height={2000}
        className="absolute right-0 top-16 -z-10 h-40 w-64"
      />
      <Image
        src="/assets/note.png"
        alt=""
        width={1000}
        height={1000}
        className="absolute right-48 top-28 h-24 w-16"
      />
      <Image
        src="/assets/image 8.png"
        alt=""
        width={2000}
        height={2000}
        className="absolute bottom-0 right-0 z-10 h-52 w-28"
      />
      <Image
        src="/assets/Ellipse 1.png"
        alt=""
        width={2000}
        height={2000}
        className="absolute -bottom-8 -right-1 h-28 w-80"
      />
    </section>
  );
};

export default page;
