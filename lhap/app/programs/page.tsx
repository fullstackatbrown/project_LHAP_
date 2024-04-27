"use client";
import { useState, ReactElement } from "react";
import Image from "next/image";
import PageShell from "../../components/PageShell";
import ProgramsGallery from "@/components/ProgramsGallery";

// Define the TypeScript type for images
type Image = {
  caption: string;
  file_name: string;
};


// Define the main component for the About page
export default function Programs() {
  const [uid, setUid] = useState<string>("");
  return (
    <PageShell uid={uid} setUid={(newUid) => setUid(newUid)}>
      <ProgramsContent />
    </PageShell>
  );
}

// Define the content component for the About page
const ProgramsContent = () => {
  return (
    <div className="flex flex-col h-auto max-w-4xl mx-auto">
      <section className="py-20">
        <div className="flex gap-1">
          <div className="flex-1 max-w-md">
            <h2 className="text-4xl font-bold">Our Programs</h2>
            <br></br>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/assets/programs.png"
              alt="About Us"
              width={500}
              height={300}
            />
          </div>
        </div>
      </section>

      <section
        style={{
          color: "white",
          textAlign: "center",
          padding: "20px 0", // Add padding above and below the text
          width: "100%",
        }}
      >
        <h2 className="text-4xl font-bold">Program Gallery</h2>
      </section>
      <section>
        <ProgramsGallery />
      </section>
 
    </div>
  );
};
