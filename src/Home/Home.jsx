import { motion } from 'framer-motion';
import img from '../assets/bg remove.png'
import TypingAnimation from './TypingAnimation';

const Home = () => {
    const fixedWord = "I'm a,";
    const changingWords = ['Front End Developer', 'MERN Stack Developer', 'Self Learner'];
    const delay = 2000;
    return (
        <div className="min-h-screen text-white">
            {/* Hero section */}
            <header className="py-16 sm:flex items-center justify-center">
                <div className="container mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold text-left"
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="block"
                        >
                            Hi, I'm <span className=" text-[#804dee]">Azizul Haque Lemon</span>
                        </motion.span>
                    </motion.h1>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="mt-4 text-left relative font-bold"
                    >
                       <TypingAnimation fixedWord={fixedWord} changingWords={changingWords} delay={delay} />
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="mt-4 text-xl text-left"
                    >
                        Showcase your skills and accomplishments here
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="mt-8 text-white font-semibold py-2 px-4 rounded-full shadow-lg"
                    >
                        Download my Resume
                    </motion.button>
                    <button className='btn btn-outline btn-primary'>Hire Me</button>
                </div>
                <div className='items-center justify-center'><img className='max-w-xl' src={img} alt="" /></div>
            </header>


            {/* About section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-4xl font-bold text-center   -800"
                    >
                        About Me
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-4 text-lg text-center"
                    >
                        Share a brief overview of your background, skills, and interests
                    </motion.p>
                    
                </div>
            </section>

            {/* Contact section */}
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
            </section>
        </div >
    );
};

export default Home;