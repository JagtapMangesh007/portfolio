"use client";
import Link from "next/link"
import {BsArrowDown, BsArrowDownRight, bsArrowDownRight} from "react-icons/bs";

const services = [
    {
        num: '01',
        title: 'Web Development',
        description: 'Building tailored websites and web applications to meet specific client needs using technologies like React.js, Next.js.',
        href: ""
    },
    {
        num: '02',
        title: 'Website Maintenance',
        description: 'Providing ongoing support and maintenance for existing websites to ensure they remain up-to-date and functional.',
        href: ""
    },
    {
        num: '03',
        title: 'E-commerce Integration',
        description: 'Unlock the full potential of your website with our specialized WordPress development services. Whether you are starting from scratch.',
        href: ""
    },
    {
        num: '04',
        title: 'Consultation',
        description: 'Offering expert advice on digital strategy, technology selection, and project planning to help clients achieve their business goals.',
        href: ""
    }
]

import {delay, motion} from "framer-motion";

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{opacity:0}}
                    animate={{
                        opacity: 1,
                        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"} 
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => {
                        return (
                            <div 
                                key={index}
                                className="flex-1 flex flex-col justify-center gap-6 group"
                            >
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                        {service.num}
                                        </div>
                                    <Link 
                                        href={service.href}
                                        className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                                    >
                                        <BsArrowDownRight className="text-primary text-3xl"/>
                                    </Link>
                                </div>
                                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                                <p className="text-white/68">{service.description}</p>
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}
export default Services