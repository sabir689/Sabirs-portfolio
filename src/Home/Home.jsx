import { motion } from 'framer-motion';
import img from '../assets/bg.png'
import TypingAnimation from './TypingAnimation';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';


const Home = () => {
    const fixedWord = "I'm a,";
    const changingWords = ['Front End Developer', 'MERN Stack Developer', 'Self Learner'];
    const delay = 2000;
    return (
        <div className=" text-white px-4">
            {/* Hero section */}
            <section className="pt-8 sm:flex gap-4 items-center justify-center">
                <div className="container mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold text-left mt-0"
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="block"
                        >
                            Hi, I'm <span className="text-[#804dee]">Sahariar Hasan Sabir</span>
                        </motion.span>
                    </motion.h1>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="mt-5 text-left relative font-bold"
                    >
                        <TypingAnimation fixedWord={fixedWord} changingWords={changingWords} delay={delay} />
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="mt-5 max-w-2xl text-left text-[#d5c8f0]"
                    >
                        Results-driven and highly skilled MERN stack and frontend developer with 2 years of experience in crafting scalable and intuitive web applications. Experienced in developing RESTful APIs using Node.js, Express, and MongoDB, ensuring secure data management and efficient communication between frontend and backend systems.
                    </motion.p>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className='items-center justify-center'
                >
                    <motion.img
                        className='max-w-xl'
                        src={img}
                        alt=""

                    />
                </motion.div>
            </section>



            {/* buttons */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }} className='flex gap-5 sm:mt-8'>
                <div>
                    <a href="https://drive.google.com/file/d/1ZLGlUQGpUxb6mVB4WJ6iqh7cL4qa5lgn/view?usp=sharing" className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                        <span className="w-full h-full bg-gradient-to-br from-[#804dee] via-[#ff5479d2] to-[#2b05ff] group-hover:from-[#804dee] group-hover:via-[#ff5479b9] group-hover:to-[#2b05ff] absolute"></span>
                        <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                            <span className="relative text-white">Download Resume</span>
                        </span>
                    </a>
                </div>

                <div>
                    <a href="" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#804dee] absolute bottom-0 left-0 -translate-x-full ease-out duration-1000 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-black transition-colors duration-400 ease-in-out group-hover:text-white">Hire Me</span>
                    </a>
                </div>
            </motion.div>

            <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.8 }}className='my-8 flex gap-8'>
                <a href="https://www.facebook.com/sahariar.sabir.3/" className="relative inline-flex items-center justify-center btn btn-outline btn-circle border-[#804dee] overflow-hidden font-mono font-medium tracking-tighter text-[#804dee] bt group">
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#804dee] rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                    <span className="relative"><FaFacebookF></FaFacebookF></span>
                </a>
                <a href="https://github.com/sabir689" className="relative inline-flex items-center justify-center btn btn-outline btn-circle border-[#804dee] overflow-hidden font-mono font-medium tracking-tighter text-[#804dee] bt group">
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#804dee] rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                    <span className="relative"><FaGithub></FaGithub></span>
                </a>
                <a href="https://www.linkedin.com/in/sahariar-hasan-sabir-5b59162a3/" className="relative inline-flex items-center justify-center btn btn-outline btn-circle border-[#804dee] overflow-hidden font-mono font-medium tracking-tighter text-[#804dee] bt group">
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#804dee] rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                    <span className="relative"><FaLinkedinIn></FaLinkedinIn></span>
                </a>
            </motion.div>
        </div >
    );
};

export default Home;