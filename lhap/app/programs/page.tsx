"use client";
import { useState, ReactElement } from "react";
import Image from "next/image";
import PageShell from "../../components/PageShell";
import Gallery from "../../components/Gallery";

// Define the TypeScript type for images
type Image = {
  caption: string;
  file_name: string;
};

type TimelineEventProps = {
  date: string;
  children: React.ReactNode;
};

// Define the images used on the page
const images: Image[] = [
  { caption: "Placeholder", file_name: "blueno.png" },
  // Uncomment or add more images as needed
  // { caption: "Another Placeholder", file_name: "another_image.png" },
  // { caption: "Additional Placeholder", file_name: "additional_image.png" }
];

const TimelineEvent = ({ date, children }: TimelineEventProps) => {
  return (
    <div className="flex items-center mb-6">
      <div className="flex-shrink-0 ml-10 w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-m font-semibold text-white mr-4">
        {date}
      </div>
      <div className="flex-1 text-center text-white">{children}</div>
    </div>
  );
};

// Component to render the entire timeline
const Timeline = () => {
  const events = [
    { date: "2017", content: "Opened Lung Health Program ..." },
    { date: "2018", content: "Continued Lung Health Program ..." },
    { date: "2020", content: "Published Lung Health Program ..." },
    { date: "2021", content: "Opened Lung Health Program ..." },
    { date: "2023", content: "Opened Lung Health Program ..." },
    // More events soon...
  ];

  return (
    <div className="py-10">
      <div className="border-l-2 border-gray-200">
        {events.map((event, index) => (
          <TimelineEvent key={index} date={event.date}>
            <p className="text-white-700">{event.content}</p>
          </TimelineEvent>
        ))}
      </div>
    </div>
  );
};

const peopleData = [
  { name: "Person 1", title: "Title 1", imageUrl: "/assets/about/blueno.png" },
  { name: "Person 2", title: "Title 2", imageUrl: "/assets/about/blueno.png" },
  { name: "Person 2", title: "Title 2", imageUrl: "/assets/about/blueno.png" },
  { name: "Person 2", title: "Title 2", imageUrl: "/assets/about/blueno.png" },
  { name: "Person 2", title: "Title 2", imageUrl: "/assets/about/blueno.png" },
  { name: "Person 2", title: "Title 2", imageUrl: "/assets/about/blueno.png" },
  { name: "Person 2", title: "Title 2", imageUrl: "/assets/about/blueno.png" },
  { name: "Person 2", title: "Title 2", imageUrl: "/assets/about/blueno.png" },
  // ... other people
];

const communityData = [
  { name: "Company 1", title: "Title 1", imageUrl: "/assets/about/blueno.png" },
  { name: "Company 1", title: "Title 1", imageUrl: "/assets/about/blueno.png" },
  { name: "Company 1", title: "Title 1", imageUrl: "/assets/about/blueno.png" },
  { name: "Company 1", title: "Title 1", imageUrl: "/assets/about/blueno.png" },
  { name: "Company 1", title: "Title 1", imageUrl: "/assets/about/blueno.png" },
];

// Define the main component for the About page
export default function About() {
  const [uid, setUid] = useState<string>("");
  return (
    <PageShell uid={uid} setUid={(newUid) => setUid(newUid)}>
      <AboutContent />
    </PageShell>
  );
}

// Define the content component for the About page
const AboutContent = () => {
  // Generate sections for each image
  const imageSections = images.map((image, index) => (
    <div key={index} className="text-center px-10 py-20">
      <div className="inline-block relative w-full h-0 pb-[60%]">
        {" "}
        <Image
          src={`/assets/about/${image.file_name}`}
          alt={image.caption}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <p className="italic mt-2">{image.caption}</p>
    </div>
  ));

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
              alt="About US"
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
        <h2 className="text-4xl font-bold">Our Journey</h2>
      </section>
      <section>
        <Timeline></Timeline>
      </section>
      <section
        style={{
          color: "white",
          textAlign: "center",
          padding: "20px 0", // Add padding above and below the text
          width: "100%",
        }}
      >
        <h2 className="text-4xl font-bold">Our Team</h2>
      </section>
      <section>
        <Gallery people={peopleData} />
      </section>
      <br></br>
      <br></br>
      <br></br>
      <section
        style={{
          color: "white",
          textAlign: "center",
          padding: "20px 0", // Add padding above and below the text
          width: "100%",
        }}
      >
        <h2 className="text-4xl font-bold">Community Partners</h2>
      </section>
      <section>
        <Gallery people={communityData} />
      </section>
      <section className="px-10 py-10 space-y-6">
        <h2 className="text-4xl font-bold">Our Chapters</h2>
        <div className="w-full h-[200px] lg:h-[300px] relative my-4">
          {" "}
          <Image
            src="/assets/about/stock.png"
            alt="Volunteer Activities"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
        {/* {imageSections} */}
      </section>
    </div>
  );
};
