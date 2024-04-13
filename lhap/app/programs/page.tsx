"use client";
import { db } from "../../firebaseClient";
import { collection, doc, getDoc } from "firebase/firestore";
import { useState, useEffect, ReactElement } from "react";
import PageShell from "../../components/PageShell";

export default function About() {
  const [uid, setUid] = useState<string>("");
  return (
    <PageShell uid={uid} setUid={(newUid) => setUid(newUid)}>
      <Home />
    </PageShell>
  );
}

type Image = {
  caption: string;
  file_name: string;
};

const img1: Image = {
  caption: "Placeholder",
  file_name: "logo_short.png",
};
const img2: Image = {
  caption: "Placeholder",
  file_name: "logo_short.png",
};
const img3: Image = {
  caption: "Placeholder",
  file_name: "logo_short.png",
};

const images: Image[] = [img1, img2, img3];

const Home = () => {
  let images_section: ReactElement[] = [];
  images.forEach((image, index) => {
    images_section.push(
      <div className="px-10 py-20">
        <img
          src={`/assets/about/${image.file_name}`}
          width={"800px"}
          height={"800px"}
        />
        <div className="text-center italic mt-1 px-5 py-2 w-full lg:text-lg text-lg">
          {image.caption}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="bg-purple-700 flex flex-col items-center justify-center w-full h-[150px] lg:h-[200px]">
        <div className="text-left w-full px-10 lg:px-[150px]">
          <h1 className="lg:text-6xl text-4xl text-white">Programs</h1>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-2.5 lg:gap-10">
        <div className=" px-10 py-10 lg:pr-0 lg:pl-20 lg:py-20 space-y-6 lg:w-1/2 w-full flex flex-col justify-center">
          <h1 className="transition-all duration-300 lg:text-4xl text-4xl font-bold">
            Our Mission
          </h1>
          <div className="transition-all duration-300 w-full lg:text-2xl text-lg">
            Welcome to the Lung Health Ambassadors Program. Lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum .
          </div>

          <br></br>
          <h1 className="transition-all duration-300 lg:text-4xl text-4xl font-bold">
            Volunteering
          </h1>
          <br></br>
          <div className="transition-all duration-300 w-full lg:text-2xl text-lg">
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum .
          </div>
          <div className="transition-all duration-300 w-full lg:text-2xl text-lg">
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum .
          </div>
          <div className="transition-all duration-300 w-full lg:text-2xl text-lg">
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum .
          </div>
          <div className="transition-all duration-300 w-full lg:text-2xl text-lg">
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum .
          </div>

          <div className="transition-all duration-300 w-full lg:text-2xl text-lg">
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum .
          </div>
          <div className="transition-all duration-300 w-full lg:text-2xl text-lg">
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum .
          </div>
          <div className="transition-all duration-300 w-full lg:text-2xl text-lg">
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum .
          </div>
        </div>

        <div className="transition-all duration-300 scale-100 transform-scale-y-[-1]">
          <div className="px-10 py-2"></div>

          <div className="lg:pt-[100px]">{images_section}</div>
        </div>
      </div>
    </div>
  );
};
