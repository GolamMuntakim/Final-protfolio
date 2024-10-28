import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Project = () => {
    return (
        <div className="container w-full mx-auto mt-20 lg:p-20" id="project">
            <div className="font-bold text-3xl mt-10 text-center border-2-b  border-cyan-950 w-full ">My Projects</div>
            <div className="mt-10">
                <div className=" bg-base-200 w-full">
                    <div className="hero-content flex-col lg:flex-row ">
                        <img
                            src="images/projectOne.JPG"
                            className="max-w-sm rounded-lg shadow-2xl" />
                        <div className="">
                            <h1 className="text-2xl font-bold">Real State</h1>
                            <p className="py-6">
                               <span className="font-bold">Description</span>: This project is a real state based project , here admin will make agents and agent will add state/property with the approval of admin, user can make offer request to buye the project , if agent accept the request then the user can pay. Every one have their own dashboard. <br />
                              <p className="mt-4"> <span className="font-bold">Feature</span>:1/Payment intgration method implemented Admin
                               2/ user and agent dashboard implemented Admin have it's organized porwer that
                               3/ admin can make agent or remove any agent or user.</p>
                              <p className="mt-4"> <span className="font-bold">Technology</span>: headlessui/react,stripe/react-stripe-js,stripe/stripe-js,tanstack/react-query,axios,firebase,jsonwebtoken,lottie-react,react-date-picker,react-dom,react-helmet-async,react-hot-toast,react-icons,react-parallax,react-router-dom,react-simple-typewriter,react-spinners,recharts,sweetalert2,swiper</p>
                            </p>
                           <div>
                            <Link to="https://luxary-state.netlify.app" target="_blank"> <button className="btn btn-outline btn-error">Live Link</button></Link>
                            <Link href="https://github.com/GolamMuntakim/Real-state"> <button className="btn btn-outline btn-success"><FaGithub /> Client</button></Link>
                            <Link href="https://github.com/GolamMuntakim/Real-state-server"> <button className="btn btn-outline btn-warning"><FaGithub /> Server</button></Link>
                           </div>
                        </div>
                    </div>
                </div>
                <div className=" bg-base-200 mt-10">
                    <div className="hero-content flex-col lg:flex-row">
                        <img
                            src="images/projecttwo.JPG"
                            className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-2xl font-bold">E-study</h1>
                            <p className="py-6">
                               <span className="font-bold">Description</span>: This is a education based platform, here user can make assingment for the students and student will pic a assignment and submit it , the the user who made the assignment they will give the number every user and student have their own my submission page.<br />
                              <p className="mt-4"> <span className="font-bold">Feature</span>:1/I have implement the crud operation where user can add delete and update assignments.
                              2/Firebase based authentication system.
                              3/server side search and sorting functionality, pagination.</p>
                              <p className="mt-4"> <span className="font-bold">Technology</span>: tanstack/react-query,axios,date-fns,firebase,lottie-react,react-datepicker,react-dom,react-helmet,react-hot-toast,react-icons,react-lottie,react-router-dom</p>
                            </p>
                           <div>
                            <Link to="https://e-studyonline.netlify.app" target="_blank"> <button className="btn btn-outline btn-error">Live Link</button></Link>
                            <Link to="https://github.com/GolamMuntakim/Assignments"> <button className="btn btn-outline btn-success"><FaGithub /> Client</button></Link>
                            <Link to="https://github.com/GolamMuntakim/Assignment-server"> <button className="btn btn-outline btn-warning"><FaGithub /> Server</button></Link>
                           </div>
                        </div>
                    </div>
                </div>
                <div className=" bg-base-200 mt-10">
                    <div className="hero-content flex-col lg:flex-row">
                        <img
                            src="images/projectthree.JPG"
                            className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-2xl font-bold">Traveler's</h1>
                            <p className="py-6">
                               <span className="font-bold">Description</span>: This website is mainly tourist place blog based website , where user can add best tourist place of their country(mainly focus on south asia).And they will share how much cost need to visite those place , discription etc.<br />
                              <p className="mt-4"> <span className="font-bold">Feature</span>:1/User can add their favourite place
2/User can update their selected place
3/user can remove any place what they add</p>
                              <p className="mt-4"> <span className="font-bold">Technology</span>:firebase,lottie-react,match-sorter,react-dom,react-fast-marquee,react-helmet,react-hook-form,react-hot-toast,react-lottie,react-router-dom,react-simple-typewriter,swiper,sweetalert2</p>
                            </p>
                           <div>
                            <Link to="https://tour-client.netlify.app" target="_blank"> <button className="btn btn-outline btn-error">Live Link</button></Link>
                            <Link to="https://github.com/GolamMuntakim/tour-client"> <button className="btn btn-outline btn-success"><FaGithub /> Client</button></Link>
                            <Link to="https://github.com/GolamMuntakim/tour-server"> <button className="btn btn-outline btn-warning"><FaGithub /> Server</button></Link>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;