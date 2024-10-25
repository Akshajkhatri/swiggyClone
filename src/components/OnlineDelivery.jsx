import React, { useEffect } from 'react'

import Card from './card';

const Onlinedelivery = () => {
    const [online, setonline] = React.useState([]);
    useEffect(() => {
        async function fetchData() {
            const data = await fetch('https://swiggy-copy2.vercel.app/top-restaurant-chains');
            const response = await data.json();
            setonline(response);
        }
        fetchData();
    }, [])


    return (
        <>
            <div className="max-w-[1200px] mx-auto  items-center justify-between">
                <div className="flex w-full my-16 items-center justify-between">
                    <div className="font-bold text-[25px] ">
                        Restaurants with online food delivery
                    </div>


                </div>
               
                <div className="grid grid-cols-4 gap-3">
                    
                    {
                        online.map((item, index) => (
                            <Card {...item} key={index} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Onlinedelivery