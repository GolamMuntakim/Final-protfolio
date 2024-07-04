import { useState } from "react";


const Education = () => {
    const [showCertificate, setShowCertificate] = useState(false);

    const handleViewCertificate = () => {
        setShowCertificate(true);
    };
    return (
        <div className="mt-10">
            <div className="text-center text-3xl font-bold"><h1>Educational & Courses</h1></div>
            <div className="flex justify-center items-center gap-36 mt-10">
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
                <button
                        className="btn btn-outline btn-info mt-2"
                        onClick={handleViewCertificate}
                    >
                        View Certificate
                    </button>
                    {showCertificate && (
                        <div className="mt-4">
                            <iframe
                                src="/public/certificate.pdf"
                                title="Certificate"
                                className="w-full h-64 border-2 border-gray-300 rounded-md"
                            ></iframe>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Education;