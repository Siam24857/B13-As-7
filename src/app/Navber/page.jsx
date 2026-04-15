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
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl">
                    <Image src={logo} alt="logo" width={120} height={120} />
                </Link>
            </div>
            
            <div className="flex-none">
                {/* Navigation Links Dropdown for mobile */}
                <div className="dropdown dropdown-end lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <Link href="/" className={pathname === "/" ? "active" : ""}>
                                <RiHome2Line /> Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/Reportinfriends" className={pathname === "/Reportinfriends" ? "active" : ""}>
                                <RiTimeLine /> Timeline
                            </Link>
                        </li>
                        <li>
                            <Link href="/StatusDettails" className={pathname === "/StatusDettails" ? "active" : ""}>
                                <ImStatsDots /> Stats
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden lg:flex gap-2">
                    <Link 
                        href="/" 
                        className={`btn btn-ghost ${pathname === "/" ? 'bg-[#244D3F] text-white' : ''}`}
                    >
                        <RiHome2Line /> Home
                    </Link>
                    <Link 
                        href="/Reportinfriends" 
                        className={`btn btn-ghost ${pathname === "/Reportinfriends" ? 'bg-[#244D3F] text-white' : ''}`}
                    >
                        <RiTimeLine /> Timeline
                    </Link>
                    <Link 
                        href="/StatusDettails" 
                        className={`btn btn-ghost ${pathname === "/StatusDettails" ? 'bg-[#244D3F] text-white' : ''}`}
                    >
                        <ImStatsDots /> Stats
                    </Link>
                </div>

                 
                 
            </div>
        </div>
    );
};

export default Navbar;