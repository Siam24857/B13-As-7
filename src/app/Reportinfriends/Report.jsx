import Image from 'next/image';
import React from 'react';
import logoxl_3 from '@/assets/call.png';
import logoxl_4 from '@/assets/text.png';
import logoxl_5 from '@/assets/video.png';

const Report = ({ friend, tech }) => {
    const { name, picture, next_due_date } = friend || {};
     const currentDate = new Date();
    
    if (!friend) return null;
    
     
    let techImage;
    if (tech === "call") techImage = logoxl_3;
    else if (tech === "text") techImage = logoxl_4;
    else if (tech === "video") techImage = logoxl_5;
    else techImage = logoxl_3;
    
    return (
        <div>
            <div className="p-8 bg-white rounded-2xl my-4">
                <div className="flex gap-5 items-center">
                    <Image width={40} height={40} src={techImage} alt={name} className="rounded-full" />
                    <div>
                        <h5 className="text-2xl">
                            {tech} <span className="text-gray-400">with {name}</span>
                        </h5>
                        <p className="text-gray-400">{currentDate.toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Report;