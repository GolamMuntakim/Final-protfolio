

import About from './component/About'
import Banner from './component/Banner'
import Contuct from './component/Contuct'
import Design from './component/Design'
import Education from './component/Education'
import Footer from './component/Footer'
import Project from './component/Project'
import Skill from './component/Skill'

const Home = () => {
    return (
        <div>
             <div className=" w-full h-screen text-white">
        
        <div>
          <Banner></Banner>
        </div>
        <div>
          <About></About>
        </div>
        <div>
          <Education></Education>
        </div>
        <div>
          <Skill></Skill>
        </div>
        <div>
          <Project></Project>
        </div>
        <div>
          <Contuct></Contuct>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
        </div>
    );
};

export default Home;