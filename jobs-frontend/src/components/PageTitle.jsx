
import {useState, useEffect} from "react"

const PageTitle = () => {

    const [title, setTitle] = useState("");
    const [about, setAbout] = useState("");
    const [buttonName, setButtonName] = useState("");

    useEffect(() => {
        setTitle("Careers");
        setAbout("Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper sed pharetra sene.");
        setButtonName("Browse Open Positions");
    }, [])

    return (

        <div class="flex flex-col items-center mt-16 w-11/12 md:w-2/6 mx-auto">
            <h1 className="text-2xl md:text-4xl font-bold"> {title} </h1>
            <div className="text-sm md:text-base text-[#797979] text-center py-4">
                {about}
            </div>

            <button class="inline-flex items-center text-white bg-[#0C5BC6] border-0 rounded-full text-xs px-4 py-2 mt-4 ml-3 md:mt-0 md:py-3 md:px-14">{buttonName}</button>
        </div>

    )
}


export default PageTitle;