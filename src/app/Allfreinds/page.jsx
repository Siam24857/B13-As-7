'use client';
import React, { useEffect, useState } from 'react';
import Freinds from './Freinds';

const Allfreinds = () => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/Data.json')
            .then(res => res.json())
            .then(data => {
                setFriends(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-center p-10">Loading friends...</div>;
    }

    return (
        <div className='space-y-5 mt-10'>
            <h4 className='text-3xl font-bold'>Your friends</h4>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                {
                    friends.map(freind => <Freinds key={freind.id} freind={freind} />)
                }
            </div>
        </div>
    );
};

export default Allfreinds;