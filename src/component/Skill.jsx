

const Skill = () => {
    return (
        <div id="skill">
            <div><h1 className='font-bold text-3xl mt-10 text-center border-2-b  border-cyan-950 '>Skills</h1></div>
            <div className="flex flex-col lg:flex-row justify-center items-center mt-10 gap-2">
                <img className="h-24 transform transition-transform hover:scale-110" src="/public/images/hcj.png" alt=""  />
                <img className="h-24 transform transition-transform hover:scale-110" src="/public/images/Tailwind CSS.png" alt=""  />
                <img className="h-24 transform transition-transform hover:scale-110" src="/public/images/react.png" alt=""  />
                <img className="h-24 transform transition-transform hover:scale-110" src="/public/images/next.png" alt=""  />
                <img className="h-24 transform transition-transform hover:scale-110" src="/public/images/node.png" alt=""  />
                <img className="h-24 transform transition-transform hover:scale-110" src="/public/images/express.png" alt=""  />
                <img className="h-24 transform transition-transform hover:scale-110" src="/public/images/mongodb.png" alt=""  />
                <img className="h-24 transform transition-transform hover:scale-110" src="/public/images/git.png" alt=""  />
            </div>
        </div>
    );
};

export default Skill;