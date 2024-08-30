import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa"

const socials = [
    { icon: <FaGithub/>, path:"https://github.com/JagtapMangesh007"},
    { icon: <FaLinkedinIn/>, path:""},
    { icon: <FaTwitter/>, path:"https://x.com/mjagtap6522"},
    { icon: <FaInstagram/>, path:"https://www.instagram.com/mangesh__jagtap/"},
]
const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};
export default Social;