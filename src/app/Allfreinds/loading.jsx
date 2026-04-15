import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-[400px] '>
            <div>
                <span className="loading loading-spinner text-neutral w-[50px] mx-auto"></span>
            </div>
        </div>
    );
};

export default Loading;