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

type Program = {
  name: string;
  description: string;
  imageName: string; // Assuming you have the image name for local files or URLs for remote ones
};

// Example programs data
const programsData: Program[] = [
  {
    name: "Program 1",
    description: "Description for Program 1...",
    imageName: "/assets/program1.png",
  },
  {
    name: "Program 2",
    description: "Description for Program 2...",
    imageName: "/assets/program2.png",
  },
  {
    name: "Program 3",
    description: "Description for Program 3...",
    imageName: "/assets/program3.png",
  },
  // ...more programs
];

// Define the ProgramsMenu component
const ProgramsMenu = ({ onSelectProgram }: { onSelectProgram: (program: Program) => void }) => {
  return (
    <div className="flex flex-col bg-gray-100 p-4">
      {programsData.map((program) => (
        <button
          key={program.name}
          className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 mb-2"
          onClick={() => onSelectProgram(program)}
        >
          {program.name}
        </button>
      ))}
    </div>
  );
};

// Define the main component for the About page
export default function Programs() {
    const [uid, setUid] = useState<string>("");
    const [selectedProgram, setSelectedProgram] = useState<string>("Program 1"); // Initialize with the first program

    const handleSelectProgram = (program: string) => {
      setSelectedProgram(program);
      // You can also perform other actions here based on the selected program
    };
  return (
    <PageShell uid={uid} setUid={(newUid) => setUid(newUid)}>
      {/* Pass the handler to the ProgramsContent */}
      <ProgramsContent onSelectProgram={handleSelectProgram} />
    </PageShell>
  );
}



// Define the content component for the About page
const ProgramsContent = ({ onSelectProgram }: { onSelectProgram: (program: string) => void }) => {
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

      {/* <section>
        <div className="flex flex-col h-auto max-w-4xl mx-auto">
          <ProgramsMenu onSelectProgram={onSelectProgram} />
        </div>
      </section> */}

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
