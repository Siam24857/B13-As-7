import React from 'react';
import Allfreinds from '../Allfreinds/page';

const Homepage = () => {
    return (
        <div className='p-[100px] space-y-4 container mx-auto'>
             <h3 className='text-center text-3xl font-bold'>Friends to keep close in your life</h3>
            <p className='text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the<br></br>
relationships that matter most.</p>
    <div className='flex justify-center'>
   <button className='btn bg-[#244D3F] text-white'>+ Add a Friend</button>
   </div>


<div className='flex justify-center items-center gap-8'>
    <div className='bg-white shadow-xl p-10 w-[260px] rounded-2xl space-y-3 '>
        <h3 className='text-3xl text-center font-bold'>10</h3>
        <p className='text-gray-400  text-center'>Total Friends</p>
    </div>
    <div className='bg-white shadow-xl p-8  w-[260px] rounded-2xl space-y-3 '>
        <h3 className='text-3xl text-center font-bold'>3</h3>
        <p className='text-gray-400 text-center'>On Track</p>
    </div>
    <div className='bg-white shadow-xl p-8  w-[260px] rounded-2xl space-y-3 '>
        <h3 className='text-3xl text-center font-bold'>6</h3>
        <p className='text-gray-400  text-center'>Need Attention</p>
    </div>
    <div className='bg-white shadow-xl p-8  w-[260px] rounded-2xl space-y-3 '>
        <h3 className='text-3xl text-center font-bold'>8</h3>
        <p className='text-gray-400  text-center'>Interactions This Month</p>
    </div>
 
   
</div>

<Allfreinds></Allfreinds>
        </div>
    );
};

export default Homepage;