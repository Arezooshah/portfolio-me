import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Switcher from "./components/Switcher";
import router from "./router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div>
      <RouterProvider router={router} />

      {/* <NavBar /> */}
      {/* <Header />
      <About />
      <Experience />
      <Project />
      <Contact /> */}
      {/* <Footer /> */}
      {/* <Switcher /> */}
    </div>
  );
}

export default App;
