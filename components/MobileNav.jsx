"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import {CiMenuFries} from "react-icons/ci";
import {useState} from "react";

const links = [
    {
        name: 'home',
        path: '/',
    },
    {
        name: 'services',
        path: '/services',
    },
    {
        name: 'resume',
        path: '/resume',
    },
    {
        name: 'work',
        path: '/work',
    },
    {
        name: 'contact',
        path: '/contact',
    },
]

const MobileNav = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const toggleSheet = () => setIsOpen(!isOpen);
    const closeSheet = () => setIsOpen(false);
    const handleLinkClick = (path) => {
        closeSheet(); // Close the sheet
        router.push(path); // Navigate to the selected path
      };
    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="flex justify-center items-center" onClick={toggleSheet}>
                <CiMenuFries className="text-[32px] text-accent"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-20 mb-20 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-6xl font-semibold">
                            J<span className="text-accent">W</span>S
                        </h1>
                    </Link>
                </div>
             <nav className="flex flex-col justify-center items-center gap-8">
                {links.map((link, index) => {
                    return (
                        <Link 
                            href={link.path} 
                            key={index}
                            className={`${link.path === pathname &&
                            "text-accent border-b-2 border-accent"
                        } text-xl capitalize hover:text-accent transition-all`}
                        onClick={() => handleLinkClick(link.path)}
                        >
                            {link.name}
                        </Link>
                    )
                })}
             </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;