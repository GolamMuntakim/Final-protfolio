

const Skill = () => {
    return (
        <div id="skill">
            <div><h1 className='font-bold text-3xl mt-10 text-center border-2-b  border-cyan-950 '>Skills</h1></div>
            <div className="grid grid-cols-5 lg:flex justify-center items-center mt-10 gap-2">
                {/* <img className="h-10 lg:h-20 transform transition-transform hover:scale-110" src="images/hcj.png" alt=""  /> */}
                <img className="h-10 lg:h-20 transform transition-transform hover:scale-110" src="images/html1.webp" alt=""  />
                <img className="h-10 lg:h-20 transform transition-transform hover:scale-110" src="images/css1.webp" alt=""  />
                <img className="h-10 lg:h-20 transform transition-transform hover:scale-110" src="images/js1.jpg" alt=""  />
                <img className="h-10 lg:h-20 transform transition-transform hover:scale-110" src="images/Tailwind CSS.png" alt=""  />
                <img className="h-10 lg:h-20 transform transition-transform hover:scale-110" src="images/react.png" alt=""  />
                <img className="h-10 lg:h-20 transform transition-transform hover:scale-110" src="images/next.png" alt=""  />
                <img className="h-10 lg:h-20 transform transition-transform hover:scale-110" src="images/node.png" alt=""  />
                <img className="h-10 lg:h-20 transform transition-transform hover:scale-110" src="images/express.png" alt=""  />
                <img className="h-10 lg:h-20 transform transition-transform hover:scale-110" src="images/mongodb.png" alt=""  />
                <img className="h-10 lg:h-20 transform transition-transform hover:scale-110" src="images/git.png" alt=""  />
            </div>
        </div>
    );
};

export default Skill;