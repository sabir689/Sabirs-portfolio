import { motion } from 'framer-motion';
import img from '../assets/bg.png'
import TypingAnimation from './TypingAnimation';
import { FaFacebookF, FaGithub,  FaICursor,  FaLinkedinIn } from 'react-icons/fa';


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
                            Hi, I'm <span className="text-[#804dee]">Azizul Haque Lemon</span>
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

                    <a href="#_" className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                        <span className="w-full h-full bg-gradient-to-br from-[#804dee] via-[#ff5479d2] to-[#2b05ff] group-hover:from-[#804dee] group-hover:via-[#ff5479b9] group-hover:to-[#2b05ff] absolute"></span>
                        <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                            <span className="relative text-white">Download Resume</span>
                        </span>
                    </a>
                </div>

                <div>
                    <a href="#_" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#804dee] absolute bottom-0 left-0 -translate-x-full ease-out duration-1000 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-black transition-colors duration-400 ease-in-out group-hover:text-white">Hire Me</span>
                    </a>
                </div>
            </motion.div>

            <div className='my-8 flex gap-10'>
                <a href="#_" className="relative inline-flex items-center justify-center btn btn-outline btn-circle border-[#804dee] overflow-hidden font-mono font-medium tracking-tighter text-[#804dee] bt group">
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#804dee] rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                    <span className="relative"><FaFacebookF></FaFacebookF></span>
                </a>
                <a href="#_" className="relative inline-flex items-center justify-center btn btn-outline btn-circle border-[#804dee] overflow-hidden font-mono font-medium tracking-tighter text-[#804dee] bt group">
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#804dee] rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                    <span className="relative"><FaGithub></FaGithub></span>
                </a>
                <a href="#_" className="relative inline-flex items-center justify-center btn btn-outline btn-circle border-[#804dee] overflow-hidden font-mono font-medium tracking-tighter text-[#804dee] bt group">
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#804dee] rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent"></span>
                    <span className="relative"><FaLinkedinIn></FaLinkedinIn></span>
                </a>
            </div>

            {/* About section
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-4xl font-bold text-center"
                    >
                        About Me
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-2 text-lg text-center"
                    >
                        Share a brief overview of your background, skills, and interests
                    </motion.p>

                </div>
            </section>

            
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-4xl font-bold text-center "
                    >
                        Contact Me
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-4 text-lg text-center"
                    >
                        Provide ways for visitors to get in touch with you
                    </motion.p>
                    <div className="mt-12 flex justify-center">
                        <div className="max-w-lg">
                            <form className="grid grid-cols-1 gap-6">
                                <div className="block">
                                    <label htmlFor="name" className="text-lg ">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className="block">
                                    <label htmlFor="email" className="text-lg ">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Your email address"
                                    />
                                </div>
                                <div className="block">
                                    <label htmlFor="message" className="text-lg ">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        rows="4"
                                        placeholder="Your message"
                                    ></textarea>
                                </div>
                                <div className="block">
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-colors duration-300"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section> */}
        </div >
    );
};

export default Home;