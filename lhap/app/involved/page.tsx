"use client";
import Image from "next/image";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import { firebaseApp } from "@/firebaseClient";
import { createUserDBEntry } from "@/components/util/userDBFunctions";
import { useRouter } from "next/navigation";
import PageShell from "@/components/PageShell";

export default function HomePage() {
  const [uid, setUid] = useState<string>("");
  return (
    <PageShell uid={uid} setUid={(newUid) => setUid(newUid)}>
      <Home />
    </PageShell>
  );
}
function Home() {


  const router = useRouter();

  const navButtons = [
    {
      title: "Volunteer",
      description:
        "Join to be a volunteer for Lung Health Ambassadors Today.",
      imageSrc: "/assets/blue.jpeg",
      link: "/programs",
    },
    {
      title: "Apply to be a Mentor",
      description: "Apply to be a Mentor for Lung Health Ambassadors Today.",
      imageSrc: "/assets/blue.jpeg",
      link: "/ourteam",
    },
    {
      title: "Initiate a Program",
      description: "Apply to initiate a program that will help educate students.",
      imageSrc: "/assets/blue.jpeg",
      link: "/about",
    },
  ];
  const buttonWidth = 200 / navButtons.length; // Calculate the width percentage for each button

  const buttons = navButtons.map((button, index) => {
    const [isHovered, setIsHovered] = useState(false); // State to track hover status
    return (
      <div
        key={index}
        className="flex flex-col items-center gap-2 p-2 rounded-lg transition-all duration-300 ease-in-out"
        style={{
          backgroundImage: `url('${button.imageSrc}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: `${buttonWidth}%`, // Set width as a percentage of the container
          height: "600px",
          opacity: isHovered ? 0.7 : 1, // Dynamic opacity based on hover
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <h3 className="text-xl font-bold text-white">{button.title}</h3>
          <p className="text-white">{button.description}</p>
          <button
            className="mt-2 border-2 border-blue-500 hover:border-blue-700 text-blue-500 font-bold py-1 px-2 rounded hover:bg-blue-500 hover:text-white transition-colors"
            onClick={() => router.push(button.link)}
          >
            Learn More
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="flex flex-col h-auto max-w-4xl mx-auto">
      <br></br>
      <br></br>
      <section>
        <div
          className="relative bg-cover bg-center h-screen"
          style={{
            backgroundImage: `url('/assets/involved.png')`,
            width: "900px",
            height: "300px",
          }}
        ></div>
      </section>
      <div className="flex flex-col flex-1 w-full">
        <div className="space-y-3">
          <section className="py-20">
            <div className="flex gap-1">
              <div className="flex-1 max-w-md">
                <h2 className="text-4xl font-bold">Get Involved</h2>
                <br></br>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="flex-1">
                <Image
                  src="/assets/hospital.png"
                  alt="About US"
                  width={500}
                  height={300}
                />
              </div>
            </div>
          </section>
          <div className="flex flex-row justify-center gap-4 mx-auto px-4">
            {buttons}
          </div>
        </div>
      </div>
    </div>
  );
}
