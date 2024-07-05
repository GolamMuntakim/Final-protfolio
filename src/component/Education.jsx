
import pdf_File_Url from "../../public/certificate.pdf"
import { FaDownload } from "react-icons/fa";

const Education = () => {
    const downloadFileAtURL = (url) => {
        fetch(url)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const a = document.createElement('a');
                a.href = url;
                a.setAttribute('download', 'certificate.pdf');
                document.body.appendChild(a);
                a.click();
                a.remove();
            })
            .catch(error => console.error('Download failed:', error));
    };
    return (
        <div className="mt-10">
            <div className="text-center text-3xl font-bold"><h1>Educational & Courses</h1></div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-36 mt-10">
                <div className="w-400 border-2 border-cyan-300 p-10 rounded-md">
                    <h1 className="font-bold text-2xl border-b-2 w-28  border-b-cyan-200 ">Education</h1>
                    <h1>Institution: Chowmouni Government S.A College</h1>
                    <h1>Exam: H.S.C</h1>
                    <h1>Group: Science</h1>
                    <h1>G.P.A: 4.51</h1>
                </div>
                <div className="w-600 border-2 border-cyan-300 p-10 rounded-md">
                <h1 className="font-bold text-2xl border-b-2 w-20  border-b-cyan-200 ">Course</h1>
                <h1>Institute : Programming Hero</h1>
                <h1>Course : Web development</h1>
                <button onClick={()=>{downloadFileAtURL(pdf_File_Url)}} id="download" className="btn btn-outline btn-info mt-10 "> <FaDownload /> Download certificate</button>
                    
                </div>
            </div>
        </div>
    );
};

export default Education;