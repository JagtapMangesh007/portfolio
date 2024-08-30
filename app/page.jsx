"use client";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";



const Home = () => {
  const handleDownload = () => {
    const fileUrl = "/cv/cv.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Mangesh_CV.pdf"; 
    link.click();
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="texl-xl">Softwere Developer</span>
            <h1 className="h1 mb-6">
              Hi I am<br/> <span className="text-accent">Mangesh</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              "A Software Developer specializing in React.js. I build high-performance, user-centric web applications and websites. Let’s collaborate to turn your vision into reality!" 
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={handleDownload}
              >
                <span>Download CV</span>
                <FiDownload className="texl-xl"/>
              </Button>
              <div className="mb-6 xl:mb-0">
                <Social 
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
      </div>
    </div>
    <Stats/>
    </section>
  );
};

export default Home;
