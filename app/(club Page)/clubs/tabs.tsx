import { Badge } from "@/components/ui/badge";
import { StarFilledIcon } from "@radix-ui/react-icons";
import React from "react";
import photoImage from "../../../public/assets/section1Image0.png";
import Image from "next/image";
const Overview = () => {
  return (
    <div className="flex flex-col gap-y-6 p-4 font-serif">
      {/* <div className="headerSection px-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-4xl font-semibold">Title</div>
            <div className="mt-4 text-sm text-secondary-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <Badge
            variant={"outline"}
            className="flex items-center space-x-2 rounded-lg border border-white text-lg"
          >
            <div>4.5</div>
            <StarFilledIcon className="h-6 w-6 text-yellow-500" />
          </Badge>
        </div>
        <div className="flex h-96 items-center">
          <span>More content goes here....</span>
        </div>
      </div> */}
      <div className="flex flex-col">
        <h1 className="mb-3 text-3xl">Overview</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          quaerat incidunt aliquam iusto porro, sequi laudantium perferendis
          velit modi in debitis illo illum eum sapiente consequuntur eveniet et
          placeat nam consectetur. Eaque.
        </p>
      </div>
      <div>
        <h1 className="mb-3 text-3xl">Opening Hours</h1>
        <div className="flex flex-col gap-y-3 border-y border-dotted py-2">
          <span>Mon - Thu 10:00 - 22:00</span>
          <span className="border-y border-dotted py-2">
            Fri - Sat 10:00 - 23:00
          </span>
          <span>Sun Closed</span>
        </div>
      </div>
      <div>
        <h1 className="mb-3 text-3xl">Rating</h1>
        <div className="flex gap-x-2">
          <StarFilledIcon className="h-6 w-6 text-yellow-500" />
          <StarFilledIcon className="h-6 w-6 text-yellow-500" />
          <StarFilledIcon className="h-6 w-6 text-yellow-500" />
          <StarFilledIcon className="h-6 w-6 text-yellow-500" />
          <StarFilledIcon className="h-6 w-6 text-yellow-500" />
        </div>
      </div>
    </div>
  );
};

const Photos = () => {
  return (
    <div className="p-4">
      <h1 className="mb-3 text-3xl">Photos</h1>
      <div className="flex justify-between">
        <Image
          className="aspect-square rounded-full"
          height={200}
          width={200}
          src={photoImage}
        />
        <Image
          className="aspect-square rounded-full"
          height={200}
          width={200}
          src={photoImage}
        />
        <Image
          className="aspect-square rounded-full"
          height={200}
          width={200}
          src={photoImage}
        />
        <Image
          className="aspect-square rounded-full"
          height={200}
          width={200}
          src={photoImage}
        />
      </div>
      <div className="my-5 h-[2px] w-full bg-white"></div>

      <div className="flex gap-x-2">
        <div className="grid grid-cols-2 gap-x-3">
          <Image
            className="roudned-md"
            height={500}
            width={1000}
            src={photoImage}
          />
          <Image
            className="roudned-md"
            height={500}
            width={1000}
            src={photoImage}
          />
        </div>
      </div>
    </div>
  );
};

export { Overview, Photos };
