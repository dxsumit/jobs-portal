import {useState, useEffect } from 'react';
import axios from "axios";
import {useLocation} from 'react-router-dom';

import Navbar from "./navbar";
import Footer from "./footer";
import GoToTop from "./GoToTop";

const JobPage = () => {

    const baseURL = "http://localhost:4000";

    const [title, setTitle] = useState("");
    const [jobLocation, setJobLocation] = useState("");
    const [aboutRole, setAboutRole] = useState("");
    const [jobType, setJobType] = useState("");
    const [employerName, setEmployerName] = useState("");
    const [employerEmail, setEmployerEmail] = useState("");
    const [employerPhone, setEmployerPhone] = useState("");
    const [offers, setOffers] = useState("")
    const [postDate, setPostDate] = useState("");
    const [perks, setPerks] = useState([]);
    const [responsibility, setResponsibility] = useState([]);

    const location = useLocation();
    const {id} = location.state;

    useEffect( () => {

        const getjobFields = async () => {

            const response = await axios.get(`${baseURL}/api/jobs/find/${id}`);
            if(response.data.status === "successful"){
                setTitle(response.data.msg.title);
                setJobType(response.data.msg.type);
                setJobLocation(response.data.msg.location);
                setAboutRole(response.data.msg.aboutRole);
                setEmployerName(response.data.msg.employer_name);
                setEmployerEmail(response.data.msg.employer_email);
                setEmployerPhone(response.data.msg.employer_phone);
                setOffers(response.data.msg.offers);
                setPerks(response.data.msg.perks);
                setResponsibility(response.data.msg.responsibility);                

                // setting job post date...
                let parts = response.data.msg.postDate.slice(0,10).split('-');
                let mydate = new Date(parts[0], parts[1]-1, parts[2]); 
                const dateArr = mydate.toDateString().split(" ");
                const finalDate = `${dateArr[2]} ${dateArr[1]}, ${dateArr[3]}`;
                setPostDate(finalDate);
            }
            else{
                alert(response.data.Error);
            }
        }

        getjobFields();

    }, [])



    return (
        <div>
            <Navbar />

            <div className="flex flex-col items-center mt-10 w-11/12 md:w-2/6 mx-auto">
                <h1 className="text-2xl md:text-4xl font-bold"> {title} </h1>
                <div className="text-sm md:text-base text-[#797979] text-center py-4">
                    {jobLocation} | <span className="text-[#0C5BC6]"> {jobType}</span>
                </div>

                <button className="inline-flex items-center text-white bg-[#0C5BC6] border-0 rounded-full text-xs px-4 py-2 mt-4 ml-3 md:mt-0 md:py-4 md:px-10">Apply Now</button>
            </div>

            <div className="w-5/6 bg-[#F9F9F9] text-[#797979] text-xs md:text-sm rounded-xl mx-auto mt-6 mb-24 p-14 pt-16">

                <div className="flex justify-between">
                    <h3 className="text-base md:text-2xl font-bold text-[#242331]"> About the Role </h3>
                    <p className="text-xs md:text-sm font-semibold text-[#242331]"> Posted : <span> {postDate} </span> </p>
                </div>

                {/* about job */}
                <p className="py-6"> 
                    {aboutRole}
                </p>

                {/* responsibilty */}
                <ul className="space-y-2 list-disc px-4">
                    {
                        responsibility.map( (each, i) => (
                            <li key={`responsibility-${i}`}> {each} </li>
                        ))
                    }
                </ul>


                <h3 className="text-base md:text-2xl font-bold mt-8 text-[#242331]"> If the feeling is mutual, we offer:  </h3>

                {/* offers */}
                <p className="py-6"> 
                    {offers}
                </p>

                {/* perks */}
                <ul className="space-y-2 list-disc px-4">
                    {
                        perks.map( (each, i) => (
                            <li key={`perks-${i}`}> {each} </li>
                        ))
                    }
                </ul>

                {/* contact */}
                <h3 className="text-base md:text-2xl font-bold mt-8 text-[#242331]"> Contact us! </h3>
                <p className="py-6"> 
                    Reach out to discuss the opportunity & send your answers to:
                </p>
                <p>
                    {employerName} <br /> {employerEmail} <br /> {employerPhone}
                </p>

                <button className="inline-flex items-center text-white bg-[#242331] border-0 rounded-full text-xs px-4 py-2 mt-4 md:mt-0 md:py-4 md:px-10 md:mt-8">Apply Now</button>

            </div>
            <Footer />
            <GoToTop />
        </div>
    )
}

export default JobPage;




    
