import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { UserContext } from "../lib/context";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";

function MyApp({ Component, pageProps }: AppProps) {
  const [user] = useAuthState(auth);

  const userValues = { user };

  return (
    <div className="bg-gray-800 h-auto">
      <UserContext.Provider value={userValues}>
        <Navbar />
        <Component {...pageProps} />
      </UserContext.Provider>
    </div>
  );
}

export default MyApp;
