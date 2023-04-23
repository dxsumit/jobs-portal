import {useState, useEffect } from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const JobSection = () => {
    // const baseURL = "http://localhost:4000";
    const baseURL = "https://jobs-portal.ced19i028sumit.repl.co";
    const navigate = useNavigate();
    const [jobs, setJobs] = useState([]);

    let tempJob = [];
    useEffect( () => {

        const getjobFields = async () => {

            const response = await axios.get(`${baseURL}/api/jobs/getfields`);
            if(response.data.status === "successful"){
                tempJob = response.data.msg.map( (obj) => {
                    return {
                        id: obj._id,
                        title: obj.title,
                        type: obj.type,
                        jobLocation: obj.location,
                        about: `${obj.aboutRole.slice(0,120)}...`
                    }
                })
                // console.log(tempJob);
                setJobs(tempJob);
            }
            else{
                alert(response.data.Error);
            }
        }

        getjobFields();

    }, [])

    return (
        <div className="flex flex-col items-center mt-16 w-5/6 mx-auto mb-24">
            
            <h1 className="text-xl md:text-3xl text-[#242331] font-bold my-4"> Current Job Open positions </h1>

            <div className="flex flex-wrap justify-center">
                {
                    jobs.map(obj => (
                        <div className="group relative flex items-start justify-between rounded-xl border-[1px] border-[#CACACA] mx-1 mt-3 w-5/6 px-2 py-4 sm:p-2 md:px-6 md:py-8 sm:w-[40%] transition-colors duration-300 hover:bg-[#0C5BC6]" key={obj.id}>
                            <div className="text-[#242331] group-hover:text-white">
                                <h3 className="text-base md:text-lg font-bold">
                                    {obj.title}
                                </h3>

                                <p className="mt-1 text-xs md:text-sm"> {obj.jobLocation} | <span className="text-[#0C5BC6] group-hover:text-white"> {obj.type}</span> </p>

                                <p className="mt-3 text-xs md:text-sm text-[#797979] group-hover:text-white">
                                    {obj.about}
                                </p>

                                <button onClick={() => navigate('/job', {state: {id: obj.id }})} className="inline-flex items-center bg-white border-[1px] rounded-full text-xs font-semibold py-2 px-6 md:py-3 md:px-7 mt-4 md:mt-8 group-hover:text-[#242331]"> Apply Now </button>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default JobSection;