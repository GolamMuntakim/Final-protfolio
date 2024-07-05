import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FaDownload } from "react-icons/fa";
import pdf_File_Url from "../../public/resume.pdf"

// const pdf_File_Url='http://localhost:5174/resume.pdf'
const Banner = () => {
    const downloadFileAtURL = (url) => {
        fetch(url)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const a = document.createElement('a');
                a.href = url;
                a.setAttribute('download', 'resume.pdf');
                document.body.appendChild(a);
                a.click();
                a.remove();
            })
            .catch(error => console.error('Download failed:', error));
    };

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
                    {/* <a className="flex gap-4" href="resume.pdf" download><button className="btn btn-outline btn-info mt-10 "> <FaDownload /> Download Resume</button></a> */}
                    <button onClick={()=>{downloadFileAtURL(pdf_File_Url)}} id="download" className="btn btn-outline btn-info mt-10 "> <FaDownload /> Download Resume</button>
                </div>
                <div>
                   <img className="h-[400px] rounded-full" src="images/link.jpeg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;