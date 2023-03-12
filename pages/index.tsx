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
      <Slide>
        <Intro />
      </Slide>
      <Slide>
        <About />
      </Slide>
      <Slide>
        <Project />
      </Slide>
      <Slide>
        <Career />
      </Slide>
      <Slide>
        <Contact />
      </Slide>
    </FullPage>
  );
}
