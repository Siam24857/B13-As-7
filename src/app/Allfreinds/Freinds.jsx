import { Frijole } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Freinds = ({freind}) => {
    const {name, next_due_date, status, tags} =freind
    return (
        <Link href="/Ferinddettails" className='bg-white rounded-2xl shadow-xl '>
            <div className='p-6 space-y-4'>
                <div className='flex justify-center items-center'>
                <Image width={100} height={100} src={freind.picture} alt={name} className='rounded-full'></Image>
                </div>
                <h3 className='text-center text-3xl font-bold'>{name}</h3>
                <p className='text-center'>{next_due_date}</p>
                <div className='flex gap-3 justify-center items-center'>
                {
                  tags.map((tag, index) => <div className={`flex gap-3 text-center bg-blue-300 p-2 rounded-4xl`} key={index}>{tag}</div>)
                }
                </div>
<div
  className={`text-white py-1 rounded-3xl  w-[100px] mx-auto  text-center
    ${status === "overdue" && "bg-red-500"}
    ${status === "on-track" && "bg-green-900"}
    ${status === "almost due" && "bg-yellow-700"}
  `}
>
  {status}
</div>
                 </div>
        </Link>
    );
};

export default Freinds;