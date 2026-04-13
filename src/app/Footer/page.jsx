import Image from "next/image";
import logoxl from '@/assets/logo-xl.png';
import logoxl_1 from '@/assets/facebook.png';
import logoxl_2 from '@/assets/twitter.png';
import logoxl_3 from '@/assets/instagram.png';

 

const Footer = () => {
    return (
        <div className="mt-20 ">
            <div className='   bg-[#244D3F] text-white  '>
                <div className="p-22 container mx-auto space-y-10">
                 <div className="flex justify-center">
                    <Image width={400} height={200} alt="name of comapny" src={logoxl}></Image>
                 </div>
                 <p className="text-center  ">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            
            <p className="text-center text-2xl">Social Links</p>
            <div>
                <div className="flex justify-center items-center gap-3">
                      <Image width={50} height={50} alt="name of comapny" src={logoxl_3}></Image>
                      <Image width={50} height={50} alt="name of comapny" src={logoxl_1}></Image>
                      <Image width={50} height={50} alt="name of comapny" src={logoxl_2}></Image>
                </div>
            </div>


            <div className="flex justify-between items-center  border-t border-gray-500 pt-5">
                <div>
                    <p className="text-gray-400">© 2026 KeenKeeper. All rights reserved.</p>
                </div>
                <div className="flex justify-center  items-center gap-10">
                    <div>Privacy Policy  </div>      
                    <div> Terms of Service </div>
                     <div>Cookies</div>
                </div>
            </div>
            
            </div>
            </div>
        </div>
    );
};

export default Footer;