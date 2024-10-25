import React, { useEffect } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Category = () => {
    useEffect(() => {
        async function fetchData() {
            const data = await fetch('https://swiggy-copy2.vercel.app/categories');
            const response = await data.json();
            setCategories(response);
        }
        fetchData();
    }, [])

    const [categories, setCategories] = React.useState([]);
    const [slide, setSlide] = React.useState(0);

    const nextitem = () => {
        if (slide < categories.length - 8) {
            setSlide(slide + 3);
        } else {
            setSlide(0);
        }
    }

    const previousitem = () => {
        if (slide > 0) {
            setSlide(slide - 3);
        } else {
            setSlide(categories.length - 8);
        }
    }
        return (
            <>
                <div className="max-w-[1200px] mx-auto  items-center justify-between">
                    <div className="flex w-full my-5 items-center justify-between">
                        <div className="font-bold text-[25px] ">
                            What's on your mind
                        </div>
                        <div className="flex gap-4">
                            <div className="h-[30px] w-[30px] cursor-pointer flex items-center justify-center rounded-full  mx-2 bg-[#50505063] " onClick={previousitem}>
                                <FaArrowLeft />
                            </div>
                            <div className="h-[30px] w-[30px] flex items-center cursor-pointer justify-center rounded-full  mx-2 bg-[#50505063] " onClick={nextitem}>
                                <FaArrowRight />
                            </div>
                        </div>
                    </div>
                    <div className="flex overflow-x-hidden">
                        {
                            categories.map((category, index) => {
                                return (
                                    <div key={index} className="w-[150px] shrink-0 duration-500 " style={
                                        { transform: `translateX(-${slide * 100}%)` }
                                    }>
                                        <img src={"https://swiggy-images.vercel.app/images/"+category.image} alt="" />
                                    </div>
                                )
                            })
                        }

                    </div>
                    <hr className='my-4 border-[1px]'></hr>
                </div>
                

            </>
        )
    }

    export default Category