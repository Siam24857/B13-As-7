import React from 'react';

const notfound = () => {
    return (
        <div className='h-100 flex justify-center items-center h-34'>
            <div>
            <h5 className='text-6xl font-bold text-center text-[#244D3F]'>404</h5>
            <p className='text-gray-200 text-center'>This page is not found for this time </p> 
            </div>
        </div>
    );
};

export default notfound;