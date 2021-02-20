import "tailwindcss/tailwind.css";
import { AnimatePresence } from "framer-motion";
import NavBar from "../public/Components/NavBar.js";
import Store from "../public/Components/Context";

function MyApp({ Component, pageProps, router }) {
  console.log(router);
  return (
    <>
      <Store>
        <div className="app flex">
          <div className="nav z-10 absolute">
            <NavBar />
          </div>

          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </Store>
    </>
  );
}

export default MyApp;
