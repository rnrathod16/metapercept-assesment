import React from 'react'
import Card from './Card';
import Data from "../APIData/Data";

const CardHolder = () => {

    return (
        <>
            <div>
                <h1 className='text-center'>Classes</h1>
                <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore accusantium suscipit, necessitatibus magnam architecto incidunt minima dignissimos libero a aut?</p>
                <div className="container d-flex flex-wrap justify-content-between">
                    {Data.map((val) => {
                        return <Card val={val} />
                    })}

                </div>
            </div>
        </>
    )
}

export default CardHolder