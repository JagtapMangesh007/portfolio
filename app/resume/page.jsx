"use client";
import { FaHtml5, FaCss3,FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si"

const about = {
    title: "About Me",
    description:
        "her  is description",
    info: [
        {
            fielName: "Mobile",
            fieldValue: "Mangesh Ja2gtap"
        },
        {
            fielName: "Name",
            fieldValue: "Mangeshw Jagtap"
        },
        {
            fielName: "email",
            fieldValue: "Mangesh Jawgtap"
        },
    ]
};
const experience = {
    // icon: '/assets/resume/.svg'
    title: "My exper",
    description:
        "hier is des",
    items: [
        {
            company: "name",
            position: "devloper",
            duration: "2022",
        },
        {
            company: "name",
            position: "devloper",
            duration: "2022",
        },
    ]
};
const education = {
    // icon: '/assets/resume/.svg'
    title: "My Education",
    description:
        "hier is des",
    items: [
        {
            institution: "name",
            degree: "devloper",
            duration: "2022",
        },
        {
            institution: "name",
            degree: "devloper",
            duration: "2022",
        },
        {
            institution: "name",
            degree: "devloper",
            duration: "2022",
        },
        
    ]
};
const skills = {
    title: "skill",
    description:
    "here is description",
    skillList : [
        {
            icon: <FaHtml5/>,
            name: "htmls"
        },
        {
            icon: <FaHtml5/>,
            name: "htmls"
        },
        {
            icon: <FaHtml5/>,
            name: "htmls"
        },
    ],
};

import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0}}
            animate={{
                opacity: 1,
                transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                    
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skill</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>
                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {experience.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {experience.items.map((item, index) => {
                                        return (
                                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.company}</p>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </ScrollArea>
                            </div> 
                        </TabsContent>
                        <TabsContent value="education" className="w-full">
                            Education
                        </TabsContent>
                        <TabsContent value="skills" className="w-full">
                            Skill
                        </TabsContent>
                        <TabsContent value="about" className="w-full">
                            About
                        </TabsContent>
                    </div>
                   
                </Tabs>
            </div>
        </motion.div>
    )
};
export default Resume;