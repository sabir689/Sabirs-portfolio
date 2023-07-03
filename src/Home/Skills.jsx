import img from '../assets/html.png'
import img1 from '../assets/css.png'
import img3 from '../assets/js.png'
import img4 from '../assets/tailwind.png'
import img2 from '../assets/bootstrap.png'
import img5 from '../assets/express.png'
import img6 from '../assets/react.png'
import img7 from '../assets/nodejs.png'
import img8 from '../assets/firebase.png'
import img9 from '../assets/github.png'
import img10 from '../assets/mongodb.png'
import ProgressBar from "@ramonak/react-progress-bar";



const Skills = () => {
    return (
        <div className=''>
            <h2 className='text-center text-white font-bold text-4xl'>My <span className='text-[#804dee]'>Skills</span></h2>
            <div className='sm:grid grid-cols-3  text-white items-center justify-between py-10 px-4'>
                <div className="flex items-center gap-2">
                    <div className='w-1/6'>
                        <img src={img} alt="" />
                    </div>
                    <div>
                        <h3 className='font-semibold text-lg'>HTML</h3>
                      <ProgressBar completed={85} className='w-52' bgColor='#804dee'></ProgressBar>
                       
                    </div>

                </div>
                <div className="flex gap-2 pb-2">
                    <div className='w-1/6'>
                        <img src={img1} alt="" />
                    </div>
                    <div>
                        <h3 className='font-semibold text-lg'>CSS</h3>
                        <ProgressBar completed={80} className='w-52' bgColor='#804dee'></ProgressBar>
                       
                    </div>

                </div>
                <div className="flex  gap-2 pb-2">
                    <div className='w-1/6'>
                        <img src={img3} alt="" />
                    </div>
                    <div>
                        <h3 className='font-semibold text-lg'>JavaScript</h3>
                        <ProgressBar completed={70} className='w-52' bgColor='#804dee'></ProgressBar>
                       
                    </div>

                </div>
                <div className="flex  gap-2 pb-2">
                    <div className='w-1/6'>
                        <img src={img2} alt="" />
                    </div>
                    <div>
                        <h3 className='font-semibold text-lg'>Bootstrap</h3>
                        <ProgressBar completed={90} className='w-52' bgColor='#804dee'></ProgressBar>
                       
                    </div>

                </div>
                <div className="flex  gap-2 pb-2">
                    <div className='w-1/6'>
                        <img src={img4} alt="" />
                    </div>
                    <div>
                        <h3 className='font-semibold text-lg'>Tailwind Css</h3>
                        <ProgressBar completed={90} className='w-52' bgColor='#804dee'></ProgressBar>
                       
                    </div>

                </div>
                <div className="flex  gap-2 pb-2">
                    <div className='w-1/6'>
                        <img src={img10} alt="" />
                    </div>
                    <div>
                        <h3 className='font-semibold text-lg'>MongoDB</h3>
                        <ProgressBar completed={60} className='w-52' bgColor='#804dee'></ProgressBar>
                       
                    </div>

                </div>
                <div className="flex  gap-2 pb-2">
                    <div className='w-1/6'>
                        <img src={img5} alt="" />
                    </div>
                    <div>
                        <h3 className='font-semibold text-lg'>Express Js</h3>
                        <ProgressBar completed={55} className='w-52' bgColor='#804dee'></ProgressBar>
                       
                    </div>

                </div>
                <div className="flex  gap-2 pb-2">
                    <div className='w-1/6'>
                        <img src={img6} alt="" />
                    </div>
                    <div>
                        <h3 className='font-semibold text-lg'>React</h3>
                        <ProgressBar completed={70} className='w-52' bgColor='#804dee'></ProgressBar>
                       
                    </div>

                </div>
                <div className="flex  gap-2 pb-2">
                    <div className='w-1/6'>
                        <img src={img7} alt="" />
                    </div>
                    <div>
                        <h3 className='font-semibold text-lg'>Node Js</h3>
                        <ProgressBar completed={55} className='w-52' bgColor='#804dee'></ProgressBar>
                       
                    </div>

                </div>
                <div className="flex  gap-2 pb-2">
                    <div className='w-1/6'>
                        <img src={img8} alt="" />
                    </div>
                    <div>
                        <h3 className='font-semibold text-lg'>Firebase</h3>
                        <ProgressBar completed={80} className='w-52' bgColor='#804dee'></ProgressBar>
                       
                    </div>

                </div>
                <div className="flex gap-6 pb-2">
                    <div className='w-1/6'>
                        <img className='bg-white rounded-full' src={img9} alt="" />
                    </div>
                    <div>
                        <h3 className='font-semibold text-lg'>Github</h3>
                        <ProgressBar bgColor='#804dee' className='w-52' completed="80%"></ProgressBar>
                        
                        
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Skills;