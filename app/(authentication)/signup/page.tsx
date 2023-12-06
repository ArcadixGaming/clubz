import React from "react";
import { SignupFormDemo } from "./signup-form";
import { auth } from "@/lib/auth/config";
import { redirect } from "next/navigation";
import { Images } from "@/components/icons";
import Image from "next/image";

const page = async () => {
  const session = await auth();

  // if (session && session?.user) {
  // 	redirect('/');
  // }
  return (
    <section className="flex h-full w-full flex-row items-center justify-center px-10 py-10">
      <div className="relative hidden md:flex h-full w-1/2 items-center justify-center">
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
        <SignupFormDemo />
      </div>
      <Image
        src="/assets/Ellipse 3.png"
        alt=""
        width={2000}
        height={2000}
        className="absolute top-16 right-0 h-40 w-64 -z-10"
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
        className="absolute bottom-0 right-0 h-52 w-28 z-10"
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
