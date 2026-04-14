'use client'

import Image from 'next/image';
import logoxl_3 from '@/assets/call.png';
import logoxl_4 from '@/assets/text.png';
import logoxl_5 from '@/assets/video.png';
import { useContext } from 'react';
import { AuthContext } from '@/app/context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';

const Dettails = ({ freindetails, children }) => {
    const { setwho, settech, who, tech } = useContext(AuthContext);

    const reporthandle = (report) => {
        setwho([...who, freindetails]); 
        settech([...tech, report]);  
        console.log("Saved:", report, freindetails);
        toast(`${report} with ${freindetails.name}`)
    };

    return (
        <div>
            <div className='p-12 rounded-2xl shadow-xl text-center bg-white'>
                <h4 className='text-left mb-4 text-2xl'>Quick Check-In</h4>
                <div className='grid grid-cols-3 gap-4'>
                    <div
                        className='bg-[#F8FAFC] space-y-3 rounded-2xl btn p-15 flex-col-reverse cursor-pointer'
                        onClick={() => reporthandle("call")}
                    >
                        <h3 className='text-3xl text-center'>Call</h3>
                        <Image width={40} height={40} alt='call' src={logoxl_3} className='mx-auto' />
                    </div>
                    <div
                        className='bg-[#F8FAFC] space-y-3 rounded-2xl btn p-15 flex-col-reverse cursor-pointer'
                        onClick={() => reporthandle("text")}
                    >
                        <h3 className='text-3xl text-center'>text</h3>
                        <Image width={40} height={40} alt='text' src={logoxl_4} className='mx-auto' />
                    </div>
                    <div
                        className='bg-[#F8FAFC] space-y-3 rounded-2xl btn p-15 flex-col-reverse cursor-pointer'
                        onClick={() => reporthandle("video")}
                    >
                        <h3 className='text-3xl text-center'>video</h3>
                        <Image width={40} height={40} alt='video' src={logoxl_5} className='mx-auto' />
                    </div>
                </div>
            </div>
            {children}
           <ToastContainer />
        </div>  
    );
};

export default Dettails;