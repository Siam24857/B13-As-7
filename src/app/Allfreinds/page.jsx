import React from 'react';
import Freinds from './Freinds';

const Allfreinds = async () => {

    const res = await fetch('http://localhost:3000/Data.json');  
    const friends = await res.json();  

    console.log(friends);

    return (
        <div>
            <h4>Your friends</h4>
            <div className='grid grid-cols-4 gap-8 '>
                {
                    friends.map(freind => <Freinds key={freind.id} freind={freind}></Freinds>)
                }
            </div>
        </div>
    );
};

export default Allfreinds;