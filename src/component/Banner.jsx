import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FaDownload } from "react-icons/fa";


const Banner = () => {
    const [text]= useTypewriter({
        words:['Frontend developer', 'Beckend developer', 'Fullstack developer'],
        loop:{},
        typeSpeed:100,
        deleteSpeed:50,
    });
    return (
        <div>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-56 mt-20">
                <div>
                    <h1>
                       <span className="font-bold text-3xl"> Hi</span> , I am <span className="font-semibold text-cyan-200"> {text}</span>
                       <span className='text-black'><Cursor className="text-white"/></span>   <br />
                        I am passoniate about web development <br />
                        I love to explore technology <br />
                        i want to become a full stack developer
                    </h1>
                    <button className="btn btn-outline btn-info mt-10 "><a className="flex gap-4" href="/public/resume.pdf" download> <FaDownload /> Download Resume</a></button>
                </div>
                <div>
                   <img className="h-[400px] rounded-full" src="/public/images/link.jpeg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;