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
  caption: "",
  file_name: "logo_short.png",
};

const img2: Image = {
  caption: "",
  file_name: "logo_short.png",
};

const img3: Image = {
  caption: "",
  file_name: "logo_short.png",
};

const img4: Image = {
  caption: "",
  file_name: "logo_short.png",
};

const img5: Image = {
  caption: "",
  file_name: "logo_short.png",
};

const img6: Image = {
  caption: "",
  file_name: "logo_short.png",
};

const images: Image[] = [img1];

const Home = () => {
  let images_section: ReactElement[] = [];
  images.forEach((image, index) => {
    images_section.push(
        <div key={index} className="px-10 py-20 flex justify-center items-center">
        <img
          src={`/assets/about/${image.file_name}`}
          style={{ position: 'absolute', left: '196px', top: '281px' }}
          width={"1048px"}
          height={"620px"}
        />
      </div>
    );
  });

  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      {images_section}
       <div className="px-10 py-20 flex justify-center items-center">
        <img
          src={`/assets/about/${img2.file_name}`}
          className="absolute left-[736px] top-[972px]"
          width="509px" 
          height="360px" 
          alt={img2.caption}
        />
      </div>
      <div className="bg-black flex flex-col items-center justify-center w-[1048px] h-[150px] lg:h-[17px]"  style={{ position: 'absolute', top: '213px', left: '196px', width: '1048px', height: '38px' }}>
        <div className="text-left w-full px-10 lg:px-[150px]">
        </div>
      </div>
      <div className="bg-red-700 flex flex-col items-center justify-center w-[196px] h-[150px] lg:h-[17px]"  style={{ position: 'absolute', top: '588px', left: '000px', width: '196px', height: '17px' }}>
        <div className="text-left w-full px-10 lg:px-[150px]">
        </div>
      </div>
      <div className="bg-red-700 flex flex-col items-center justify-center w-[196px] h-[150px] lg:h-[17px]"  style={{ position: 'absolute', top: '588px', left: '1244px', width: '196%', height: '17px' }}>
        <div className="text-left w-full px-10 lg:px-[150px]">
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-2.5 lg:gap-10">
        <div className=" px-10 py-10 lg:pr-0 lg:pl-20 lg:py-20 space-y-6 lg:w-1/2 w-full flex flex-col justify-center"> 
          <h1 className="transition-all duration-300 lg:text-4xl text-4xl font-bold" style={{ position: 'absolute', top: '967px', left: '196px', width: '100%', height: '17px' }}>
            Get Involved
          </h1>
          <div className="transition-all duration-300 w-full lg:text-1xl text-lg" style={{ position: 'absolute', top: '987px', left: '196px', width: '478px', height: '296px' }}>
            Welcome to the Lung Health Ambassadors Program. Lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum .
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem.m lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem.m lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem..m lorem.m lorem.m lorem
          </div>
      <div className="bg-black flex flex-col items-center justify-center w-[196.85px] h-[150px] lg:h-[17px]"  style={{ position: 'absolute', top: '1268px', left: '196px', width: '196.85px', height: '39.73px' }}>
        <div className="text-center w-full px-10 lg:px-[150px]">
          <button className="lg:text-2xl text-3xl text-white focus:outline-none" style={{ marginLeft: '-38px' }}>
            Donate
          </button>
        </div>
      </div>
      <div className="bg-black flex flex-col items-center justify-center w-[196.85px] h-[150px] lg:h-[17px]"  style={{ position: 'absolute', top: '1268px', left: '452px', width: '196.85px', height: '39.73px' }}>
        <div className="text-center w-full px-10 lg:px-[150px]">
          <button className="lg:text-2xl text-3xl text-white focus:outline-none" style={{ marginLeft: '-95px', width: "200px" }}>
            Our Contact 
          </button>
        </div>
      </div>
      <div className="bg-white flex flex-col items-center justify-center w-[436px] h-[150px] lg:h-[17px]"  style={{ position: 'absolute', top: '1379px', left: '233px', width: '436px', height: '530px'}}>
        <div className="text-left w-full px-10 lg:px-[150px]">
        <h1 className="transition-all duration-300 lg:text-4xl text-4xl font-bold" style={{ position: 'absolute', top: '20px', left: '150px', width: '251.71px', height: '48.03px' }}>
            Donate
          </h1>
          <img
          src={`/assets/about/${img3.file_name}`}
          className="absolute left-[60px] top-[70px]"
          width="304px" 
          height="150px" 
          alt={img3.caption}
        />
          <div className="transition-all duration-300 w-[436px] lg:text-1xl text-med" style={{ position: 'absolute', top: '240px', left: '60px', width: '307px', height: '73px' }}>
            Welcome to the Lung Health Ambassadors Program. Lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum .
          </div>
          <button className="lg:text-2xl text-3xl text-white bg-black focus:outline-none" style={{ marginLeft: '0px', width: "307px", position: 'absolute', top: '410px', left: '60px', height: '73px' }}>
            Donate Now →
          </button>
        </div>
      </div>
      <div className="bg-white flex flex-col items-center justify-center w-[436px] h-[150px] lg:h-[17px]"  style={{ position: 'absolute', top: '1379px', left: '770px', width: '436px', height: '530px' }}>
        <div className="text-left w-full px-10 lg:px-[150px]">
        <h1 className="transition-all duration-300 lg:text-4xl text-4xl font-bold" style={{ position: 'absolute', top: '20px', left: '125px', width: '251.71px', height: '48.03px' }}>
            Volunteer
          </h1>
          <img
          src={`/assets/about/${img4.file_name}`}
          className="absolute left-[60px] top-[70px]"
          width="304px" 
          height="150px" 
          alt={img4.caption}
        />
          <div className="transition-all duration-300 w-[436px] lg:text-1xl text-med" style={{ position: 'absolute', top: '240px', left: '60px', width: '307px', height: '181px' }}>
            Welcome to the Lung Health Ambassadors Program. Lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum .
          </div>
          <button className="lg:text-2xl text-3xl text-white bg-black focus:outline-none" style={{ marginLeft: '0px', width: "307px", position: 'absolute', top: '410px', left: '60px', height: '73px' }}>
            Volunteer Now →
          </button>
        </div>
      </div>
      <div className="bg-white flex flex-col items-center justify-center w-[436px] h-[150px] lg:h-[17px]"  style={{ position: 'absolute', top: '2063.43px', left: '233px', width: '436px', height: '530px' }}>
        <div className="text-left w-full px-10 lg:px-[150px]">
        <h1 className="transition-all duration-300 lg:text-4xl text-4xl font-bold" style={{ position: 'absolute', top: '20px', left: '85px', width: '400px', height: '48.03px' }}>
            Get A Program
          </h1>
          <img
          src={`/assets/about/${img5.file_name}`}
          className="absolute left-[60px] top-[70px]"
          width="304px" 
          height="150px" 
          alt={img5.caption}
        />
          <div className="transition-all duration-300 w-[436px] lg:text-1xl text-med" style={{ position: 'absolute', top: '240px', left: '60px', width: '307px', height: '181px' }}>
            Welcome to the Lung Health Ambassadors Program. Lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum .
          </div>
          <button className="lg:text-2xl text-3xl text-white bg-black focus:outline-none" style={{ marginLeft: '0px', width: "307px", position: 'absolute', top: '410px', left: '60px', height: '73px' }}>
            Get A Program →
          </button>
        </div>
      </div>
      <div className="bg-white flex flex-col items-center justify-center w-[436px] h-[150px] lg:h-[17px]"  style={{ position: 'absolute', top: '2063.43px', left: '770px', width: '436px', height: '530px' }}>
        <div className="text-left w-full px-10 lg:px-[150px]">
        <h1 className="transition-all duration-300 lg:text-4xl text-4xl font-bold" style={{ position: 'absolute', top: '20px', left: '55px', width: '400px', height: '48.03px' }}>
            Become A Mentor
          </h1>
          <img
          src={`/assets/about/${img6.file_name}`}
          className="absolute left-[60px] top-[70px]"
          width="304px" 
          height="150px" 
          alt={img6.caption}
        />
          <div className="transition-all duration-300 w-[436px] lg:text-1xl text-med" style={{ position: 'absolute', top: '240px', left: '60px', width: '307px', height: '181px' }}>
            Welcome to the Lung Health Ambassadors Program. Lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum .
          </div>
          <button className="lg:text-2xl text-3xl text-white bg-black focus:outline-none" style={{ marginLeft: '0px', width: "307px", position: 'absolute', top: '410px', left: '60px', height: '73px' }}>
            Become A Mentor →
          </button>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};
