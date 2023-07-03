import  { useState } from 'react';

const ContactForm = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        // You can send the form data to your backend or perform any other action
        // For now, let's log the form data
        console.log({ fullName, email, contactNumber, subject, message });
        // Clear form inputs
        setFullName('');
        setEmail('');
        setContactNumber('');
        setSubject('');
        setMessage('');
    };

    return (
        <div className="w-2/3 mx-auto pb-20">
            <h2 className='text-center text-white font-bold text-4xl my-10'>Contact <span className='text-[#804dee]'>Me</span></h2>
            <form onSubmit={handleSubmit}>
                <div className="flex gap-4 mb-4">
                    <div className="w-1/2">
                        <label htmlFor="fullName" className="block mb-2 text-white">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full border-gray-300 border p-2 rounded "
                            required
                        />
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="contactNumber" className="block mb-2 text-white">
                            Contact Number
                        </label>
                        <input
                            type="tel"
                            id="contactNumber"
                            value={contactNumber}
                            onChange={(e) => setContactNumber(e.target.value)}
                            className="w-full border-gray-300 border p-2 rounded"
                            required
                        />
                    </div>
                </div>
                <div className='flex gap-4'>
                <div className="w-1/2">
                    <label htmlFor="email" className="block mb-2 text-white">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border-gray-300 border p-2 rounded"
                        required
                    />
                </div>
                <div className="w-1/2">
                    <label htmlFor="subject" className="block mb-2 text-white">
                        Email Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full border-gray-300 border p-2 rounded"
                        required
                    />
                </div>
                </div>
                <div className="my-4">
                    <label htmlFor="message" className="block mb-2 text-white">
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full border-gray-300 border p-2 rounded"
                        rows="5"
                        required
                    ></textarea>
                </div>
                <div className='text-center'>
                    <button type='submit'>
                        <a href="#_" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                            <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#804dee] absolute bottom-0 left-0 -translate-x-full ease-out duration-1000 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <span className="relative w-full text-left text-black transition-colors duration-400 ease-in-out group-hover:text-white">Send Message</span>
                        </a>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
