"use client";
import { db } from "../../firebaseClient";
// import { auth } from "firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithRedirect,
  getRedirectResult,
  signInWithPopup,
} from "firebase/auth";
import { firebaseApp } from "@/firebaseClient";
import { useState, useEffect, ReactElement } from "react";
import PageShell from "../../components/PageShell";
import CustomizedAccordions from "../../components/Accordion";
import RegisterForm from "@/components/SignUp";

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
  file_name: "lhap/public/assets/logo_short.png",
};
const img2: Image = {
  caption: "Placeholder",
  file_name: "lhap/public/assets/logo_short.png",
};
const img3: Image = {
  caption: "Placeholder",
  file_name: "lhap/public/assets/logo_short.png",
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

  const [uid, setUid] = useState<string>("");
  const [email, setEmail] = useState<string | null>(null);
  const [profileUrl, setProfileUrl] = useState<string>("");
  const [name, setName] = useState(""); // State for name input
  const [emailField, setEmailField] = useState(""); // State for email input
  const [school, setSchool] = useState(""); // State for school input
  const [age, setAge] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();

  async function handleSignIn() {
    await signInWithPopup(auth, provider).catch((error: any) => {
      console.warn("Google authentication error--", error);
      return;
    });
    const result = await getRedirectResult(auth);
  }

  async function handleSignOut() {
    await auth.signOut();
    setUid("");
    setEmail("");
  }

  return (
    <div>
      <div className="bg-purple-700 flex flex-col items-center justify-center w-full h-[150px] lg:h-[200px]">
        <div className="text-left w-full px-10 lg:px-[150px]">
          <h1 className="lg:text-6xl text-4xl text-white">
            What does it mean to be a volunteer?
          </h1>
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center lg:flex-row gap-2.5 lg:gap-10">
        <div
          className="px-10 py-10 lg:pr-0 lg:pl-20 lg:py-20 space-y-6 lg:w-3/4 w-full flex flex-col justify-center"
          style={{ marginBottom: "2rem" }}
        >
          <br></br>
          <h1 className="transition-all duration-300 lg:text-4xl text-4xl font-bold text-center">
            Volunteering
          </h1>
          <br></br>
          <div className="transition-all duration-300 w-full lg:text-2xl text-lg">
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            lorem ipsum.
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
          <div className="transition-all items-center duration-300 w-full lg:text-2xl text-lg text-center">
            {/* <button
              className="text-lg px-10 ml-5 font-bold bg-green-300 p-2 rounded-full"
              onClick={handleSignIn}
            >
              Sign up
            </button> */}
          </div>
          <br></br>
          <h1
            className="transition-all duration-300 lg:text-4xl text-4xl font-bold text-center"
            style={{ marginBottom: "2rem" }}
          >
            FAQ
          </h1>
          <br></br>
          <div className="transition-all items-center duration-300 w-full lg:text-2xl text-lg text-center">
            <CustomizedAccordions />
          </div>
          {/* <div className="transition-all items-center duration-300  text-center">
            <RegisterForm />
          </div> */}
          <br></br>
          <h1
            className="transition-all duration-300 lg:text-4xl text-4xl font-bold text-center"
            style={{ marginBottom: "2rem" }}
          >
            Volunteer with us!
          </h1>
          <br></br>
          {/* <RegisterForm /> */}
          <div className="transition-all duration-300  text-lg w-full">
            <div className="flex flex-col items-center space-y-4 w-full">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: "100%",
                  textAlign: "center",
                  marginBottom: "1rem",
                }}
                className="border border-gray-400 px-4 py-2 rounded-none w-full lg:w-auto"
              />
              <input
                type="email"
                placeholder="Email"
                value={emailField}
                onChange={(e) => setEmailField(e.target.value)}
                style={{
                  width: "100%",
                  textAlign: "center",
                  marginBottom: "1rem",
                }}
                className="border border-gray-400 px-4 py-2 rounded-none w-full lg:w-auto"
              />
              <input
                type="text"
                placeholder="School"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
                style={{
                  width: "100%",
                  textAlign: "center",
                  marginBottom: "1rem",
                }}
                className="border border-gray-400 px-4 py-2 rounded-none w-full lg:w-auto"
              />
              <input
                type="text"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                style={{
                  width: "100%",
                  textAlign: "center",
                  marginBottom: "1rem",
                }}
                className="border border-gray-400 px-4 py-2 rounded-none w-full lg:w-auto"
              />
              <input
                type="text"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                style={{
                  width: "100%",
                  textAlign: "center",
                  marginBottom: "1rem",
                }}
                className="border border-gray-400 px-4 py-2 rounded-none w-full lg:w-auto"
              />
              <button
                className="text-lg px-10 ml-5 font-bold bg-green-300 p-2 rounded-full"
                onClick={handleSignIn}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
        {/* <div className="transition-all duration-300 w-full lg:text-2xl text-lg">
            <button>aushdhas</button>
          </div> */}
      </div>
    </div>
  );
};