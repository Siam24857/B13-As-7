'use client'
import Image from "next/image";
import logo from '@/assets/logo.png';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiHome2Line, RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";

const Navbar = () => {

    const pathname = usePathname();

    return (
        <div className='shadow-sm'>
            <div className="navbar bg-white container mx-auto">

                <div className="navbar-start">
                    <Image src={logo} alt="logo" width={150} height={150} />
                </div>

                <div className="navbar-end flex gap-3">
                    <Link 
                        href="/" 
                        className={`btn     ${pathname === "/" ? 'bg-[#244D3F] text-white' : ''}`}
                    >
                     <RiHome2Line />   Home
                    </Link>
                    <Link 
                        href="/Reportinfriends" 
                        className={`btn    ${pathname === "/Reportinfriends" ? 'bg-[#244D3F] text-white' : ''}`}
                    >
                     <RiTimeLine />   Timeline
                    </Link>
                    <Link 
                        href="/timeline" 
                        className={`btn    ${pathname === "/timeline" ? 'bg-[#244D3F] text-white' : ''}`}
                    >
                       <ImStatsDots />  Stats
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Navbar;