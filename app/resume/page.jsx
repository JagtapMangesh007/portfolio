"use client";
import { FaHtml5, FaCss3,FaJs, FaReact, FaNodeJs, FaPaperPlane, FaGitAlt, FaGithubSquare, FaWordpress } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiWebpack, SiNetlify, SiJavascript   } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { TbBrandBootstrap, TbBrandReactNative } from "react-icons/tb";

const about = {
    title: "About Me",
    description:
        "A Meticulous Developer, skilled ate building user interface components using the React, next and More An excellent listener, with the ability to assess and help in tough situations",
    info: [
        {
            feildName: "Name",
            fieldValue: "Mangesh Jagtap"
        },
        {
            feildName: "Mobile",
            fieldValue: "(+91) 8668653243"
        },
        {
            feildName: "Location",
            fieldValue: "Pune"
        },
        {
            feildName: "Freelancer",
            fieldValue: "Available"
        },
        {
            feildName: "DOB",
            fieldValue: "2nd June"
        },
        {
            feildName: "Status",
            fieldValue: "Unmarried"
        },
        {
            feildName: "Mail",
            fieldValue: "jagtapmangesh007@gmail.com"
        },
    ]
};
const experience = {
    // icon: 'logo',
    title: "My Experience",
    description:
        "As a skilled software developer, I have substantial experience in creating dynamic and high-performance web applications, delivering innovative solutions tailored to meet diverse client needs.",
    items: [
        {
            company: "KPMG Assurance and Consultion Services LLP",
            position: "Business Analyst",
            duration: "2022 - 2023",
        },
        {
            company: "Megsys Digital Private Limited",
            position: "React Developer",
            duration: "Present",
        },
    ]
};
const education = {
    // icon: '/assets/resume/.svg'
    title: "My Education",
    description:
        "Graduated with a Bachelor’s in Computer Applications, equipping with a thorough understanding of programming concepts, application development, and computer systems.",
    items: [
        {
            institution: "Savitribai Phule Pune University",
            degree: "BBA (Computer Application)",
            duration: "2021",
        },
        {
            institution: "Kolhapur Divisional Board",
            degree: "Higher Secondary Certificate",
            duration: "2015",
        },
        {
            institution: "Kolhapur Divisional Board",
            degree: "Secondary School Certificate",
            duration: "2013",
        },
        
    ]
};
const skills = {
    title: "Skill",
    description:
    "Extensive skill set in various technologies, enabling the development and optimization of effective web solutions. This diverse expertise supports the creation of innovative.",
    skillList : [
        {
            icon: <FaReact />,
            name: "React.js"
        },
        {
            icon: <FaPaperPlane  />,
            name: "Postman"
        },
        {
            icon: <RiTailwindCssFill />,
            name: "Telwind CSS"
        },
        {
            icon: <SiWebpack/>,
            name: "Webpack"
        },
        {
            icon: <FaGitAlt />,
            name: "Git"
        },
        {
            icon: <FaGithubSquare />,
            name: "GitHub"
        },
        {
            icon: <FaWordpress />,
            name: "WordPress"
        },
        {
            icon: <RiNextjsFill />,
            name: "Next.js"
        },
        {
            icon: <SiNetlify />,
            name: "netlify"
        },
        {
            icon: <IoLogoVercel  />,
            name: "Vercel"
        },
        {
            icon: <FaHtml5 />,
            name: "HTML"
        },
        {
            icon: <FaCss3 />,
            name: "CSS"
        },
        {
            icon: <SiJavascript />,
            name: "Javascript"
        },
        {
            icon: <TbBrandReactNative />,
            name: "React Native"
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
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {education.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {education.items.map((item, index) => {
                                        return (
                                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start">
                                                <span className="text-accent">{item.degree}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.duration}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.institution}</p>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </ScrollArea>
                            </div> 
                        </TabsContent>
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                    <div className="flex flex-col gap-[30] text-center xl:text-left">
                                        <h3 className="text-4xl font-bold mb-6">{skills.title}</h3>
                                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                    </div>
                                    <ul className="grid grid-col-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                                        {skills.skillList.map((skill, index) => {
                                            return (
                                                <li key={index}>
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                                <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className="capitalize">{skill.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>    
                                                </li>
                                            )
                                        })}
                                    </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-white/60">{item.feildName}</span>
                                                <span className="text-xl">{item.fieldValue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                   
                </Tabs>
            </div>
        </motion.div>
    )
};
export default Resume;