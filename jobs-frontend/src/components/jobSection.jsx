import {useNavigate} from 'react-router-dom'

const JobSection = () => {

    const navigate = useNavigate();

    const ourValues = [
        {
            "title": "Web Designer & Developer",
            "location": "San Francisco, CA",
            "type": "Part Time",
            "desc": "It is a long established fact that a reader will be distracted by the readable. Lorem Ipsum looking at it layout."
        },
        {
            "title": "Front-end developer",
            "location": "San Francisco, CA",
            "type": "Part Time",
            "desc": "It is a long established fact that a reader will be distracted by the readable. Lorem Ipsum looking at it layout."
        },
        {
            "title": "SEO Specialist ",
            "location": "San Francisco, CA",
            "type": "Full Time",
            "desc": "It is a long established fact that a reader will be distracted by the readable. Lorem Ipsum looking at it layout."
        },
        {
            "title": "UI / UX Designer",
            "location": "San Francisco, CA",
            "type": "Full Time",
            "desc": "It is a long established fact that a reader will be distracted by the readable. Lorem Ipsum looking at it layout."
        },
        {
            "title": "Backend Developer",
            "location": "San Francisco, CA",
            "type": "Part Time",
            "desc": "It is a long established fact that a reader will be distracted by the readable. Lorem Ipsum looking at it layout."
        },
        {   "title": "Condent Wrtiter",
            "location": "San Francisco, CA",
            "type": "Part Time",
            "desc": "It is a long established fact that a reader will be distracted by the readable. Lorem Ipsum looking at it layout."
        }
    ]


    return (
        <div class="flex flex-col items-center mt-16 w-5/6 mx-auto mb-24">
            
            <h1 className="text-xl md:text-3xl text-[#242331] font-bold my-4"> Current Job Open positions </h1>

            <div className="flex flex-wrap justify-center">

                {
                    ourValues.map(obj => (
                        <div className="group relative flex items-start justify-between rounded-xl border-[1px] border-[#CACACA] mx-1 mt-3 w-5/6 px-2 py-4 sm:p-2 md:px-6 md:py-8 sm:w-[40%] transition-colors duration-300 hover:bg-[#0C5BC6]">
                            <div className="text-[#242331] group-hover:text-white">

                                {/* <img className="px-2" src={obj.icon} width="30%" height="30%" alt="icon" /> */}

                                <h3 className="text-base md:text-lg font-bold">
                                    {obj.title}
                                </h3>

                                <p className="mt-1 text-xs md:text-sm"> {obj.location} | <span className="text-[#0C5BC6] group-hover:text-white"> {obj.type}</span> </p>

                                <p className="mt-3 text-xs md:text-sm text-[#797979] group-hover:text-white">
                                    {obj.desc}
                                </p>

                                <button onClick={() => navigate('/job', {state: {title: obj.title, jobLocation: obj.location, jobType: obj.type }})} class="inline-flex items-center bg-white border-[1px] rounded-full text-xs font-semibold py-2 px-6 md:py-3 md:px-7 mt-4 md:mt-8 group-hover:text-[#242331]"> Apply Now </button>

                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}


export default JobSection;



