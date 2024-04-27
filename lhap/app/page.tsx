"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
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
    const subText = ["Lung ", "Health ", "Ambassadors ", "Program ", "RI "];
    const [subTextIndex, setSubTextIndex] = useState(0);
    const [titleSubText, setTitleSubtext] = useState("");
    const [isBlinking, setIsBlinking] = useState(false);

    const router = useRouter();

    useEffect(() => {
      if (subTextIndex < subText.length) {
        let delay = subTextIndex === 0 ? 400 : 200;
        const timeout = setTimeout(() => {
          setTitleSubtext((prevText) => prevText + subText[subTextIndex]);
          setSubTextIndex((prevIndex) => prevIndex + 1);
        }, delay);
        return () => clearTimeout(timeout);
      } else {
        setIsBlinking(true);
        const timeout = setTimeout(() => {
          setIsBlinking(false); // Ensure blinking stops after a single cycle
        }, 1000); // Duration of blink
        return () => {
          clearTimeout(timeout);
        };
      }
    }, [subTextIndex, subText]);

    const navButtons = [
      {
        title: "Programs",
        description:
          "Explore our diverse programs focused on lung health education.",
        imageSrc: "/assets/about/blueno.png",
        link: "/programs",
      },
      {
        title: "Get Involved",
        description: "Meet the dedicated team behind our initiatives.",
        imageSrc: "/assets/about/blueno.png",
        link: "/ourteam",
      },
      {
        title: "About",
        description: "Learn more about our mission and core values.",
        imageSrc: "/assets/about/blueno.png",
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
    <div className="flex flex-col h-auto max-w-4xl mx-auto px-1">
      {/* Welcome Section */}
      <div className="mb-10 mt-12 space-y-3">
        <div className="w-full h-24 flex flex-col items-start gap-2">
          <div className="text-[#0081E8] lg:text-5xl pl-1 text-2xl font-semibold">
            {titleSubText}
            <div
              className={`inline-block w-8 h-8 rounded-full bg-[#5FC7FF] ${isBlinking}`}
            />
          </div>
        </div>
      </div>
      {/* Horizontal Image Section */}
      <div className="relative w-full h-[200px] overflow-hidden">
        <Image
          src="/assets/hospital.png"
          alt="Decorative background strip"
          layout="fill"
          objectFit="cover"
          objectPosition="80% 20%"
          quality={75} // Optionally reduce quality for faster loading times
        />
      </div>
      <br></br>
      {/* Quote Section */}
      <blockquote className="italic border-l-4 text-center border-purple-500 pl-4">
        "Lorem Ipsum Lorem Ipsum Lorem Ipsum." - Full Stack
      </blockquote>
      <br></br>
      <br></br>
      {/* Additional Sections */}
      <div className="flex flex-col flex-1 w-full">
        <div className="space-y-3">
          <h1 className="lg:text-6xl text-5xl font-bold">About</h1>
          <div className="lg:text-3xl text-lg">
            Welcome to the Lung Health Ambassadors RI. Our mission is to educate
            about lung health in youth...
          </div>
          {/* Learn More Button and Arrow */}
          <div className="group flex lg:w-1/3 w-auto gap-1 items-center cursor-pointer">
            <p
              className="lg:text-xl font-bold text-lg group-hover:text-purple-500 group-hover:underline underline-offset-4"
              onClick={() => router.push("/about")}
            >
              Learn More
            </p>
            <ArrowLongRightIcon className="h-9 text-purple-500 group-hover:translate-x-2 transition ease-in-out delay-50" />
          </div>
          <br></br>
          <br></br>
          {/* Mission Statement Section */}
          <div className="flex gap-1">
            <div className="flex-1 max-w-md">
              <h1 className="lg:text-2xl text-1xl font-bold">
                Mission Statement
              </h1>
              <p>
                Welcome to the Lung Health Ambassadors Program. We aim to inform
                young students about lung health and risk factors for lung
                disease. Through this initiative, we aim to build a culture of
                young students to better understand the impact their environment
                has on their health while equipping them with tools they can use
                and build upon. Further, we will provide teachers with resources
                and educational materials that are in accordance with the
                current priorities of the local schools and communities, as well
                as access to healthcare professionals, researchers, and
                scientists for the local schools and their staff.
              </p>
            </div>
            <div className="flex-1">
              <Image
                src="/assets/lunghealth.png"
                alt="Mission Statement"
                width={500}
                height={300}
              />
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className="flex flex-row justify-center gap-4 mx-auto px-4">
            {buttons}
          </div>
        </div>
      </div>
    </div>
  );
}