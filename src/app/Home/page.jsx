import React from 'react';
import Allfreinds from '../Allfreinds/page';

const Homepage = () => {
    return (
        <div className='mt-[100px] space-y-4 container mx-auto'>
             <h3 className='text-center text-3xl font-bold'>Friends to keep close in your life</h3>
            <p className='text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the<br></br>
relationships that matter most.</p>


<div className='flex justify-center items-center gap-8'>
    <div className='bg-blue-100 shadow-xl p-20  '>10</div>
    <div className='bg-blue-100 shadow-xl p-20  '>10</div>
    <div className='bg-blue-100 shadow-xl p-20 '>10</div>
</div>

<Allfreinds></Allfreinds>
        </div>
    );
};

export default Homepage;