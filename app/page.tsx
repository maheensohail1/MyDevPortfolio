import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import { Grid } from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export default function Home() {
    console.log("Rendering Home Page");
  
    console.log("Rendering FloatingNav");
    const nav = <FloatingNav navItems={navItems} />;
  
    console.log("Rendering Hero");
    const hero = <Hero />;
  
    console.log("Rendering Grid");
    const grid = <Grid />;
  
    console.log("Rendering RecentProjects");
    const recentProjects = <RecentProjects />;
  
    console.log("Rendering Clients");
    const clients = <Clients />;
  
    console.log("Rendering Experience");
    const experience = <Experience />;
  
    console.log("Rendering Approach");
    const approach = <Approach />;
  
    console.log("Rendering Footer");
    const footer = <Footer />;
  
    return (
      <main className="relative overflow-clip bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          {nav}
          {hero}
          {grid}
          {recentProjects}
          {clients}
          {experience}
          {approach}
          {footer}
        </div>
      </main>
    );
  }
  

