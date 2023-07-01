import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className="min-h-screen text-white">
            {/* Navbar */}
            <nav className="shadow-lg">
                <div className="container mx-auto px-4">
                    {/* Navbar content */}
                    {/* Add your logo and navigation links here */}
                </div>
            </nav>



            {/* Hero section */}
            <header className="py-16">
                <div className="container mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold text-center  -800"
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="block"
                        >
                            Welcome to
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="block text-[#804dee]"
                        >
                            My Portfolio
                        </motion.span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="mt-4 text-xl text-center"
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
                    {/* Add more content or showcase your work here */}
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