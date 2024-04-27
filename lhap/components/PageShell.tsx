"use client";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithRedirect,
  getRedirectResult,
  signInWithPopup,
} from "firebase/auth";
import { firebaseApp } from "@/firebaseClient";
import { createUserDBEntry } from "@/components/util/userDBFunctions";
import { AnyARecord } from "dns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
library.add(faInstagram, faFacebook, faYoutube);


export default function PageShell(props: {
  uid: string;
  setUid: (newUid: string) => void;
  children: React.ReactNode;
}) {
  const uid = props.uid;
  const [email, setEmail] = useState<string | null>(null);
  const [profileUrl, setProfileUrl] = useState<string>("");

  const auth = getAuth(firebaseApp);
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      props.setUid(user.uid);
      setEmail(user.email);
      setProfileUrl(user.photoURL ? user.photoURL : "");
      if (uid && email) {
        await createUserDBEntry(uid, email, profileUrl);
        console.log("User Signed in ");
      } else {
        console.log("User not signed in");
      }
    }
  });

  return (
    <Home uid={uid} email={email} profileUrl={profileUrl}>
      {props.children}
    </Home>
  );
}

const Home = (props: {
  uid: string;
  email: string | null;
  profileUrl: string;
  children: React.ReactNode;
}) => {
  const [uid, setUid] = useState<string>("");
  const [email, setEmail] = useState<string | null>(null);
  const [profileUrl, setProfileUrl] = useState<string>("");

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

  useEffect(() => {
    setUid(props.uid);
    setEmail(props.email);
    setProfileUrl(props.profileUrl);
  }, [props.uid, props.email, props.profileUrl]);
  return (
    <div className="max-w-[100vw] min-h-[40vw] bg-gradient-to-r from-[#232526] via-[#232526] to-[#232526]">
      <div className="sticky top-0 w-full z-50">
        <Navbar
          uid={uid}
          profileUrl={profileUrl}
          handleSignIn={() => handleSignIn()}
          handleSignOut={() => handleSignOut()}
        />
      </div>
      {props.children}

      {/* TODO: Factor out this module*/}
      <div style={{ marginTop: "100px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginBottom: "10px",
          }}
        >
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 10px" }}
          >
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ color: "white", fontSize: "34px" }}
            />
          </a>

          <a
            href="https://www.facebook.com/w"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "10px" }}
          >
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ color: "white", fontSize: "34px" }}
            />
          </a>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 10px" }}
          >
            <FontAwesomeIcon
              icon={faYoutube}
              style={{ color: "white", fontSize: "34px" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
