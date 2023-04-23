import {useState, useEffect} from "react"
import {useLocation} from 'react-router-dom';

import Navbar from "./navbar";
import Footer from "./footer";

const JobPage = () => {

    // const [title, setTitle] = useState("");
    // const [jobLocation, setJobLocation] = useState("");
    // const [buttonName, setButtonName] = useState("");
    // const [jobType, setJobType] = useState("");

    const location = useLocation();

    const {title, jobLocation, jobType} = location.state;

    // useEffect(() => {
    //     setTitle("Web Designer & Developer");
    //     setJobLocation("San Francisco, CA");
    //     setJobType("Full Time")
    //     setButtonName("Apply Now");
    // }, [])

    return (
        <div>
            <Navbar />

            <div class="flex flex-col items-center mt-10 w-11/12 md:w-2/6 mx-auto">
                <h1 className="text-2xl md:text-4xl font-bold"> {title} </h1>
                <div className="text-sm md:text-base text-[#797979] text-center py-4">
                    {jobLocation} | <span className="text-[#0C5BC6]"> {jobType}</span>
                </div>

                <button class="inline-flex items-center text-white bg-[#0C5BC6] border-0 rounded-full text-xs px-4 py-2 mt-4 ml-3 md:mt-0 md:py-4 md:px-10">Apply Now</button>
            </div>


            <div className="w-5/6 bg-[#F9F9F9] text-[#797979] text-xs md:text-sm rounded-xl mx-auto mt-6 mb-24 p-14 pt-16">

                <div className="flex justify-between">
                    <h3 className="text-base md:text-2xl font-bold text-[#242331]"> About the Role </h3>
                    <p className="text-xs md:text-sm text-[#242331]"> Posted : <span> 22 April, 2023 </span> </p>

                </div>

                <p className="py-6"> 
                    you are going to use a passage of Lorem Ipsum, you need to be sure there isn't embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. 
                </p>

                <ul className="space-y-2 list-disc px-4">
                    <li> you are going to use a passage of Lorem Ipsum, you need to be sure </li>
                    <li> you are going to use a passage of Lorem Ipsum, you need to be sure Lorem Ipsum, you need to be sure</li>
                    <li> you are going to use a passage of Lorem Ipsum, you need to be sure </li>
                    <li> you are going to use a passage Lorem Ipsum, you need of Lorem Ipsum, you need to be sure </li>
                </ul>



                <h3 className="text-base md:text-2xl font-bold mt-8 text-[#242331]"> If the feeling is mutual, we offer:  </h3>
                <p className="py-6"> 
                    you are going to use a passage of Lorem Ipsum, you need to be sure there isn't embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. 
                </p>

                <ul className="space-y-2 list-disc px-4">
                    <li> you are going to use a passage of Lorem Ipsum, you need to be sure </li>
                    <li> you are going to use a passage of Lorem Ipsum, you need to be sure Lorem Ipsum, you need to be sure</li>
                    <li> you are going to use a passage of Lorem Ipsum, you need to be sure </li>
                    <li> you are going to use a passage Lorem Ipsum, you need of Lorem Ipsum, you need to be sure </li>
                    <li> you are going to use a passage of Lorem Ipsum, you need to be sure </li>
                    <li> you are going to use a passage Lorem Ipsum, you need of Lorem Ipsum, you need to be sure </li>
                </ul>


                <h3 className="text-base md:text-2xl font-bold mt-8 text-[#242331]"> Contact us! </h3>
                <p className="py-6"> 
                    Reach out to discuss the opportunity & send your answers to:
                </p>
                <p>
                    John Peter <br /> saasup@mail.co <br />+256 445 02342
                </p>
                

                <button class="inline-flex items-center text-white bg-[#242331] border-0 rounded-full text-xs px-4 py-2 mt-4 md:mt-0 md:py-4 md:px-10 md:mt-8">Apply Now</button>

            </div>

            <Footer />

        </div>

    )

}

export default JobPage;




    
