
const Footer = () => {

    return (
        
    <div className="px-4 pt-24 mx-auto border-t sm:max-w-xl md:max-w-full lg:w-5/6 md:px-24 lg:px-8">
        <div className="grid gap-12 row-gap-10 mb-8 text-[#797979] lg:grid-cols-6">

          <div className="md:max-w-md lg:col-span-2">
            <a href="" title="XeroCodee" >
              <span className="ml-2 text-xl font-bold text-[#242331]"> XeroCodee </span>
            </a>
            <div className="mt-4 lg:max-w-sm">
                <p className="text-sm">
                    You get just what you need to run your cloud workloads--no more, no less. Deploy from our single pane of glass, manage them with ease and scale up as fast as your workload grows . . .
                </p>
                
                <div className="flex mt-6">
                    <svg className="h-6 w-6 text-[#5236FF]"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="3" y="5" width="18" height="14" rx="2" />  <polyline points="3 7 12 13 21 7" /></svg>

                    <div className="text-sm ml-2">
                        <p> hello@xerocodee.com </p>
                        <p> xerocodee@gmail.com </p>
                    </div>
                </div>

                <div className="flex mt-4">
                    <svg className="h-6 w-6 text-[#5236FF]"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />  <path d="M15 7a2 2 0 0 1 2 2" />  <path d="M15 3a6 6 0 0 1 6 6" /></svg>

                    <div className="text-sm ml-2">
                        <p> +987 6541 3654 </p>
                        <p> +001 6547 6589 </p>
                    </div>
                </div>

            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">

            {/* pages.. */}
            <div>
              <p className="font-semibold pb-3 border-b-[1px] text-[#242331]"> Pages </p>
              <ul className="mt-2 space-y-2">
                <li> <a href="" className="" > Home </a> </li>
                <li> <a href="" className=""> About Us </a> </li>
                <li> <a href="/" className="text-[#5236FF] font-semibold" > Integration </a> </li>
                <li> <a href="" className="" > Pricing </a> </li>
                <li> <a href="" className="" > Features </a> </li>
                <li> <a href="" className="" > Contact Us </a> </li>
              </ul>
            </div>

            {/* Utility Pages */}
            <div>
              <p className="font-semibold pb-3 border-b-[1px] text-[#242331]"> Utility Pages </p>
              <ul className="mt-2 space-y-2">
                <li> <a href="" className="" > Password </a> </li>
                <li> <a href="" className="" > Protected </a> </li>
                <li> <a href="" className="" > 404 Not Found </a> </li>
                <li> <a href="" className="" > Style Guide </a> </li>
                <li> <a href="" className="" > Licence </a> </li>
                <li> <a href="" className="" > Changelog </a> </li>
              </ul>
            </div>


            <div className="col-span-2 w-full relative flex items-start justify-between rounded-xl bg-[#F9F9F9] mx-1 mt-3 w-5/6 px-2 py-4 sm:p-2 md:px-6 md:py-8">
              

                        <div className="text-[#242331]">

                            <p className="text-xs mb-2 text-[#5236FF] font-semibold"> Getting Started </p>
                            <h3 className="text-base md:text-lg font-bold"> 
                                Infrastructure Automation & Compliance
                            </h3>

                            <p className="mt-3 text-xs md:text-sm text-[#797979]">
                                With a few clicks, you can integrate your preferred DevOps tools to enable Single Pane of Glass DevOps
                            </p>

                            <div className="flex w-full justify-between"> 

                                <button className="inline-flex items-center bg-[#242331] rounded-full text-white text-xs font-semibold py-2 px-6 md:py-3 md:px-9 mt-4 md:mt-8 "> Google </button>

                                <button className="inline-flex items-center bg-none border-[1.5px] rounded-full text-[#242331] text-xs font-semibold py-2 px-6 mr-2 md:py-3 md:px-9 mt-4 md:mt-8 "> Github </button>
                            </div>
                        </div>
            </div>
            
          </div>

        </div>

        <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
          <p className="text-sm">
            Copyright © Saasup | Made with <span> <svg className="h-6 w-6 text-red-500 inline pb-1"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" /></svg> </span>
          </p>

          <div className="flex items-center mt-4 space-x-4 sm:mt-0">

            <a href="" className="" >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>


            <a href="" className="" >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>


            <a href="" className="">
                <svg className="h-5 w-5 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
            </a>

            <a href="" className="" >
                <svg className="h-5 w-5"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            </a>

          </div>
        </div>
    </div>

    )
}

export default Footer;