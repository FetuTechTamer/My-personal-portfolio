import React, { useRef, useState } from 'react';

const Contact = ({ theme }) => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbznv6eS0d_-dZIoF8OQz06n5j1PgjS7Wg6odP50CNX0qQ61lY6O7dn6vKcXgPX51GF-JA/exec';
    const formRef = useRef(null);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const email = formData.get('email');
        const messageContent = formData.get('message');

        // Validate email format
        if (!isValidEmail(email)) {
            setMessage("Error: Please enter a valid email address.");
            setMessageType("error");
            return;
        }

        // Validate message word count
        if (!isValidMessage(messageContent)) {
            setMessage("Error: Message must not exceed 500 words.");
            setMessageType("error");
            return;
        }

        setMessage("Sending your message...");
        setMessageType("info");

        try {
            const response = await fetch(scriptURL, { method: 'POST', body: formData });
            if (!response.ok) {
                throw new Error('Script function not found: doGet');
            }

            await response.json();
            setMessage("Message sent successfully!");
            setMessageType("success");
            formRef.current.reset();
            setTimeout(() => setMessage(""), 5000);
        } catch (error) {
            handleError(error);
        }
    };

    const isValidEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const isValidMessage = (messageContent) => {
        const wordCount = messageContent.trim().split(/\s+/).length;
        return wordCount <= 500;
    };

    const handleError = (error) => {
        if (error.message === 'Script function not found: doGet') {
            setMessage("Error: The server script is not configured correctly.");
        } else {
            setMessage("Error sending message!");
        }
        setMessageType("error");
        console.error('Error!', error.message);
    };

    return (
        <div className={`flex justify-center my-5 h-full sm:h-[70vh] items-center ${theme === 'light' ? 'bg-white' : 'bg-black'}`} id="contact">
            <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className={`p-6 mr-2 rounded-xl flex flex-col justify-around ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-800'}`}>
                        <h1 className={`text-4xl sm:text-5xl ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                            Contact <span>Me</span>
                        </h1>
                        <p className={`text-normal text-lg mt-2 ${theme === 'light' ? 'text-gray-800' : 'text-gray-400'}`}>
                            Get in Touch <br /> I’d love to hear from you.<br /> Feel free to reach out anytime!
                        </p>
                    </div>

                    <form ref={formRef} onSubmit={handleSubmit} className={`p-6 flex flex-col justify-center max-w-[700px] ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                        <input type="text" name="name" placeholder="Full Name" className={`w-full mt-2 p-3 rounded-lg border border-gray-700 ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-800 text-white'}`} required />
                        <input type="email" name="email" placeholder="Email" className={`w-full mt-2 p-3 rounded-lg border border-gray-700 ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-800 text-white'}`} required />
                        <textarea name="message" placeholder="Your Message" className={`w-full mt-2 p-3 rounded-lg border border-gray-700 ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-800 text-white'}`} required></textarea>
                        <button type="submit" className="bg-primary-color text-white py-3 px-6 rounded-lg mt-3">Submit</button>
                        {message && (
                            <div className={`mt-3 ${messageType === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                                {message}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;