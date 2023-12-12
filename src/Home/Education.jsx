
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <div>
            <h3 className="text-center text-4xl font-bold p-8 text-[#804dee]">Education</h3>
            <div className="flex grid grid-cols-3 gap-6 mb-20">
                <motion.div
                    className="border-2 border-[#804dee] py-40 rounded-2xl p-4"
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{ scale: 0.8, rotate: -90, borderRadius: '100%' }}
                >
                    <h3 className="text-[#804dee] text-2xl">2015-2017</h3>
                    <h1 className="text-[#804dee] text-4xl">Secondary School Certificate</h1>
                    <p>BIAM MODEL SCHOOL AND COLLEGE, Bogura</p>
                </motion.div>
                <motion.div
                    className="border-2 border-[#804dee] py-40 rounded-2xl p-4"
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{ scale: 0.8, rotate: -90, borderRadius: '100%' }}
                >
                    <h3 className="text-[#804dee] text-2xl">2017-2019</h3>
                    <h1 className="text-[#804dee] text-4xl">Higher Secondary Certificate</h1>
                    <p>Government Azizul Haque College, Bogura</p>
                </motion.div>
                <motion.div
                    className="border-2 border-[#804dee] py-40 rounded-2xl p-4"
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{ scale: 0.8, rotate: -90, borderRadius: '100%' }}
                >
                    <h3 className="text-[#804dee] text-2xl">2020-2024</h3>
                    <h1 className="text-[#804dee] text-4xl">Bachelor of Science</h1>
                    <p>Pundra University of Science and Technology, Bogura</p>
                </motion.div>
            </div>
        </div>
    );
};



export default Education;