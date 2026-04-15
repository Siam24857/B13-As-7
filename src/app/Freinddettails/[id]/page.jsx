import React from 'react';

const page = ({params}) => {
    console.log(params)
    return (
        <div>
            hi{params}
        </div>
    );
};

export default page;