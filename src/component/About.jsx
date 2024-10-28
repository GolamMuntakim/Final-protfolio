

import Lottie from 'lottie-react';
import about from '../about.json'

const About = () => {
    return (
        <div>
            <div id="about" className='font-bold text-3xl mt-10 text-center border-2-b  border-cyan-950 '>About Me</div>
            <div className='mt-10 flex flex-col lg:flex-row items-center justify-center gap-30'>
                <div className='border-2 p-8 rounded-md border-cyan-400 w-[350px] lg:w-[450px] hover:bg-cyan-400 hover:text-black'>My self <span className='font-bold  '>Golam Muntakim Sorowar</span>.I am from Noakhali. I am a <span className='font-bold'>Frontend developer</span>.I am continuing my graduation in Green Univarsity Of Bangladesh.I am very curious about technology  And I love to explore web developemnt technology.That's why i learn web development. Now i am working with frontend technology like react js , tailwind css, next js and familier with beckend technologys.I want to become a very good fullstack developer</div>
                <div className='hidden lg:flex lg:w-[500px]'> <Lottie className='h-[400px]' animationData={about}></Lottie></div>
            </div>
        </div>
    );
};

export default About;