
import {useState, useEffect} from "react"

const Values = () => {

    const ourValues = [
        {
            "title": "Patients come first",
            "icon": "/Icon_0.png",
            "content": "Contrary to popular belief, Ipsum is not simply random text. It has roots in a piece."
        },
        {
            "title": "Competitive salary",
            "icon": "/Icon_1.png",
            "content": "Contrary to popular belief, Ipsum is not simply random text. It has roots in a piece."
        },
        {
            "title": "Career growth",
            "icon": "/Icon_2.png",
            "content": "Contrary to popular belief, Ipsum is not simply random text. It has roots in a piece."
        },
        {
            "title": "Holidays & Parental",
            "icon": "/Icon_3.png",
            "content": "Contrary to popular belief, Ipsum is not simply random text. It has roots in a piece."
        },
        {
            "title": "Flexible hours",
            "icon": "/Icon_4.png",
            "content": "Contrary to popular belief, Ipsum is not simply random text. It has roots in a piece."
        },
        {
            "title": "Medical insurance",
            "icon": "/Icon_5.png",
            "content": "Contrary to popular belief, Ipsum is not simply random text. It has roots in a piece."
        }
    ]

    return (

        <div class="flex flex-col items-center mt-16 w-5/6 mx-auto mb-24">
            <button class="inline-flex items-center text-[#0C5BC6] bg-[#C6DEFF] border-0 rounded-full text-xs font-semibold py-2 px-6 md:py-4 md:px-9 mt-4 ml-3 md:mt-0"> Values </button>
            
            <h1 className="text-xl md:text-3xl text-[#242331] font-bold my-4"> Values that define us </h1>

            <div className="flex flex-wrap">

                {
                    ourValues.map(obj => (
                        <a className="relative flex items-start justify-between rounded-xl border-[1px] border-[#F6F6F6] shadow-[0_35px_35px_rgba(229,229,229,0.25)] mx-1 mt-3 w-5/6 sm:p-2 lg:px-16 lg:py-8 sm:w-[30%]" href="#" >
                            <div className="text-gray-500">

                                <img className="px-2" src={obj.icon} width="30%" height="30%" alt="icon" />

                                <h3 className="mt-4 text-base md:text-lg font-bold text-[#242331]">
                                    {obj.title}
                                </h3>

                                <p className="mt-3 text-xs md:text-sm text-[#797979]">
                                    {obj.content}
                                </p>
                            </div>

                        </a>
                    ))
                }

            </div>
        </div>
    )
}


export default Values;