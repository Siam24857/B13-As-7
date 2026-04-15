import React from 'react';
import Freinds from './Freinds';

const Allfreinds = async () => {
    

    const hadlecout = ()=> {
        const value = valsecount;
    }

    const res = await fetch('http://localhost:3000/Data.json');  
    const friends = await res.json();  

    console.log(friends);

    return (
        <div className='space-y-5 mt-10'>
            <h4 className='text-3xl font-bold'>Your friends</h4>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8 '>
                {
                    friends.map(freind => <Freinds key={freind.id}  freind={freind}></Freinds>)
                }
            </div>
        </div>
    );
};

export default Allfreinds;