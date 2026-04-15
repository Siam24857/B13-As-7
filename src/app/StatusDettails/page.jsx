import Chart from "./Chart";

 

 


const Statedettails = () => {
    return (
        <div className='bg-[#F8FAFC]'>
            <div className='container mx-auto p-20 space-y-8'>
            <h4 className='text-5xl font-bold'>Friendship Analytics</h4>
            <div className='container mx-auto bg-white p-8'>
                <h5 className='text-2xl'>By Interaction Type</h5>
                <div>
                     <Chart></Chart>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Statedettails;