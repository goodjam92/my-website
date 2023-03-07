import { FullPage, Slide } from "react-full-page";
import NavBar from "@/components/NavMenu";
import About from "./about";
import Project from "./project";
import Intro from "./intro";
import Career from "./career";
import Contact from "./contact";

export default function Home() {
  return (
    <FullPage controls={NavBar}>
      <Slide style={{ minHeight: "100vh" }}>
        <Intro />
      </Slide>
      <Slide style={{ minHeight: "100vh" }}>
        <About />
      </Slide>
      <Slide style={{ minHeight: "100vh" }}>
        <Project />
      </Slide>
      <Slide style={{ minHeight: "100vh" }}>
        <Career />
      </Slide>
      <Slide style={{ minHeight: "100vh" }}>
        <Contact />
      </Slide>
    </FullPage>
  );
}
