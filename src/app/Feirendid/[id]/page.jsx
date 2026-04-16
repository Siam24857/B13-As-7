'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import logoxl_3 from '@/assets/call.png';
import logoxl_4 from '@/assets/text.png';
import logoxl_5 from '@/assets/video.png';
import Dettails from './Dettails';
import { MdOutlineNotificationsPaused } from 'react-icons/md';
import { PiArchiveBold } from 'react-icons/pi';
import { RiDeleteBinLine } from 'react-icons/ri';

const FriendDetails = () => {
    const params = useParams();
    const [freindetails, setFreindetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/Data.json')
            .then(res => res.json())
            .then(data => {
                const friend = data.find(f => f.id === Number(params.id));
                setFreindetails(friend);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error:', error);
                setLoading(false);
            });
    }, [params.id]);

    if (loading) {
        return <div className="text-center p-10">Loading...</div>;
    }

    if (!freindetails) {
        return <div className="text-center p-10">Friend not found</div>;
    }

    const { name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date } = freindetails;

    return (
        <div className='p-5 bg-[#F8FAFC] min-h-screen'>
            <div className='container mx-auto'>
                <div className='flex-none md:flex justify-center gap-5'>
                    <div className='flex-none md:flex justify-center'>
                        <div className='pro mb-3'>
                            <div className='bg-white rounded-2xl shadow-xl w-[350px]'>
                                <div className='p-6 space-y-4'>
                                    <div className='flex justify-center items-center'>
                                        <Image width={100} height={100} src={picture} alt={name} className='rounded-full' />
                                    </div>
                                    <h3 className='text-center text-3xl font-bold'>{name}</h3>
                                    <p className='text-center'>{next_due_date}</p>
                                    <div className={`text-white py-1 rounded-3xl w-[100px] mx-auto text-center
                                        ${status === "overdue" && "bg-red-500"}
                                        ${status === "on-track" && "bg-green-900"}
                                        ${status === "almost due" && "bg-yellow-700"}
                                    `}>
                                        {status}
                                    </div>
                                    <div className='flex gap-3 justify-center items-center flex-wrap'>
                                        {tags.map((tag, index) => (
                                            <div className='bg-blue-300 p-2 rounded-2xl' key={index}>{tag}</div>
                                        ))}
                                    </div>
                                    <p className='text-center text-gray-400'>{bio}</p>
                                    <p className='text-center text-gray-400'>Preferred: {email}</p>
                                </div>
                            </div>
                            <div className='space-y-4 mt-4'>
                                <button className='btn w-full bg-white'><MdOutlineNotificationsPaused /> Snooze 2 weeks</button>
                                <button className='btn w-full bg-white'><PiArchiveBold /> Archive</button>
                                <button className='btn w-full bg-white text-red-500'><RiDeleteBinLine /> Delete</button>
                            </div>
                        </div>
                    </div>

                    <div className='space-y-10'>
                        <div>
                            <div className='allde grid grid-cols-1 md:grid-cols-3 gap-3'>
                                <div className='p-8 rounded-2xl shadow-xl text-center bg-white'>
                                    <h4 className='text-4xl font-bold'>{days_since_contact}</h4>
                                    <p className='text-center'>Days Since Contact</p>
                                </div>
                                <div className='p-8 rounded-2xl shadow-xl text-center bg-white'>
                                    <h4 className='text-4xl font-bold'>{goal}</h4>
                                    <p className='text-center'>Goal(Days)</p>
                                </div>
                                <div className='p-8 rounded-2xl shadow-xl text-center bg-white'>
                                    <h4 className='text-4xl font-bold'>{next_due_date}</h4>
                                    <p className='text-center'>Next Due</p>
                                </div>
                            </div>
                        </div>

                        <div className='p-12 rounded-2xl shadow-xl bg-white flex justify-between items-center'>
                            <div className='space-y-3'>
                                <h4 className='text-2xl'>Relationship Goal</h4>
                                <p>Connect every 30 days</p>
                            </div>
                            <button className='btn bg-[#F8FAFC]'>Edit</button>
                        </div>

                        <Dettails freindetails={freindetails} />

                        <div className='history space-y-8 mt-4 bg-white p-9 rounded-3xl shadow-xl'>
                            <div className='flex justify-between'>
                                <h3 className='text-3xl'>Recent Interactions</h3>
                                <p className='btn'>Full History</p>
                            </div>
                            <div className='flex justify-between mt-3 border-t border-gray-300 p-7 bg-white'>
                                <div className='flex gap-3'>
                                    <div>
                                        <Image width={50} height={50} alt='call' src={logoxl_4}></Image>
                                    </div>
                                    <div>
                                        <h4>Text</h4>
                                        <p>Asked for career advice</p>
                                    </div>
                                </div>
                                <p>Jan 28, 2026</p>
                            </div>
                            <div className='flex justify-between mt-3 border-t border-gray-300 p-7 bg-white'>
                                <div className='flex gap-3'>
                                    <div>
                                        <Image width={50} height={50} alt='call' src={logoxl_3}></Image>
                                    </div>
                                    <div>
                                        <h4>Meetup</h4>
                                        <p>Industry conference meetup</p>
                                    </div>
                                </div>
                                <p>Jan 28, 2026</p>
                            </div>
                            <div className='flex justify-between mt-3 border-t border-gray-300 p-7 bg-white'>
                                <div className='flex gap-3'>
                                    <div>
                                        <Image width={50} height={50} alt='call' src={logoxl_5}></Image>
                                    </div>
                                    <div>
                                        <h4>Video</h4>
                                        <p>Asked for career advice</p>
                                    </div>
                                </div>
                                <p>Jan 28, 2026</p>
                            </div>
                            <div className='flex justify-between mt-3 border-t border-gray-300 p-7 bg-white'>
                                <div className='flex gap-3'>
                                    <div>
                                        <Image width={50} height={50} alt='call' src={logoxl_3}></Image>
                                    </div>
                                    <div>
                                        <h4>Meetup</h4>
                                        <p>Asked for career advice</p>
                                    </div>
                                </div>
                                <p>Jan 28, 2026</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;