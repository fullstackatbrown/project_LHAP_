import { useState } from "react";
import "../styles/App.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

initializeApp(firebaseConfig);

/**
 * This is the highest level of Mock which builds the component APP;
 * here, developers can use the addCommand function to add/remove custom command and
 * function pair to the map encompassing all commands and function.
 *
 * @return JSX of the entire mock
 *  Note: if the user is loggedIn, the REPL screen will show,
 *  else it will stay at the screen prompting for log in
 */
function App() {
  // add or delete comamnds and function to map here
  return (
    <div className="App" aria-label="App" aria-describedby="repl-history">
    </div>
  );
}

export default App;
